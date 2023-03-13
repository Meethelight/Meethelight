import { Raleway } from 'next/font/google'
import styles from './page.module.css'

const raleway = Raleway({ subsets: ['latin'], weight: ['600'] })

export default function Home () {
  return (
    <main className={styles.main}>
      <h1 className={raleway.className}>
        Hello world Next.js for Meethelight!
      </h1>
    </main>
  )
}
