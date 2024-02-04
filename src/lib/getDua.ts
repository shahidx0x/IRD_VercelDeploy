export default async function getDua(cat_id: number) {
  const response = await fetch(
    `https://irdf.onrender.com/api/v1/categories/list?dua=true&cat_id=${cat_id}`,
    { next: { revalidate: 60 } }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Dua List");
  }
  return response.json();
}
