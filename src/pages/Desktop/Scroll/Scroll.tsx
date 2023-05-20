import React from 'react'
import '../../../styles/scroll.css'
import img from '../../../images/2.jpeg'

const Scroll = () => {
  return (
    <>
        <div className='p-6 w-full'>
            <div className="ap-scroll-header">
                <h3 className='text-[#000000] opacity-5'>Upcoming Events</h3>
            </div>

            <div className='w-full'>
                <div className='h-[300px] flex gap-9'>
                    <div className='ap-scroll-img'>
                        <img src={img} alt="" />
                    </div>
                    <div className='ap-scroll-img'>
                        <img src={img} alt="" />
                    </div>
    
                    <div className='ap-scroll-img'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Scroll