import axios from 'axios'
import ArticleCard from '../../components/ArticleCard'

export async function getServerSideProps() {
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL
  let artikel = []
  try {
    const res = await axios.get(`${API_URL}/artikels?populate=*`, { timeout: 15000 })
    artikel = res.data.data || []
  } catch (err) {
    console.error('Failed to fetch artikel:', err.message)
    artikel = []
  }
  return { props: { artikel } }
}

export default function Artikel({ artikel }) {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold text-recapblue mb-6">Artikel</h1>
      <div className="grid md:grid-cols-2 gap-5">
        {artikel.map(item => <ArticleCard key={item.id} artikel={item} />)}
      </div>
    </div>
  )
}
