'use client'
import Image from 'next/image'
import Header from './components/header'

export default function Home() {
  return (
    <main className=''>
      <Header />
      <section className='m-auto flex max-w-[1024px] flex-row justify-between'>
        <article>
          Hi, I&#39;m Manish Kumar. I&#39;m a full stack developer. I love to
          build web applications.
        </article>
        <figure className='items-start rounded-full p-2'>
          <Image src='/manish.jpg' alt='Manish Kumar' />
        </figure>
      </section>
    </main>
  )
}
