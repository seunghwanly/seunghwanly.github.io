import Link from "next/link";
import { Card, Screen, column } from "@/components/content-ui";
import { notFound } from "@/lib/content";

export default function NotFoundPage() {
  return (
    <Screen centered>
      <div className={`mx-auto ${column}`}>
        <Card>
          <p className="text-section text-muted">{notFound.code}</p>
          <h1 className="mt-1 mb-2 text-card text-ink">{notFound.title}</h1>
          <p className="text-lede text-ink">{notFound.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {notFound.actions.map((action) => (
              <Link
                className="inline-flex items-center pill px-5 py-2.5 text-body text-ink no-underline transition-opacity duration-200 ease-soft hover:opacity-75"
                href={action.href}
                key={action.href}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </Screen>
  );
}
