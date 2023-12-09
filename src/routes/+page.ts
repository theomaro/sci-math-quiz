import { PUBLIC_API_URL } from "$env/static/public";
import { error } from "@sveltejs/kit";

export const load = async ({ fetch }) => {
  let subjects: Subject[] = await fetch(PUBLIC_API_URL)
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((subject) => subject);

  if (!subjects) throw error(404, "Page not found");

  return { subjects };
};
