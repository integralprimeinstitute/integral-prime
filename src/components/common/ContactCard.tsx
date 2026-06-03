
interface ContactCardProps {
    icon? : React.ReactNode;
    label: string;
    address? : React.ReactNode;
    phone? : number;
    email? : string;
    socialMedia? : string;   
    socialMediaUrl? : string;   
    className?: string; 
}

const ContactCard = ({
    icon,
    label,
    address,
    phone,
    email,
    socialMedia,
    socialMediaUrl,
    className
}: ContactCardProps) => {
  return (
    <div className={`flex gap-5 py-[20px] border-b-1 border-brand-navy-50 ${className}`}>
        <div className="bg-brand-navy-50 rounded-[10px] self-start inline-block p-3.75 text-brand-navy">{icon}</div>
        <div>
            {label && <div className="font-ui font-bold text-brand-gold/90 text-[14px] mb-[10px] tracking-[1px] whitespace-pre-line uppercase">{label}</div>}
            <div className="font-body text-[18px] text-brand-navy">
                {address && <div>{address}</div>}
                {phone && <a href={`tel:+91${phone}`} target="_blank">{phone}</a>}
                {email && <a href={`mailto:${email}`}  target="_blank">{email}</a>}
                {socialMedia && <a href={`${socialMediaUrl}`}  target="_blank">{socialMedia}</a>}
            </div>
        </div>
    </div>
  )
}

export default ContactCard