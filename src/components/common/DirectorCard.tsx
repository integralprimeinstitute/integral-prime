interface DirectorCardType {
    icon?: React.ReactNode;
    label?: string;
    name?: string
}
const DirectorCard = ({
    icon,
    label = "Director",
    name= "Jayadevan V"
}: DirectorCardType) => {
  return (
    <div className="rounded-[30px] bg-brand-navy-100 border border-brand-navy-200 p-[30px] flex gap-[20px] mt-[50px]">
        {icon && <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center uppercase text-3xl font-display bg-brand-navy text-brand-gold-300 font-bold">{`${name[0]}`}</div>}
        <div>
            <p className="text-[14px] uppercase font-ui text-brand-gold font-bold">{label}</p>
            <p className="text-[20px] md:text-[24px] font-ui text-brand-navy font-bold">{name}</p>
        </div>
    </div>
  )
}

export default DirectorCard