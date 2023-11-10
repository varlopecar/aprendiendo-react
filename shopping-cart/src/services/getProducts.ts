import { Product } from "../models/Product";

const BASE_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    const products = data.products;

    return products.map((product: Product) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
      thumbnail: product.thumbnail,
      images: product.images,
    }));
  } catch (error) {
    throw new Error('Error fetching products');
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();

    console.log(data);

    const product = data;
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
      thumbnail: product.thumbnail,
      images: product.images,
    };
  } catch (error) {
    throw new Error('Error fetching product');
  }
}
