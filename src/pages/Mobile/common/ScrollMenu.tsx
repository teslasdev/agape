
import { useState } from 'react'
import { useNavigate } from 'react-router';

const ScrollMenu = ( props: any) => {
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState<number>(0);
    const handleOpen = (index: number,name:any) => {
        if (isActive === index) {
        setIsActive(0);
    }
       navigate('#' +name)
       window.location.reload();
       setIsActive(index);
    };  
  return (
    <>
        <div className='ap-mobile-scroll flex gap-4 pl-4  text-xs' style={{WebkitOverflowScrolling: "touch"}}>
            {props.data?.map((item :any,index : number) => {
                return (
                    <span key={index} onClick={() => handleOpen(index,item.name)}  className={`${isActive == index && 'ap-s-link'}`}>
                        {item.name}
                    </span>
                )
            })
            }
        </div>  
    </>
  )
}

export default ScrollMenu