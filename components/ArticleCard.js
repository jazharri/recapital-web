export default function ArticleCard({ artikel }) {
  const { attributes } = artikel
  return (
    <div className="border rounded-xl p-4 bg-white">
      <h2 className="font-bold text-lg">{attributes.judul}</h2>
      <p className="text-gray-600">{attributes.isi?.slice(0, 120)}...</p>
    </div>
  )
}
