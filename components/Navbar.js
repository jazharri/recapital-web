import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <div>
        <img src="/logo-recapital.png" alt="Logo" className="h-10"/>
      </div>
      <ul className="flex gap-6 text-recapblue font-semibold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/produk">Produk</Link></li>
        <li><Link href="/artikel">Artikel</Link></li>
        <li><Link href="/nav">NAV Harian</Link></li>
        <li><Link href="/register">Buka Akun</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
