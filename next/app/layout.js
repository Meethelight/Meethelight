import '../styles/output.css'

export const metadata = {
  title: 'Meethelight | The revolution of Therapy',
  description: 'Terapia virtual y presencial'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
