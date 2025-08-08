import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-1 mt-1">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-1">

        <div>
          <h2 className="text-xl font-bold text-white mb-1">Minha Loja</h2>
          <p className="text-sm">
            Sua melhor opção para compras online, com produtos de qualidade e entrega rápida.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-1">Contato</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:contato@minhaloja.com" className="hover:text-white">contato@minhaloja.com</a></li>
            <li>Telefone: <a href="tel:+550000000000" className="hover:text-white">(00) 00000-0000</a></li>
            <li>Endereço: Rua Exemplo, 123 - São Paulo, SP</li>
          </ul>
        </div>
      </div>

      {/* Linha final */}
      <div className="mt-2 border-t border-gray-700 pt-1 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Minha Loja - Todos os direitos reservados.
      </div>
    </footer>
  )
}