import { MapPin, Phone, Mail, Send } from 'lucide-react';
import ContactCard from '../common/ContactCard';
import SectionSubTitle from '../common/SectionSubTitle'
import SectionTitle from '../common/SectionTitle'
import DirectorCard from '../common/DirectorCard';

const GetInTouch = () => {
  return (
    <div className="bg-white" id="getintouch">
      <div className="max-w-400 my-0 mx-auto p-[100px_20px]">
        <SectionSubTitle text="Find Us" />
        <SectionTitle text={"Get In Touch"} className="mb-[50px]" />
        <ContactCard
          icon={<MapPin />}
          label="Address"
          address={
            <>
              Keerthanam VNRA D 283, <br />
              Valiyavila, Thiruvananthapuram,
              <br />
              Kerala — PIN 695006
            </>
          }
        />
        <ContactCard icon={<Phone />} label="Phone" phone={9846268001} />
        <ContactCard
          icon={<Mail />}
          label="Email"
          email="integralprimeinstitute@gmail.com"
        />
        <ContactCard
          icon={<Send />}
          label="Instagram"
          socialMedia="@integralprimeinstitute"
          socialMediaUrl="https://instagram.com/integralprimeinstitute"
        />

        <DirectorCard label="Director" name="Jayadevan V" icon />

        <div className="bg-brand-gold-100 border border-brand-gold-200 rounded-[20px] h-[400px] overflow-hidden mt-[50px]">
          <iframe
            title="Integral Prime Institute"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1799390822057!2d76.93347059999999!3d8.481878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb6226fdf591%3A0xaee508cd7f3a0fbf!2sIntegral%20Prime%20Institute!5e0!3m2!1sen!2sin!4v1780508579707!5m2!1sen!2sin"
            className="h-full w-full"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch