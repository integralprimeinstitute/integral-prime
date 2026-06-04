import logo from '../../assets/images/footer-logo-dark.png'
const Preloader = () => {
  return (
    <div className="preloader bg-brand-navy w-full h-screen bg-[radial-gradient(circle,#2d3b75_10%,transparent_11%)] bg-size-[2em_2em] opacity-100">
      <div className="spinner text-center flex flex-col text-white font-display text-[20px] items-center justify-center h-screen tracking-[2px]">
        <img src={logo} alt="" className='w-[70px] h-auto relative top-[10px]'/>
        Loading...
      </div>
    </div>
  )
}

export default Preloader