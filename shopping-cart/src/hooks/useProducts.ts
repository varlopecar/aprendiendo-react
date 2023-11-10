import { useRef, useState } from "react";
import { Product } from "../models/Product";
import { getProducts } from "../services/getProducts";

interface ProductsHook {
  search?: string | null;
}

const useProducts = ({ search }: ProductsHook) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const previousSearch = useRef<string | null | undefined>(null);

  const loadProducts = async () => {
    if (previousSearch.current === search) return;

    try {
      setLoading(true);
      setError(false);
      let products = await getProducts();
      previousSearch.current = search;
      if (search) {
        products = products.filter((product: Product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );
      }
      setProducts(products);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    loadProducts,
  };
};

export default useProducts;
