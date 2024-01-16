import { PUBLIC_API_URL } from "$env/static/public";

export const load = async ({ fetch }) => {
  const subjects: Subject[] = await fetch(PUBLIC_API_URL).then((res) =>
    res.json()
  );
  return { subjects };
};
