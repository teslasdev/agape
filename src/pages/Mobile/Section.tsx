import React from 'react'
import { Link } from 'react-router-dom'
import SectionImg from '../../images/7.jpeg'
import { BsSoundwave } from 'react-icons/bs'

const Section = () => {
  return (
    <div className=''>
        <div className='flex justify-between items-center p-4'>
            <h6 className='font-normal'>Latest Audio Sermons</h6>
            <div>
                <Link to='/view' className='text-[10px]'>View All</Link>
            </div>
        </div>


        <div className=''>
            <div className='flex w-full px-4 h-[140px] overflow-x-scroll'>
                <div className='w-[200rem] flex gap-2'>
                    <div className='relative w-[100px] flex flex-col rounded-lg'>
                      <span className='absolute z-10 text-white p-1'>
                        <BsSoundwave  size={30}/>
                      </span>
                      <img src={SectionImg} className='w-full h-full rounded-lg object-cover fill-neutral-100'/>
                      <p className='text-[12px]'>The word ,The church and the believer</p>
                    </div>

                    <div className='relative w-[100px] flex flex-col rounded-lg'>
                      <span className='absolute z-10 text-white p-1'>
                        <BsSoundwave  size={30}/>
                      </span>
                      <img src={SectionImg} className='w-full h-full rounded-lg object-cover fill-neutral-100'/>
                      <p className='text-[12px]'>The word ,The church and the believer</p>
                    </div>


                    <div className='relative w-[100px] flex flex-col rounded-lg'>
                      <span className='absolute z-10 text-white p-1'>
                        <BsSoundwave  size={30}/>
                      </span>
                      <img src={SectionImg} className='w-full h-full rounded-lg object-cover fill-neutral-100'/>
                      <p className='text-[12px]'>The word ,The church and the believer</p>
                    </div>



                    <div className='relative w-[100px] flex flex-col rounded-lg'>
                      <span className='absolute z-10 text-white p-1'>
                        <BsSoundwave  size={30}/>
                      </span>
                      <img src={SectionImg} className='w-full h-full rounded-lg object-cover fill-neutral-100'/>
                      <p className='text-[12px]'>The word ,The church and the believer</p>
                    </div>


                    <div className='relative w-[100px] flex flex-col rounded-lg'>
                      <span className='absolute z-10 text-white p-1'>
                        <BsSoundwave  size={30}/>
                      </span>
                      <img src={SectionImg} className='w-full h-full rounded-lg object-cover fill-neutral-100'/>
                      <p className='text-[12px]'>The word ,The church and the believer</p>
                    </div>


            
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section