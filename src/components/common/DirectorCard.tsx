interface DirectorCardType {
    icon?: React.ReactNode;
    label?: string;
    name?: string;
    address?: React.ReactNode;
    className?: string;
}
const DirectorCard = ({
    icon,
    label = "Director",
    name= "Jayadevan V",
    address,
    className
}: DirectorCardType) => {
  return (
    <div className={`${className} relative rounded-[30px] bg-brand-navy bg-[radial-gradient(circle,#2d3b75_10%,transparent_11%)] bg-size-[2em_2em] opacity-100 border border-brand-navy-200 p-[90px_30px_30px_30px] flex flex-col gap-[20px] mt-[50px]`}>
        <p className="font-display text-[100px] text-brand-gold absolute top-[60px] left-[30px] leading-0">“</p>
      {icon && (
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center uppercase text-3xl font-display bg-white/20 border border-brand-gold text-brand-gold-300 font-bold">{`${name[0]}`}</div>
      )}
      <div>
        <p className="text-[20px] md:text-[24px] font-display text-white font-bold mb-[5px]">
          {name}
        </p>
        <p className="text-[13px] uppercase font-ui text-brand-gold-light font-bold">
          {label}
        </p>
      </div>

      {address && (
        <p
          className="
          relative
        pt-4
        text-white/50
        font-ui
        text-[14px]
        before:absolute
        before:top-0
        before:left-0
        before:h-[2px]
        before:w-[45px]
        before:bg-brand-gold
        before:content-['']"
        >
          {address}
        </p>
      )}
    </div>
  );
}

export default DirectorCard