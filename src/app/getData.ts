export const getData = async (apiUrl: string, revalidate?: number) => {
  const res = await fetch(apiUrl, { next: { revalidate } });
  return res.json();
};
