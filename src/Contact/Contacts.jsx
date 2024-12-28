import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Contacts = () => {
  return (
    <div>
           <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Contacts