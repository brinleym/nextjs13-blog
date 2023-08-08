import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between">
      <div>
        <Link href="/">
          <h1 className="font-bold font-serif text-xl">Thoughtware</h1>
        </Link>
        <div>A thoughtful tech blog</div>
      </div>
      <div className="flex self-end sm:self-start space-x-3">
        <Link className="hover:text-slate-900" href="/">Home</Link>
        <Link className="hover:text-slate-900" href="/about">About</Link>
      </div>
    </nav>
  )
}