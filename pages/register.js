import { useState } from 'react'
import axios from 'axios'

export default function Register() {
  const [data, setData] = useState({ nama: '', email: '', telp: '' })
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await axios.post(process.env.NEXT_PUBLIC_STRAPI_API_URL + '/pengajuan-akuns', { data })
      setSuccess(true)
    } catch (err) { alert('Gagal daftar!') }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-6 text-recapblue">Formulir Pembukaan Akun</h1>
      {success ? <div className="bg-green-100 text-green-700 p-4 mb-6 rounded">Terima kasih! Pendaftaran Anda berhasil.</div> :
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input required type="text" placeholder="Nama Lengkap" className="border p-2 rounded" onChange={e => setData({ ...data, nama: e.target.value })} />
          <input required type="email" placeholder="Email" className="border p-2 rounded" onChange={e => setData({ ...data, email: e.target.value })} />
          <input required type="tel" placeholder="Nomor Telepon" className="border p-2 rounded" onChange={e => setData({ ...data, telp: e.target.value })} />
          <button className="bg-recapblue text-white py-2 rounded mt-2 hover:bg-blue-900">Daftar</button>
        </form>
      }
    </div>
  )
}
