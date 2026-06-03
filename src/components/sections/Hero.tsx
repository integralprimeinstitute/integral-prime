import SectionSubTitle from '../common/SectionSubTitle'
import Button from '../common/Button'
import { scrollToSection } from '../utils/scrollToSection'

const Hero = () => {
  return (
    <div className='bg-brand-navy w-full bg-[radial-gradient(circle,#2d3b75_10%,transparent_11%)] bg-size-[2em_2em] opacity-100'>
        <div className='max-w-400 my-0 mx-auto p-[70px_20px] md:p-[100px_20px]'>
            <SectionSubTitle text="Thiruvananthapuram, Kerala - Admission Open 2026-27"/>
            <h1 className='text-white font-display text-[45px] md:text-[80px] font-bold leading-15 md:leading-22 mt-5'>
                Shaping Futures, <br />Building <i className='text-brand-gold-light'>Excelling</i> <br />Excellence.
                <span className='block font-ui text-[14px] md:text-[18px] font-medium text-brand-navy-light tracking-wide'>Your Dream. Our Guidance. Your Success.</span>
            </h1>
            <p className='font-body text-brand-navy-light text-[18px] md:text-[22px] w-full max-w-200'>Expert coaching for NEET, JEE, KEAM and Board Examinations. Small batches, dedicated mentor support and a 2-week free trial - experience the difference before you commit.</p>

            <div className='flex gap-3 md:gap-10 mt-12.5'>
                <Button variant='secondary' onClick={() => scrollToSection("courses")}>Explore Courses</Button>
                <Button variant='ghost' showArrow onClick={() => scrollToSection("freetrial")}>2 weeks Free</Button>
            </div>
        </div>
    </div>
  )
}

export default Hero