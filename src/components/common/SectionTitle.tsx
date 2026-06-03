interface TitleProps {
    text: React.ReactNode;
    titleSubText? : React.ReactNode;
    className?: string;
}
const SectionTitle = ({
    text,
    titleSubText,
    className
}: TitleProps) => {
  return (
    <div className={` mt-0 ${className}`}>
       <h1 className="text-[40px] md:text-[50px] font-display text-brand-navy font-bold">{text}</h1> 
        {titleSubText && <p className="font-ui text-[15px] md:text-[18px] text-brand-navy-300 max-w-[800px]">{titleSubText}</p>}
    </div>
  )
}

export default SectionTitle