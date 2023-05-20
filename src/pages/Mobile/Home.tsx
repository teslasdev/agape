import Banner from './Banner'
import Layout from './Layout/Layout'
import Section from './Section'
import ScrollMenu from './common/ScrollMenu'
import TabBar from './common/TabBar'
import './global.css'


const Home = () => {
  const navBar = [
    {
      "id" : "1",
      "name" : "All"
    },
    {
      "id" : "2",
      "name" : "For you"
    },
    {
      "id" : "1",
      "name" : "Events"
    },
    {
      "id" : "1",
      "name" : "About"
    },
    
  ]
  return (

    <>
      <Layout>
        <ScrollMenu data={navBar}/>
        <Banner />
        <Section />
      </Layout>
      <TabBar/>
    </>
  )
}

export default Home