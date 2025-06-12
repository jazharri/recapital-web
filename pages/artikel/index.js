import axios from 'axios'
import ArticleCard from '../../components/ArticleCard'

export async function getStaticProps() {
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL
const res = await axios.get(`${API_URL}/produk?populate=*`)

  //const res = await axios.get(process.env.STRAPI_API_URL + '/artikels?populate=*')
  return { props: { artikel: res.data.data || [] }, revalidate: 60 }
}

export default function Artikel({ artikel }) {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold text-recapblue mb-6">Artikel</h1>
      <div className="space-y-4">
        {artikel.map(item => <ArticleCard key={item.id} artikel={item} />)}
      </div>
    </div>
  )
}
