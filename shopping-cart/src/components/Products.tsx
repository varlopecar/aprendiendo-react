import { useState, ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export default function Products() {
    const [search, setSearch] = useState<string>("")
    const { products, loadProducts, loading, error } = useProducts({ search })
    console.log(products)

    useEffect(() => {
        loadProducts()
    }, [])

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        loadProducts()
    }

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Something went wrong</p>
    }

    return (
        <div className="m-4">
            <h1 className="text-2xl font-bold">Products</h1>
            <form className="mt-4 flex items-center" onSubmit={onSubmit}>
                <label htmlFor="input-search" className="sr-only">
                    Search
                </label>
                <input
                    value={search}
                    onChange={onChange}
                    id="input-search"
                    type="text"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Macbook, Playstation 5, Nintendo Switch..."
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 ml-2"> Search</button>
            </form>

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