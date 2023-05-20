import React from 'react'
import Layout from '../Layout/Layout'
import TabBar from '../common/TabBar'
import ScrollMenu from '../common/ScrollMenu'
import Search from '../common/Search'
import SermonsDisplay from '../Content/SermonsDisplay'

const Sermons = () => {
  const navBar = [
    {
        "id" : "1",
        "name" : "Video"
    },
    {
        "id" : "2",
        "name" : "Audio"
    },
    {
        "id" : "3",
        "name" : "Favorities"
    },
    {
        "id" : "4",
        "name" : "Categories"
    },
    {
        "id" : "4",
        "name" : "Downnloads"
    }

  ]
  return (
    <>
        <Layout>
            <ScrollMenu data ={navBar}/>
            <Search/>
            <SermonsDisplay />
        </Layout>
        <TabBar/>
    </>
  )
}

export default Sermons