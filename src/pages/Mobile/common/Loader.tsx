import React from 'react'
import Logo from '../../../images/logo only-1.png'

const Loader = () => {
  return (
    <div className=' fixed top-0 right-0 h-full w-full flex justify-center items-center bg-white z-20'>
        <div className='w-[50px] ap-m-loader'>
            <img src={Logo} alt="" className='w-full h-full'/>
        </div>
    </div>
  )
}

export default Loader