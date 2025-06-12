export default function ProdukCard({ produk }) {
  const { attributes } = produk
  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-lg transition">
      <h2 className="font-bold text-lg mb-2">{attributes.nama}</h2>
      <p className="text-gray-600 mb-2">{attributes.deskripsi?.slice(0, 100)}...</p>
      <a href="#" className="text-recapblue hover:underline">Detail</a>
    </div>
  )
}
