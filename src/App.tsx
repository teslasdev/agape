import React from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import PAGES from './helpers/page-names'
import navComp  from './helpers/navComp'


const App = () => {
    const router = createBrowserRouter([
      {  
        path : PAGES.HOME,
        element : navComp.Home
      },
      {  
        path : PAGES.LOGIN,
        element : navComp.LoginAuth
      },

      {  
        path : PAGES.ONBOARDING,
        element : navComp.Onboarding
      },
      {  
        path : PAGES.HOMEMOBILE,
        element : navComp.HomeMobile
      },
      {  
        path : PAGES.SERMONS,
        element : navComp.Sermons
      },
      {  
        path : PAGES.DEVOTIONAL,
        element : navComp.Devotional
      },
      {  
        path : PAGES.LIVE,
        element : navComp.Live
      }
    ])
  return (
    <>
        <main>
          <RouterProvider router={router}></RouterProvider>
        </main>
    </>
  )
}

export default App