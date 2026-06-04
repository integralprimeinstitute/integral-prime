import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { NAV_ITEMS } from "../../constants/navigation";
import Button from "../common/Button";

export const NAV_LINK_STYLE = `
  relative
  inline-block
  pb-1
  before:content-['']
  before:absolute
  before:left-0
  before:-bottom-1
  before:h-[2px]
  before:w-full
  before:origin-left
  before:scale-x-0
  before:bg-[linear-gradient(to_right,_#77749c,_#505d86,_#5258b1)]
  before:transition-transform
  before:duration-500
  before:ease-in-out
  hover:before:scale-x-100
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();

    const element = document.getElementById(target);

    if (element) {
      const headerHeight = 30;

      const offsetTop =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-b-[#e7e7e7] bg-white">
      <div className="hdr-wrapper mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-5 py-5">
        {/* Logo */}
        <div className="flex align-middle mr-auto">
          <img
            className="max-w-[60px] self-center"
            src={logo}
            alt="Integral Prime Institute"
          />

          <div className="flex-col justify-center pl-3 font-ui uppercase lg:flex hidden">
            <div className="text-[14px] md:text-[18px] font-bold text-brand-navy">
              Integral Prime Institute
            </div>

            <span className="text-[10px] md:text-[12px] tracking-[1px] text-brand-gold">
              Integrating Knowledge. Inspiring Excellence
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center md:gap-8 lg:gap-[18px] xl:gap-8 font-ui text-[15px] font-medium text-brand-navy md:flex md:mr-[15px]">
          {NAV_ITEMS.map((item) =>
            item.type === "section" ? (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(e) => handleScroll(e, item.target)}
                className={NAV_LINK_STYLE}
              >
                {item.label}
              </a>
            ) : null,
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/pdfs/IPI_Enrolment_Form.pdf";
              link.setAttribute("download", "IPI_Enrolment_Form.pdf");
              document.body.appendChild(link);
              link.click();
              link.remove();
            }}
          >
            Enroll Now
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1 md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="flex flex-col px-5 py-4">
            {NAV_ITEMS.map((item) =>
              item.type === "section" ? (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={(e) => handleScroll(e, item.target)}
                  className="border-b border-gray-100 py-3 text-brand-navy"
                >
                  {item.label}
                </a>
              ) : null,
            )}

            <div className="mt-4 text-center">
              <Button
                className="p-[0_20px]"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/pdfs/IPI_Enrolment_Form.pdf";
                  link.setAttribute("download", "IPI_Enrolment_Form.pdf");
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                }}
              >
                Enroll Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;