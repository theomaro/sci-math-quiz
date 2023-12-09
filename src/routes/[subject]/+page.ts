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
  params: { subject: string };
}) {
  let subjects: Subject[] = await fetch(PUBLIC_API_URL)
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((subject) => subject);

  const subject = subjects.find(
    (subject: Subject) => subject.name.replaceAll(" ", "-") === params.subject
  );

  if (!subject) throw error(404, "Page not found");

  return { subject, params };
}
