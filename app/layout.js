import Navbar from "@/components/Navbar";
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Film Fusion',
  description: 'Film FUsion, an app to find movies!',
  icons: {
    icon: "/images/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
      	<Navbar />
		    {children}
      </body>
    </html>
  )
}
