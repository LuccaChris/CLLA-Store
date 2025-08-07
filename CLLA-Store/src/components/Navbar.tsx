import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileButton } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black tracking-tight">
          Premium <span className="text-zinc-600">imports</span><FontAwesomeIcon icon={faMobileButton} size="1x" />
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <Link to="/products" className="hover:text-blue-500 transition">Produtos</Link>
          <Link to="/cart" className="hover:text-blue-500 transition">Carrinho</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
