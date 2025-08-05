export default function Checkout() {
  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Finalizar Compra</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Nome completo" className="w-full border border-gray-300 p-3 rounded" />
        <input type="email" placeholder="E-mail" className="w-full border border-gray-300 p-3 rounded" />
        <input type="text" placeholder="Endereço" className="w-full border border-gray-300 p-3 rounded" />
        <button type="submit" className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">Confirmar Pedido</button>
      </form>
    </div>
  )
}