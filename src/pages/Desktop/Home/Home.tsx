import React from 'react'
import Layout from '../Layout/Layout'
import Banner from './Banner/Banner'
import '../../../styles/header.css'
import Vision from './Vision/Vision'
import Scroll from '../Scroll/Scroll'

const Home = () => {
  return (
    <>
      <Layout>
        <Banner/>
        <Vision />
        <Scroll />
      </Layout>
    </>
  )
}

export default Home