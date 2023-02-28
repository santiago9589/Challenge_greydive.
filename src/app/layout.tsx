import FooterComponent from 'components/Footer/FooterComponent'
import NavbarComponent from 'components/navbar/navbarComponen'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className=" bg-black text-white container mx-auto overflow-y-auto box-border">
        <NavbarComponent />
        {children}
        <FooterComponent/>
      </body>
    </html>
  )
}
