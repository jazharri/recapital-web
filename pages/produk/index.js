import axios from 'axios'
import ProdukCard from '../../components/ProdukCard'

export async function getStaticProps() {
  const res = await axios.get(process.env.STRAPI_API_URL + '/produk-reksadanas?populate=*')
  return { props: { produk: res.data.data || [] }, revalidate: 60 }
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
