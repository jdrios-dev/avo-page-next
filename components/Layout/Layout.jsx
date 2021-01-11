import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import FooterP from '../FooterP/FooterP'


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      {children}

      <FooterP />
    </div>
  )
}

export default Layout
