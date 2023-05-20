import React from 'react'
import BannerImage from '../../../images/5.jpeg'
import {FiPlayCircle} from 'react-icons/fi'
import {SiAudiomack} from 'react-icons/si'
import { IoMdDownload } from 'react-icons/io'

const SermonsDisplay = () => {
  return (
    <>
      <div className='mb-16 bg-white p-4 flex flex-col gap-6' id="Video" style={{display:`${window.location.hash == '#Video' ? 'flex' : 'none'}`}}>
          <div className='flex gap-3'>
            <div className='relative flex justify-center items-center w-[30%] h-[70px] rounded-md'>
              <span className='absolute z-15'>
                <FiPlayCircle size={40} color={'#eee'}/>
              </span>
              <img src={BannerImage} alt="" className='w-full h-full rounded-md' />
            </div>
            <div className='w-[70%] flex flex-col justify-between'>
              <p className='text-xs font-normal text-gray-400'>Right Estimations | 60days of Light,Grace and change</p>
              <span className='text-[8px] font-bold'>Thursday 24,April 2023</span>
            </div>
          </div>

          <div className='flex gap-3'>
            <div className='relative flex justify-center items-center w-[30%] h-[70px] rounded-md'>
              <span className='absolute z-15'>
                <FiPlayCircle size={40} color={'#eee'}/>
              </span>
              <img src={BannerImage} alt="" className='w-full h-full rounded-md' />
            </div>
            <div className='w-[70%] flex flex-col justify-between'>
              <p className='text-xs font-normal text-gray-400'>Right Estimations | 60days of Light,Grace and change</p>
              <span className='text-[8px] font-bold'>Thursday 24,April 2023</span>
            </div>
          </div>

          <div className='flex gap-3'>
            <div className='relative flex justify-center items-center w-[30%] h-[70px] rounded-md'>
              <span className='absolute z-15'>
                <FiPlayCircle size={40} color={'#eee'}/>
              </span>
              <img src={BannerImage} alt="" className='w-full h-full rounded-md' />
            </div>
            <div className='w-[70%] flex flex-col justify-between'>
              <p className='text-xs font-normal text-gray-400'>Right Estimations | 60days of Light,Grace and change</p>
              <span className='text-[8px] font-bold'>Thursday 24,April 2023</span>
            </div>
          </div>


          <div className='flex gap-3'>
            <div className='relative flex justify-center items-center w-[30%] h-[70px] rounded-md'>
              <span className='absolute z-15'>
                <FiPlayCircle size={40} color={'#eee'}/>
              </span>
              <img src={BannerImage} alt="" className='w-full h-full rounded-md' />
            </div>
            <div className='w-[70%] flex flex-col justify-between'>
              <p className='text-xs font-normal text-gray-400'>Right Estimations | 60days of Light,Grace and change</p>
              <span className='text-[8px] font-bold'>Thursday 24,April 2023</span>
            </div>
          </div>

          <div className='flex gap-3'>
            <div className='relative flex justify-center items-center w-[30%] h-[70px] rounded-md'>
              <span className='absolute z-15'>
                <FiPlayCircle size={40} color={'#eee'}/>
              </span>
              <img src={BannerImage} alt="" className='w-full h-full rounded-md' />
            </div>
            <div className='w-[70%] flex flex-col justify-between'>
              <p className='text-xs font-normal text-gray-400'>Right Estimations | 60days of Light,Grace and change</p>
              <span className='text-[8px] font-bold'>Thursday 24,April 2023</span>
            </div>
          </div>

          <div className='flex gap-3'>
            <div className='relative flex justify-center items-center w-[30%] h-[70px] rounded-md'>
              <span className='absolute z-15'>
                <FiPlayCircle size={40} color={'#eee'}/>
              </span>
              <img src={BannerImage} alt="" className='w-full h-full rounded-md' />
            </div>
            <div className='w-[70%] flex flex-col justify-between'>
              <p className='text-xs font-normal text-gray-400'>Right Estimations | 60days of Light,Grace and change</p>
              <span className='text-[8px] font-bold'>Thursday 24,April 2023</span>
            </div>
          </div>


          <div className='flex gap-3'>
            <div className='relative flex justify-center items-center w-[30%] h-[70px] rounded-md'>
              <span className='absolute z-15'>
                <FiPlayCircle size={40} color={'#eee'}/>
              </span>
              <img src={BannerImage} alt="" className='w-full h-full rounded-md' />
            </div>
            <div className='w-[70%] flex flex-col justify-between'>
              <p className='text-xs font-normal text-gray-400'>Right Estimations | 60days of Light,Grace and change</p>
              <span className='text-[8px] font-bold'>Thursday 24,April 2023</span>
            </div>
          </div>
    </div>

    <div className='mb-16 bg-white p-4 flex flex-col gap-6' id="Audio" style={{display:`${window.location.hash == '#Audio' ? 'flex' : 'none'}`}}>
          <div className='flex gap-1'>
            <div className='relative flex justify-center items-center w-[15%] h-[50px] rounded-md'>
              <span className='absolute z-15'>
                <SiAudiomack size={30} color={'#eee'}/>
              </span>
              <img src={BannerImage} alt="" className='w-full h-full rounded-md' />
            </div>
            <div className='w-[75%] flex flex-col justify-between'>
              <p className='text-xs font-semibold text-gray-500'>Right Estimations </p>
              <span className='max-w-[60px] text-[8px] ap-border-out rounded-full font-bold flex items-center justify-center'>Holy Spirit</span>
              <span className='text-[10px] flex gap-2 font-semibold'> <p>126 mb</p> 23,April 2023</span>
            </div>

            <div className='w-[10%] flex items-center justify-center'>
              <span>
                <IoMdDownload size={15} color={'#777'}/>
              </span>
            </div>
          </div>

          <div className='flex gap-2'>
            <div className='relative flex justify-center items-center w-[15%] h-[50px] rounded-md'>
              <span className='absolute z-15'>
                <SiAudiomack size={30} color={'#eee'}/>
              </span>
              <img src={BannerImage} alt="" className='w-full h-full rounded-md' />
            </div>
            <div className='w-[75%] flex flex-col justify-between'>
              <p className='text-xs font-semibold text-gray-400'>Right Estimations </p>
              <span className='max-w-[60px] text-[8px] ap-border-out rounded-full font-bold flex items-center justify-center'>Holy Spirit</span>
              <span className='text-[10px] flex gap-2 font-semibold'> <p>126 mb</p> 23,April 2023</span>
            </div>

            <div className='w-[10%] flex items-center justify-center'>
              <span>
                <IoMdDownload size={15} color={'#777'}/>
              </span>
            </div>
          </div>


          <div className='flex gap-1'>
            <div className='relative flex justify-center items-center w-[15%] h-[50px] rounded-md'>
              <span className='absolute z-15'>
                <SiAudiomack size={30} color={'#eee'}/>
              </span>
              <img src={BannerImage} alt="" className='w-full h-full rounded-md' />
            </div>
            <div className='w-[75%] flex flex-col justify-between'>
              <p className='text-xs font-semibold text-gray-400'>Holy Spirit Our inheritance</p>
              <span className='max-w-[60px] text-[8px] ap-border-out rounded-full font-bold flex items-center justify-center'>Holy Spirit</span>
              <span className='text-[10px] flex gap-2 font-semibold'> <p>126 Mb</p> 23,April 2023</span>
            </div>

            <div className='w-[10%] flex items-center justify-center'>
              <span>
                <IoMdDownload size={15} color={'#777'}/>
              </span>
            </div>
          </div>
    </div>
    </>

    
  )
}

export default SermonsDisplay