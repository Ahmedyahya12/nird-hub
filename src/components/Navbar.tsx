import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets/index";
import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from '../assets/logo.png'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black/80  backdrop-blur-sm border-b border-primary-800`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link
          to={"/"}
          className="flex items-center gap-2 rounded group "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          aria-label="Ahmed Yahya - Go to home page"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg shadow-sm ">
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <div className="font-semibold">Nird-Hub</div>
            <div className="text-xs text-slate-300 -mt-0.1">
              Explorez votre potentiel
            </div>

          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="flex-row hidden gap-10 list-none sm:flex" role="menubar">
          {navLinks.map((link, index) => (
            <li
              key={index}
              role="none"
              className={`${active === link.title ? "text-secondary" : "text-white-100"
                } hover:text-secondary text-[18px] font-medium cursor-pointer transition-all duration-300 relative group`}
            >
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                role="menuitem"
                aria-label={`Navigate to ${link.title} section`}
                aria-current={active === link.title ? "page" : undefined}
                className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
              >
                {link.title}
              </a>
              {/* Underline effect */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-secondary transition-all duration-300 ${active === link.title ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="flex items-center justify-end flex-1 sm:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
            aria-label={
              toggle ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={toggle}
            aria-controls="mobile-menu"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="w-[28px] h-[28px] object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
              aria-hidden="true"
            />
          </button>

          <div
            id="mobile-menu"
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-tertiary/95 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-secondary/20 shadow-glow transition-all duration-300 black-gradient `}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <ul className="flex flex-col items-start gap-4 list-none justify-normal ">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  role="none"
                  className={`${active === link.title
                    ? "text-secondary font-semibold"
                    : "text-white-100"
                    } font-poppins font-medium text-[16px] hover:text-secondary transition-all duration-300 cursor-pointer relative pl-3 w-full`}
                >
                  {/* Active indicator bar */}
                  {active === link.title && (
                    <span
                      className="absolute left-0 w-1 h-4 -translate-y-1/2 rounded-full top-1/2 bg-secondary"
                      aria-hidden="true"
                    />
                  )}
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                    role="menuitem"
                    aria-label={`Navigate to ${link.title} section`}
                    aria-current={active === link.title ? "page" : undefined}
                    className="block px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-tertiary"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
