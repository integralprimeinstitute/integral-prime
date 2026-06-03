import { Users, Monitor, CircleCheck, Activity, Heart } from 'lucide-react'
import Card from '../common/Card'
import SectionSubTitle from '../common/SectionSubTitle'
import SectionTitle from '../common/SectionTitle'

const WhyChooseUs = () => {
  return (
    <div className="bg-white" id="whyipi">
      <div className="max-w-400 my-0 mx-auto p-[100px_20px]">
        <SectionSubTitle text="Why choose IPI" />
        <SectionTitle
          text={
    <>
      Build Around <br />
      Your Success
    </>
  }
          titleSubText="Everything at Integral Prime Institute is designed to give every student the strongest possible foundation for their future."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-15 ml-auto mr-auto w-full">
          <Card
            variant="icon2"
            icon={<Users />}
            title="Expert Faculty"
            description="Highly qualified and experienced teachers
dedicated to your success, with deep subject
knowledge and a systematic approach to building
concepts."
          />
          <Card
            variant="icon2"
            icon={<Monitor />}
            title="Free Demo Class"
            description="Experience our teaching quality first-hand with a
complimentary demo class. See the difference for
yourself before making any commitment."
          />
          <Card
            variant="icon2"
            icon={<CircleCheck />}
            title="Quiet Atmosphere"
            description="A peaceful, distraction-free environment that
promotes deep concentration and genuine
learning — the foundation of consistent
performance."
          />
          <Card
            variant="icon2"
            icon={<Activity />}
            title="Proven Results"
            description="A consistent track record in board examinations
and entrance success. Our students set ambitious
targets and reach them."
          />
        </div>
        <div className='mt-10'>
            <Card
                variant='wide'
                icon={<Heart />}
                title="Dedicated Mentor Support"
            description="Every student receives personal mentor support for academics, homework tracking, marks
analysis, and overall progress monitoring. You are never alone on your journey — your
mentor walks with you every step of the way toward your goal."
            />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs