import type { ReactNode } from "react";

type Item = {
  label: string;
  badge: string;
};

type CourseCardProps = {
  title: string;
  items: Item[];
  blockIcon?: ReactNode;
  blockTitle: string;
  blockSubtitle: string;
};

const CoursesCard = ({
  title,
  items,
  blockIcon,
  blockTitle,
  blockSubtitle,
}: CourseCardProps) => {
  return (
    <div className="rounded-3xl border border-gray-200/20 bg-white/15 p-6 shadow-xl">
      {/* Title */}
      <h3 className="mb-3 text-[13px] uppercase font-ui tracking-[2px] font-bold text-brand-gold">
        {title}
      </h3>

      {/* Items */}
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-white/10 py-3 transition"
          >
            <span className=" text-white font-bold text-[14px] flex items-center gap-[10px]">
              <i className="w-[7px] h-[7px] rounded-full bg-brand-gold block"></i> 
              {item.label}
            </span>

            <span className="rounded-full bg-blue-100/10 px-3 py-1 text-[11px] font-semibold text-white/50">
              {item.badge}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        className="mt-5 flex w-full items-center gap-4 rounded-[13px] bg-brand-gold px-5 py-3 text-left shadow-lg transition hover:scale-[1.02]"
      >
        {blockIcon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full text-white bg-white/20">
            {blockIcon}
          </div>
        )}

        <div>
          <p className="font-bold text-white">
            {blockTitle}
          </p>

          <p className="text-[10px] text-white">
            {blockSubtitle}
          </p>
        </div>
      </button>
    </div>
  );
};

export default CoursesCard;