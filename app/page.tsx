'use client'
import Header from './components/header'

export default function Home() {
  return (
    <main className=''>
      <Header />
      <section className='m-auto flex max-w-[1024px] flex-row justify-between'>
        <article>
          Hi, I'm Manish Kumar. I'm a full stack developer. I love to build web
          applications.
        </article>
        <figure className='items-start rounded-full p-2'>
          <img src='/manish.jpg' alt='Manish Kumar' className='' />
        </figure>
      </section>
    </main>
  )
}
