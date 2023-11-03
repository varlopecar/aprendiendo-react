import { Link } from "react-router-dom"
import { CartIcon } from "../../components/Icons"
import Products from "../../components/Products"

const HomePage = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <h1 className="text-2xl font-bold">Shop</h1>
        <ul>
          <li className="inline-block mr-4 hover:text-gray-600">
            <Link to="/cart" className="hover:text-gray-600">
              <CartIcon />
            </Link>
          </li>
        </ul>
      </header>
      <main>
        <Products />
      </main>
    </div>
  )
}

export default HomePage