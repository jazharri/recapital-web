import axios from 'axios'
import ProdukCard from '../../components/ProdukCard'

export async function getServerSideProps() {
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL
  let produk = []
  try {
    const res = await axios.get(`${API_URL}/produk-reksadanas?populate=*`, { timeout: 15000 })
    produk = res.data.data || []
  } catch (err) {
    console.error('Failed to fetch produk:', err.message)
    produk = []
  }
  return { props: { produk } }
}


export default function Produk({ produk }) {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold text-recapblue mb-6">Daftar Produk Reksadana</h1>
      <div className="grid md:grid-cols-2 gap-5">
        {produk.map(item => <ProdukCard key={item.id} produk={item} />)}
      </div>
    </div>
  )
}
