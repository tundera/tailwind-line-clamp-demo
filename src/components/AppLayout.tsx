import type { ReactNode } from 'react'

import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col min-h-screen w-full'>
        <Navbar />
        <div className='flex flex-1 flex-col items-center px-8'>
          <main className='container flex flex-1 flex-col items-center px-8 py-16'>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
