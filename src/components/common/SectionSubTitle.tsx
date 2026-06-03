
interface SubtitleProps {
    text: string;
    showHyphen? : boolean;
    className?: string;
}

const SectionSubTitle = ({
    text,
    showHyphen = true,
    className,
}: SubtitleProps) => {
  return (
    <div
      className={`flex items-center gap-2 text-[12px] md:text-sm font-medium uppercase text-brand-gold tracking-[2px] ${className}`}
    >
        {showHyphen && <span className='h-0.5 w-10 bg-brand-gold'/>}
        {text}
    </div>
  )
}

export default SectionSubTitle