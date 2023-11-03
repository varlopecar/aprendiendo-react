const BASE_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    const products = data.products;

    return products.map((product: any) => ({
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
