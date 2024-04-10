export const getCarousels = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WP_API_URL +
      "/carousels?_fields=id,title,acf&acf_format=standard",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: any[] = await res.json();
  return data;
};
