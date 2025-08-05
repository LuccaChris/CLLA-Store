export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Produtos em destaque</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white border rounded-lg shadow hover:shadow-md transition p-4">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="text-lg font-semibold">Produto {i}</h3>
            <p className="text-sm text-gray-500 mb-2">Descrição breve do produto {i}.</p>
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    </div>
    
  )
}