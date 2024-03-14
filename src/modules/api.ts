// Purpose: API module for fetching products from the dummyjson API.
const BASE_URL: string = "https://dummyjson.com/products";

// Product type object
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

// Fetch all products from the API
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

// Fetch a single product by string
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
