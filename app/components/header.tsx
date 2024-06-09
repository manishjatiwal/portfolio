import Link from 'next/link'
import { useCallback, useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  return (
    <header className='px-4 py-3 shadow-md sm:mb-3 sm:px-12 sm:py-6'>
      <h1 className='text-center text-2xl font-medium'>jatiwal.dev</h1>
      <nav className=''>
        <button
          className='fixed left-2 top-7 flex -translate-y-1/2 flex-col items-start justify-between gap-1 rounded-full px-2 py-4 hover:bg-black hover:bg-opacity-25 sm:left-9 sm:top-[40px] sm:gap-1.5 sm:px-3'
          onClick={toggleMenu}
        >
          <span className='w-6 rounded border border-black sm:w-8 sm:border-2' />
          <span className='w-4 rounded border border-black sm:w-6 sm:border-2' />
          <span className='w-5 rounded border border-black sm:w-7 sm:border-2' />
        </button>
        <ul
          className={`flex flex-col justify-between gap-6 overflow-hidden transition-[height] duration-1000 ${isMenuOpen ? 'mt-4 h-fit' : 'mt-0 h-0'}`}
        >
          <li>
            <Link href='/#home'>Home</Link>
          </li>
          <li>
            <Link href='/#projects'>Projects</Link>
          </li>
          <li>
            <Link href='/#about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
