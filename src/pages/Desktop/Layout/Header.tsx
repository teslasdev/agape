import React from 'react'
import Logo from '../../../images/logo only-1.png'


const Header = () => {
  return (
    <>
        <div className='ap-header fixed h-[100px] flex items-center px-12'>
            {/* Logo */}

            <div className='ap-header-logo'>
                <img src={Logo} alt="" className='w-full h-full'/>
            </div>

            <div className='ap-navigation-header'>

            </div>
        </div>
    </>
  )
}



export default Header