import React from 'react'
import '../../../../styles/banner.css'
import bgFront from '../../../../images/bg-front.png'

const Banner = () => {
  return (
    <>
      <div className='ap-banner'>
        <div className='h-full flex items-end z-10'>
          <img src={bgFront} alt=""/>
        </div>

        <div className='p-12 flex flex-col justify-center'>
          <div className='ap-board px-2'>
            <h2 className='text-[80px] text-white'>Welcome</h2>
          </div>
          <h1 className='text-[50px]'>Experience Jesus In His Love and Power</h1>
          <div className='flex gap-6'>
            <div className='flex text-[18px] items-center gap-2'>
              <div className="ap-dot" />
              <h4 className='ap-border-right pr-3 mr-2'>Grace</h4>
              <h5>Our Mindset</h5>
            </div>

            <div className='flex text-[18px] items-center gap-2'>
              <div className="ap-dot" />
              <h4 className='ap-border-right pr-3 mr-2'>Profiting</h4>
              <h5>Our Lifestyle</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner