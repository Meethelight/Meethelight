import './globals.css'

export const metadata = {
  title: 'Meethelight | The revolution of Therapy',
  description: 'Terapia virtual y presencial'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <title></title>
      <body>{children}</body>
    </html>
  )
}
