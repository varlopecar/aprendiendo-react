import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../../models/Product'
import { getProductById } from '../../services/getProducts'

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    const isValidId = !isNaN(Number(id))
    console.log(id, isValidId)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!isValidId) return

        const fetchProduct = async () => {
            setLoading(true)
            const product = await getProductById(Number(id))
            setProduct(product)
            console.log(product)
            setLoading(false)
        }

        fetchProduct()
    }, [id, isValidId])

    return (
        <div className="m-4">
            {product && (
                <div className="flex items-center space-x-4">
                    <img src={product.images[0]} alt={product.title} className="w-16 h-16" />
                    <div>
                        <h2 className="font-bold">{product.title}</h2>
                        <p className="text-sm">${product.price}</p>
                    </div>
                </div>
            )}
            {loading && <p>Loading...</p>}
            {!loading && !product && <p>Product not found</p>}
        </div>
    )
}

export default ProductDetails