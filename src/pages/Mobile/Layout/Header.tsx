import React from 'react'
import Logo from '../../../images/logo only-1.png'
import {  IonIcon } from '@ionic/react';
import {  menu } from 'ionicons/icons';


const Header = () => {
  return (
    <>
        <div className='w-full p-4 flex gap-4 items-center'>
            {/* Logo */}
            <div className='flex items-center justify-center'>
              <IonIcon icon={menu} style={{fontSize:'20px'}}/>
            </div>
            <div className='w-[20px]'>
              <img src={Logo} alt="" className='w-full h-full'/>
            </div>

            <div className='ap-navigation-header'>

            </div>
        </div>
    </>
  )
}



export default Header