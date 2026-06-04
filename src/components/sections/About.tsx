import DirectorCard from '../common/DirectorCard'
import SectionSubTitle from '../common/SectionSubTitle'
import SectionTitle from '../common/SectionTitle'

const About = () => {
  return (
    <div className="bg-white" id="about">
      <div className="max-w-400 my-0 mx-auto p-[70px_20px] md:p-[100px_20px]">
        <SectionSubTitle text="A message from our Director" />
        <SectionTitle text="Welcome to IPI" />
        <div className="flex gap-[50px] flex-col md:flex-row">
          <DirectorCard
            label="Director & Founder"
            name="Jayadevan V"
            icon
            className="w-full md:w-[350px] max-w-full"
            address={
              <>
                Integral Prime Institute <br />
                Valiyavila, Thiruvananthapuram
              </>
            }
          />
          <div className='flex-1 mt-[0] md:mt-[50px] text-brand-navy/80'>
            <h4 className='font-display text-[17px] font-bold mb-[20px]'>Welcome to Integral Prime Institute.</h4>
            <p className='font-body text-[18px]'>
              When we founded this institute, our vision was simple: to create a
              space where students feel both challenged and supported. We
              understand that the transition through Class XI and XII is a
              critical phase in a student's life, and our goal is to navigate
              this journey with them through expert instruction and personalized
              attention.<br/><br/> We prioritize a quiet, focused atmosphere because we
              know that true learning thrives in an environment free from
              distraction. By integrating rigorous entrance coaching for NEET,
              JEE, and KEAM with dedicated academic support, we strive to turn
              every student's potential into a proven, successful result.<br/><br/> We
              invite you to experience our approach firsthand during our <b>Two
              Weeks Free Demo Class</b>. Let's work together to make excellence your
              student's new standard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About