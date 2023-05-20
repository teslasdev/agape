import React from 'react'

import Home from '../pages/Desktop/Home/Home'
import Login from '../pages/Mobile/Auth/Login';
import Onboarding from '../pages/Onboarding'
import HomeMobile from '../pages/Mobile/Home';
import Sermons from '../pages/Mobile/Tabs/Sermons';
import Devotionals from '../pages/Mobile/Tabs/Devotionals';
import Live from '../pages/Mobile/Tabs/Live';

const navComp =  {
    Home : <Home />,
    HomeMobile : <HomeMobile />,
    LoginAuth : <Login/>,
    Onboarding : <Onboarding />,
    Sermons : <Sermons />,
    Devotional : <Devotionals/>,
    Live : <Live />
}

export default navComp;
