import React from "react";
import { MoveRight } from "lucide-react";

type ButtonVariant = "primary" | "ghost" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  showArrow?: boolean;
}

const Button = ({
  variant = "primary",
  showArrow = false,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "group relative overflow-hidden inline-flex items-center gap-2 rounded-[10px] font-ui font-bold transition-all duration-300 tracking-[1px] cursor-pointer px-3 py-3 md:px-6 text-[13px] md:text-[15px]";

  const variants = {
    primary: "bg-brand-navy text-white",
    ghost: "border border-white bg-transparent text-white py-4",
    secondary: "bg-brand-gold text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Shine effect */}
      <span
        className="
          absolute
          inset-0
          -translate-x-[150%]
          skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-transform
          duration-700
          ease-out
          group-hover:translate-x-[150%]
        "
      />

      <span className="relative z-10">{children}</span>

      {showArrow && (
        <MoveRight
          size={13}
          className="
            relative z-10
            transition-transform
            duration-300
            ease-out
            group-hover:translate-x-1.5
          "
        />
      )}
    </button>
  );
};

export default Button;