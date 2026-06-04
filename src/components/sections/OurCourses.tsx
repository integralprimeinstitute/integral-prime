import { Shield, Focus, Triangle, Book } from 'lucide-react'
import Card from '../common/Card'
import SectionSubTitle from '../common/SectionSubTitle'
import SectionTitle from '../common/SectionTitle'

const OurCourses = () => {
  return (
    <div className='bg-brand-creme-50' id="courses">
        <div className='max-w-400 my-0 mx-auto p-[70px_20px] md:p-[100px_20px]'>
            <SectionSubTitle text='What We Offer'/>
            <SectionTitle text="Our Courses" titleSubText='Structured, concept-first coaching for every major entrance examination - designed to build deep understanding, not just exam readiness.'/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-15 ml-auto mr-auto w-full'>
                <Card 
                    variant='icon' 
                    icon={<Shield/>}
                    title="NEET Coaching"
                    description='Comprehensive preperation for the National Eligibility cum Entrance Test. Cover Physics, Chemistry, and Biology with a focus on concept clarity and Exam strategy.'
                    badge='Medical Entrance'
                />
                <Card 
                    variant='icon' 
                    icon={<Focus/>}
                    title="JEE Coaching"
                    description='Rigorous preperation for JEE Mains and Advanced, targeting IIT, NIT and top engineering institutes with systematic, concept-driven problem solving.'
                    badge='IIT . NIT'
                />
                <Card 
                    variant='icon' 
                    icon={<Triangle/>}
                    title="KEAM Coaching"
                    description='Focused coaching for the Kerala Engineering Architecture Medical entrance - the gateway to premier engineering colleges across Kerala.'
                    badge='Kerala Engineering'
                />
                <Card 
                    variant='icon' 
                    icon={<Book/>}
                    title="Board Exams"
                    description='Science and Maths coaching for Class XI & XII, aligned with CBSE and Kerala State Board syllabi, with regular tests and structured revision.'
                    badge='Class XI & XII'
                />
            </div>
        </div>
    </div>
  )
}

export default OurCourses