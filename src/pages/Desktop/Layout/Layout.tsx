import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props:any) => {
  return (
    <>
        <Header />
            {props.children}
        <Footer />
    </>
  )
}



export default Layout