import CustomButton from '../components/misc/CustomButton'
import Navigation from '../components/layout/Navigation'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], weight: ['700'], variable: '--raleway-font' })

export default function Home () {
  return (
    <main>
      <Navigation />
      <h1 className={`${raleway.className} h-full text-5xl font-bold text-cyan-300 bg-gray-100`}>
        Hello world Next.js for Meethelight!
      </h1>
      <CustomButton text='Hola!' color='indigo' />
    </main>
  )
}
