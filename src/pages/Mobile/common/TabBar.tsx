import React, { useState } from 'react'
import { 
    useNavigate
} from "react-router-dom";
import { HiHome } from 'react-icons/hi2'
import { BiPodcast, BiBookReader } from 'react-icons/bi'
import { MdLiveTv } from 'react-icons/md'
import Loader from './Loader'

const TabBar = () => {  
  const navigate = useNavigate()
  const [isLoading, setisLoading]   = useState(false)
  const HandleChange = (event: React.MouseEvent<HTMLElement>,name : string) => {
    event.preventDefault();
    setisLoading(!isLoading)
    setTimeout(() => {
        setisLoading(isLoading)
        switch (name) {
            case 'Home':
                navigate('/android/home')
                break;
            case 'Sermons':
                navigate('/android/sermons')
                break;
            case 'Devotionals':
                navigate('/android/devotionals')
                break;
            case 'Live':
                navigate('/android/live')
                break;
            default:
                break;
        }
    }, 1000);
  }
  return (
    <div className='ap-m-rounded fixed flex w-full items-center justify-between px-6 bottom-0 bg-[#D9D9D9] h-[60px] z-20'>
        <div onClick={(event) => HandleChange(event,'Home')} className={`ap-m-icon ${window.location.pathname == '/android/home' ? 'ap-icon-active' :''}`}>
            <HiHome size={25}/>
            <p className='text-[8px] font-bold'>Home</p>
        </div>

        <div onClick={(event) => HandleChange(event,'Sermons')} className={`ap-m-icon ${window.location.pathname == '/android/sermons' ? 'ap-icon-active' : ''}`}>
            <BiPodcast size={25}/>
            <p className='text-[8px] font-bold'>Sermons</p>
        </div>

        <div onClick={(event) => HandleChange(event,'Devotionals')} className={`ap-m-icon ${window.location.pathname == '/android/devotionals' ? 'ap-icon-active' : ''}`}>
            <BiBookReader size={25}/>
            <p className='text-[8px] font-bold'>Devotionals</p>
        </div>

        <div onClick={(event) => HandleChange(event,'Live')} className={`ap-m-icon ${window.location.pathname == '/android/live' ? 'ap-icon-active' : ''}`}>
            <MdLiveTv size={25}/>
            <p className='text-[8px] font-bold'>Live Tv</p>
        </div>

        {isLoading && <Loader />}
    </div>
  )
}

export default TabBar