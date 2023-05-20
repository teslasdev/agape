import React from 'react'
import Header from './Header'
// // import Footer from './Footer'
// import { TabBar } from '../common/TabBar'

const Layout = (props:any) => {
  return (
    <>
        <Header />
        {props.children}
    </>
  )
}



export default Layout