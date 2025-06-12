import axios from 'axios'

export async function getStaticProps() {
  const res = await axios.get(process.env.STRAPI_API_URL + '/navs?populate=produk')
  return { props: { navs: res.data.data || [] }, revalidate: 60 }
}

export default function NAV({ navs }) {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-2xl font-bold text-recapblue mb-6">NAV Harian</h1>
      <table className="w-full table-auto border rounded-xl bg-white shadow-sm">
        <thead>
          <tr className="bg-recapblue text-white">
            <th className="p-2">Produk</th>
            <th className="p-2">Tanggal</th>
            <th className="p-2">NAV</th>
          </tr>
        </thead>
        <tbody>
          {navs.map(nav => (
            <tr key={nav.id} className="text-center">
              <td className="p-2">{nav.attributes.produk?.data?.attributes?.nama || '-'}</td>
              <td className="p-2">{nav.attributes.tanggal}</td>
              <td className="p-2">{nav.attributes.nilai}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
