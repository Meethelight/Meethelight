
export default function Navigation () {
  const navLinks = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <li color='blue-gray' className='p-1 font-normal' >
        <a href='#' className='flex items-center'> Pages </a>
      </li>
      <li color='blue-gray' className='p-1 font-normal' >
        <a href='#' className='flex items-center'> Account </a>
      </li>
      <li color='blue-gray' className='p-1 font-normal' >
        <a href='#' className='flex items-center'> Docs </a>
      </li>
    </ul>
  )

  return (
    <nav className='mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-white'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        <span>Meethelight</span>
        <div className='hidden lg:block'>{navLinks}</div>
        <span>Inicia sesión</span>
      </div>
    </nav>
  )
}
