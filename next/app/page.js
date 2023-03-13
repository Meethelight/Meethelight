import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], weight: ['700'], variable: '--raleway-font' })

export default function Home () {
  return (
    <main>
      <h1 className='text-5xl font-bold text-cyan-300'>
        Hello world Next.js for Meethelight!
      </h1>
    </main>
  )
}
