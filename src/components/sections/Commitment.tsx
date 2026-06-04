import Card from '../common/Card'
import SectionSubTitle from '../common/SectionSubTitle'
import SectionTitle from '../common/SectionTitle'

const Commitment = () => {
  return (
    <div className="bg-brand-navy w-full bg-[radial-gradient(circle,#2d3b75_10%,transparent_11%)] bg-size-[2em_2em] opacity-100">
      <div className="max-w-400 my-0 mx-auto p-[100px_20px]">
        <SectionSubTitle text="Our Commitment" />
        <SectionTitle
        className='[&>h1]:text-white'
          text={
            <>
              Our Promise to
              <br />
              Every Student
            </>
          }
          titleSubText="Four pillars that define how we teach, guide, and support everyone who joins us"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-15 ml-auto mr-auto w-full">
          <Card
            variant="number"
            number={1}
            title="Expert Faculty"
            description="Highly qualified and experienced teachers
dedicated to your success, with deep subject
knowledge and a systematic approach to building
concepts."
          />
          <Card
            variant="number"
            number={2}
            title="Free Demo Class"
            description="Experience our teaching quality first-hand with a
complimentary demo class. See the difference for
yourself before making any commitment."
          />
          <Card
            variant="number"
            number={3}
            title="Quiet Atmosphere"
            description="A peaceful, distraction-free environment that
promotes deep concentration and genuine
learning — the foundation of consistent
performance."
          />
          <Card
            variant="number"
            number={4}
            title="Proven Results"
            description="A consistent track record in board examinations
and entrance success. Our students set ambitious
targets and reach them."
          />
        </div>
        
      </div>
    </div>
  );
}

export default Commitment