import axios from 'axios'

export async function getServerSideProps() {
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL
  let nav = []
  try {
    const res = await axios.get(`${API_URL}/navs?populate=*`, { timeout: 15000 })
    nav = res.data.data || []
  } catch (err) {
    console.error('Failed to fetch nav:', err.message)
    nav = []
  }
  return { props: { nav } }
}

export default function NAV({ nav }) {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold text-recapblue mb-6">NAV Harian</h1>
      <div className="grid gap-5">
        {nav.map(item => (
          <div key={item.id} className="border rounded p-4">
            <div>{item.attributes.nama_produk}</div>
            <div>NAV: {item.attributes.nilai_nav}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
