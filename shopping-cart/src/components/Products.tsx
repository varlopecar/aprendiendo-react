import React, { useEffect, useState } from "react";
import { getProducts } from "../services/getProducts";
import { Product } from "../models/Product";
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    return (
        <div className="m-4">
            <h1 className="text-2xl font-bold">Products</h1>
            <ul className="mt-4 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <li key={product.id} className="flex items-center space-x-4">
                        <Link to={`/product/${product.id}`} className="hover:text-gray-600">
                        <img src={product.images[0]} alt={product.title} className="w-16 h-16" />
                        <div>
                            <h2 className="font-bold">{product.title}</h2>
                            <p className="text-sm">${product.price}</p>
                        </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}