import { ButtonGroup, ButtonLink, Eyebrow } from "@/components/content-ui";
import { notFound } from "@/lib/content";

export default function NotFound() {
  return (
    <main
      className="site-shell flex min-h-[70vh] flex-col justify-center py-[90px]"
      id="main-content"
    >
      <Eyebrow>{notFound.eyebrow}</Eyebrow>
      <h1 className="mb-5 max-w-[860px] text-display">{notFound.title}</h1>
      <p className="text-body text-muted">{notFound.description}</p>
      <ButtonGroup className="mt-7">
        <ButtonLink
          href={notFound.actions[0].href}
          trailing="arrow"
          variant="primary"
        >
          {notFound.actions[0].label}
        </ButtonLink>
        <ButtonLink
          href={notFound.actions[1].href}
          trailing="arrow"
          variant="secondary"
        >
          {notFound.actions[1].label}
        </ButtonLink>
      </ButtonGroup>
    </main>
  );
}
