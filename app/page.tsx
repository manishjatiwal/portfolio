'use client'

export default function Home() {
  return (
    <main className='relative z-10'>
      <section className='m-auto mt-14 max-w-[1280px] text-lg'>
        <div className='mb-6 inline-block rounded text-5xl text-cyan-800'>
          Hey, I&#39;m Manish
        </div>
        <br />
        <div className='max-w-[760px] opacity-60'>
          Web-Developer with a passion for crafting Elegent Web Solutions. With
          over 7 years of experience in full stack development, I specialize in
          creating responsive and performant web applications. My journey has
          taken me through various exciting projects and roles, where I've honed
          my skills in technologies like React, Node.js, and GoLang. Let's build
          something amazing together!
        </div>
        <a
          className='my-7 inline-block rounded bg-cyan-800 px-5 py-2 text-white'
          href='https://www.linkedin.com/in/jatiwal/'
          target='_blank'
        >
          Hire Me
        </a>

        <div className='text-center'>
          <h2 className='mb-6 text-2xl'>Languages & Tools</h2>
          <div className='flex flex-row items-center justify-center gap-8'>
            <span className='icon BG-JS' />
            <span className='icon BG-TS' />
            <span className='icon BG-React' />
            <span className='icon BG-GO' />
          </div>
        </div>
      </section>
    </main>
  )
}
