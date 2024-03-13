const BASE_URL: string = "https://dummyjson.com/products";

export type Product = {
  id: number;
  title: string;
  price: number;
  stock: number;
  description: string;
  rating: number;
  category: string;
  thumbnail: string;
};

export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.products as Product[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProductBySearchString(
  searchString: string
): Promise<Product[]> {
  try {
    const response = await fetch(`${BASE_URL}/search?q=${searchString}`);
    if (!response.ok) {
      throw new Error(`$Error: ${response.status}`);
    }
    const data = await response.json();
    return data.products as Product[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
