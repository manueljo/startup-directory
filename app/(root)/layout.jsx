import React from 'react'
import Navbar from '../components/Navbar'

const layout = ({children}) => {
  return (
    <main className='font-work-sans' >
        <Navbar/>
        {children}
    </main>
  )
}

export default layout