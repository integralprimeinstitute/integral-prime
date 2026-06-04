import SectionSubTitle from '../common/SectionSubTitle'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'

const TryFree = () => {
  return (
    <div
      className="bg-brand-creme-50 px-[20px] lg:px-0 py-[80px]"
      id="freetrial"
    >
      <div className="bg-white rounded-[30px] w-full max-w-300 my-0 mx-auto p-[50px] shadow-lg">
        <SectionSubTitle text="No Risk . No Registration . No Fees" />
        <div className="flex flex-col lg:flex-row">
          <div className='mr-auto flex-1'>
            <SectionTitle
              text={
                <>
                  Try Two Weeks,
                  <br />
                  Absolutely Free.
                </>
              }
              titleSubText="Attend our classes for two full weeks before making any commitment. No registration. No fees.
    Join permanently only when you are 100% satisfied with what we offer."
            />

            <div className="flex md:flex-row flex-col mt-[30px] items-center gap-[20px]">
              <Button 
                onClick={() => {
              const link = document.createElement("a");
              link.href = `${import.meta.env.BASE_URL}pdfs/IPI_Enrolment_Form.pdf`;
              link.setAttribute("download", "IPI_Enrolment_Form.pdf");
              document.body.appendChild(link);
              link.click();
              link.remove();
            }}
              >Book Your Free Trial</Button>
              <span className="font-ui font-medium text-[16px] text-brand-navy-200 text-center lg:text-left">
                Call 9846268001 · No prior registration needed
              </span>
            </div>
          </div>

          <div className="text-white/50 font-ui font-bold bg-brand-navy w-[230px] h-[230px] rounded-full flex flex-col items-center uppercase justify-center mt-[30px] mx-auto lg:mx-0">
            <span className="font-display text-brand-gold-300 font-bold text-[80px] leading-[64px]">
              2
            </span>
            <span className="mt-[12px]">week</span>
            <span className="text-brand-gold-300 font-bold text-[25px]">
              free
            </span>
            <span>trial</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TryFree