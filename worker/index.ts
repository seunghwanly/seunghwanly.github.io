/** Cloudflare Worker entry point. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  // `vinext dev` runs without Cloudflare bindings, so these are absent
  // locally even though a deployed Worker always has them.
  ASSETS?: Fetcher;
  DB: D1Database;
  IMAGES?: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image") {
      // No bindings means `vinext dev`. Serve the original file instead; the
      // GitHub Pages build sets `images.unoptimized`, so production never
      // reaches this endpoint.
      if (!env.ASSETS || !env.IMAGES) {
        const source = url.searchParams.get("url");

        // Only same-origin paths — never proxy an arbitrary absolute URL.
        if (source?.startsWith("/") && !source.startsWith("//")) {
          return fetch(new URL(source, request.url));
        }

        return new Response("Bad Request", { status: 400 });
      }

      const images = env.IMAGES;
      const assets = env.ASSETS;
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => assets.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await images.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
