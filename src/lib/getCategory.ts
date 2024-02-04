export default async function getCategory() {
  const response = await fetch(
    "https://irdf.onrender.com/api/v1/categories/list?sub_cat=true&dua=true",
    { next: { revalidate: 60 } }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch categories list");
  }
  return response.json();
}
