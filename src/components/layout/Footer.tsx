import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div className='bg-brand-navy'>
      <div className='max-w-400 my-0 mx-auto p-[40px_20px]'>
        <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-0">
          <img className="w-[60px]" src={logo} alt="" />
          <div className="flex flex-col justify-center uppercase font-ui pl-3 text-center md:text-left">
            <div className="font-bold text-white text-[18px]">
              Integral Prime Institute
            </div>
            <span className="text-brand-gold-300 text-[12px] tracking-[1px]">
              Integrating Knowledge. Inspiring Excellence
            </span>
          </div>
        </div>
        <p className='text-brand-navy-200 mt-[20px] text-[14px] text-center md:text-left'>&copy; 2026 Integral Prime Institute, Thiruvananthapuram. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer