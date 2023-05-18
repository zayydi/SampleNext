import ChakraProvider from '@/components/Providers/ChakraProvider'
import './globals.css'
import { Poppins } from 'next/font/google'
import Nav from '@/components/Navbar'
import Footer from '@/components/Footer'
import BodyWrapper from '@/components/Wrapper/BodyWrapper'

const baseFont = Poppins({ subsets: ["devanagari"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata = {
  title: 'The Movie Encyclopedia',
  description: 'The Movie Encyclopedia - Your ultimate guide to all things movies! From classics to modern blockbusters, discover in-depth information, reviews, ratings, and more. Join our community of movie lovers today and explore the world of cinema like never before!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={baseFont.className}>
        <ChakraProvider>
          <Nav />
          <BodyWrapper>
            {children}
          </BodyWrapper>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  )
}
