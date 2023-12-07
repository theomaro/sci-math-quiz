import { PUBLIC_API_URL } from "$env/static/public";

export const load = async ({ fetch }) => {
  let data: { quizzes: Subject[] } = await fetch(PUBLIC_API_URL).then((res) => {
    if (res.ok) return res.json();
  });

  return { quizzes: data };
};
