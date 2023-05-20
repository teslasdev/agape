import '../../../styles/footer.css'
import Logo from '../../../images/logo only-1.png'

const Footer = () => {
  return (
    <>
      <div className='footer-bg'>
        <div>
          <div className='ap-header-logo'>
            <img src={Logo} alt="" className='w-full h-full'/>
          </div>
        </div>

        <div className='flex flex-col text-[#7C0F31]'>
          <p className='text-xl font-bold'>More</p>
          <ul className='flex flex-col gap-3 mt-3'>
            <li>Devotions</li>
            <li>Sponsorship</li>
            <li>Cell Ministry</li>
            <li>Departments</li>
          </ul>
        </div>

        <div className='flex flex-col text-[#7C0F31]'>
          <p className='text-xl font-bold'>Contact Us</p>
          <ul className='flex flex-col gap-3 mt-3'>
            <li>+234 80 70 40 30</li>
          </ul>
        </div>
      </div>
    </>
  )
}


export default Footer