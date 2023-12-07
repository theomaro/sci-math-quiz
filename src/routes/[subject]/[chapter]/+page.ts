import { PUBLIC_API_URL } from "$env/static/public";
import { error } from "@sveltejs/kit";

export async function load({
  fetch,
  params,
}: {
  fetch: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ) => Promise<Response>;
  params: { subject: string; chapter: string };
}) {
  const subjects: Subject[] = await fetch(PUBLIC_API_URL).then((res) => {
    if (res.ok) return res.json();
  });

  const chapter = subjects
    .find(
      (subject: Subject) => subject.name.replaceAll(" ", "-") === params.subject
    )
    ?.chapters.find(
      (chapter: Chapter) => chapter.title.replaceAll(" ", "-") == params.chapter
    );

  if (!chapter) throw error(404, "Page not found");

  return { chapter, params };
}
