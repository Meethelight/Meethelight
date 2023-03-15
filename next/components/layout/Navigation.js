import Image from 'next/image'
import styles from './Navigation.module.css'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })

export default function Navigation () {
  const leftLinks = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <li color='blue-gray' className='p-1 font-normal'>
        <a id="to-section-for-you" className="button header-link">Para ti</a>
      </li>
      <li color='blue-gray' className='p-1 font-normal'>
        <a id="to-section-for-professional" className="button header-link">Psicólogos</a>
      </li>
      <li color='blue-gray' className='p-1 font-normal'>
        <a id="to-section-for-enterprise" className="button header-link">Empresas</a>
      </li>
    </ul>
  )

  const rightLinks = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <li>
        <a
          id={`${styles.login_button}`}
          className={`${styles.button} ${styles.header_link}`}
          href="#"
        >Inicia sesión</a>
      </li>
      <li>
        <a
          id={`${styles.register_button}`}
          className={`${styles.button} ${styles.header_link}`}
          href="#"
        >Regístrate</a>
      </li>
    </ul>
  )

  return (
    <nav className='flex w-full'>
      <div className='flex gap-3'>
        <Image width={25} height={25} src={''} alt="logo"/>
        <p className={`${pacifico.className} text-5xl`}>Meethelight</p>
      </div>
      <div className='flex'>
        <div className={`${styles.menu} ${styles.menu_left} bg-indigo-500`}>{leftLinks}</div>
        <div className={`${styles.menu} ${styles.menu_right}`}>{rightLinks}</div>
      </div>
    </nav>
  )
}
