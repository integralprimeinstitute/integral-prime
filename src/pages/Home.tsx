import About from '../components/sections/About'
import Commitment from '../components/sections/Commitment'
import GetInTouch from '../components/sections/GetInTouch'
import Hero from '../components/sections/Hero'
import OurCourses from '../components/sections/OurCourses'
import TryFree from '../components/sections/TryFree'
import WhyChooseUs from '../components/sections/WhyChooseUs'

const Home = () => {
  return (
    <div className='pt-21.75'>
        <Hero/>
        <About/>
        <OurCourses/>
        <WhyChooseUs/>
        <Commitment/>
        <TryFree/>
        <GetInTouch/>
    </div>
  )
}

export default Home