type CardVariant = "icon" | "icon2" | "number" | "wide";
interface CardProps {
    variant?: CardVariant;
    icon?: React.ReactNode;
    icon2?: React.ReactNode;
    title: string;
    number? : number;
    description: string;
    badge?: string;
    className?: string

}

const variantStyle = {
    icon: {
        bg: "bg-white",
        border: "border border-slate-200",
        boxShadow: "shadow-lg"
    },
    icon2: {
        bg: "bg-brand-creme-50",
        border: "border border-brand-gold-100",
        boxShadow: "none"
    },
    number: {
        bg: "bg-white/10",
        border: "border border-white/10",
        boxShadow: "none"
    },
    wide: {
        bg: "bg-brand-navy",
        border: "border-0",
        boxShadow: "none"
    }
}
const Card = ({
    variant = "icon",
    icon,
    icon2,
    number,
    title,
    description,
    badge,
    className
} : CardProps) => {
    const styles = variantStyle[variant];
  return (
    <div className={`rounded-3xl p-8 ${styles.bg} ${styles.border} ${styles.boxShadow} ${variant === "wide" ? 'block md:flex gap-8' : ''}  ${className}`}>
        {(variant === "icon") && (
            <div className="bg-brand-navy-50 rounded-[10px] inline-block p-[15px] text-brand-navy">
                {icon}
            </div>
        )}

        {( variant === "icon2") && (
            <div className="bg-brand-navy-100 rounded-[10px] inline-block p-[15px] text-brand-navy">
                {icon}
            </div>
        )}
        {( variant === "wide") && (
            <div className="bg-brand-gold-100/20 border border-brand-gold-200/30 rounded-[10px] self-start p-[15px] text-brand-gold-200 inline-block">
                {icon}
            </div>
        )}

        {variant === "number" && (
            <div className="font-display text-[60px] font-bold text-brand-gold-300/20">{String(number).padStart(2, "0")}</div>
        )}

        <div>
            <h2 className={`font-ui ${variant === 'wide' ? 'text-brand-gold-300 mt-0' : variant === "number" ? 'text-white' : 'text-brand-navy'} font-bold text-[20px] my-[20px] whitespace-pre-line`}>{title}</h2>
            <h3 className={`font-body ${variant === 'wide' ? 'text-brand-navy-200' : variant === 'number' ? 'text-white/50' : 'text-brand-navy-400'} text-[17px] my-[20px] leading-[28px]`}>{description}</h3>
        </div>

        {badge && (
            <div className="inline-block rounded-[20px] px-[14px] py-[6px] bg-brand-navy-50 border border-brand-navy-100 text-[12px] font-ui font-bold text-brand-navy">{badge}</div>
        )}
    </div>
  )
}

export default Card