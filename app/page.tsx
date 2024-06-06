import Link from 'next/link'

export default function Home() {
  return (
    <main className=''>
      <header className='px-12 mb-3 flex flex-row justify-between items-center py-6 shadow-md'>
        <h1 className='font-medium text-2xl'>jatiwal.dev</h1>
        <nav className='flex flex-row justify-between gap-6'>
          <Link href='/#home'>Home</Link>
          <Link href='/#projects'>Projects</Link>
          <Link href='/#about'>About</Link>
        </nav>
      </header>
    </main>
  )
}
