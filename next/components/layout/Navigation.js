import Image from 'next/image'
import styles from './Navigation.module.css'
import { Pacifico } from 'next/font/google'
import Logo from '../../public/logo.png'
import CustomButton from '../misc/CustomButton'

const pacifico = Pacifico({ weight: '400', subsets: ['latin'], style: 'normal' })

export default function Navigation () {
  const leftLinks = (
    <div className='flex flex-row sm:flex-col lg:items-center gap-2 lg:gap-6 mb-4 mt-2 lg:mb-0 lg:mt-0 '>
      <CustomButton variant='text' color='indigo' text='Para ti'/>
      <CustomButton variant='text' color='indigo' text='Psicólogos'/>
      <CustomButton variant='text' color='indigo' text='Empresas'/>
    </div>
  )

  const rightLinks = (
    <div className='flex flex-row lg:flex-row gap-2 items-end lg:gap-6 mb-4 mt-2 lg:mb-0 lg:mt-0'>
      <CustomButton variant='outlined' color='indigo' text='Inicia sesión'/>
      <CustomButton color='indigo' text='Regístrate'/>
    </div>
  )

  return (
    <nav className='w-full flex absolute space-x-4 bg-white'>
      <div>
        <Image
          src={Logo}
          alt='Meethelight Logo'
          width='40'
          height='40'
          className='inline-block'
        />
        <p className={`${pacifico.className} inline-block text-3xl`}>Meethelight</p>
      </div>
      <div className='flex items-center'>
        <div className={`${styles.menu} ${styles.menu_left} inline-block`}>{leftLinks}</div>
        <div className={`${styles.menu} ${styles.menu_right} inline-block`}>{rightLinks}</div>
      </div>
    </nav>
  )
}
