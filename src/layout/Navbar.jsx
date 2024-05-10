import { useState, useEffect } from "react";
import menuIcon from "./../assets/Icons/menu.png";
import crossIcon from "./../assets/Icons/cross.png";
import theLilaLogo from "./../assets/TheLilaLogo.png";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpened) {
        setMenuOpened(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpened]);
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-24 w-full items-center justify-between bg-background font-Helvetica shadow-lg">
      <img src={theLilaLogo} alt="TheLila logo" className="ml-5 h-24"></img>
      <div
        className={`${menuOpened ? " h-[50vh]" : "h-[0]"}  absolute left-0 top-[96px] w-full overflow-hidden bg-background transition-all`}
      >
        <ul className="mr-2 flex h-full w-full flex-col items-center justify-center gap-9">
          <li className="mr-4">
            <LinkScroll
              to="home"
              offset={-96}
              className="text-3xl uppercase text-principal no-underline"
            >
              Inicio
            </LinkScroll>
          </li>
          <li className="mr-4">
            <LinkScroll
              to="carta"
              className="cursor-pointer text-3xl uppercase text-principal no-underline"
            >
              Carta
            </LinkScroll>
          </li>
          <li className="mr-4">
            <LinkScroll
              to="contact"
              className="cursor-pointer text-3xl uppercase text-principal no-underline"
            >
              Contacto
            </LinkScroll>
          </li>
        </ul>
      </div>
      <img
        src={menuOpened ? crossIcon : menuIcon}
        alt="menu icon"
        onClick={() => setMenuOpened(!menuOpened)}
        className="mr-5 h-7 md:hidden"
      />
      <ul className="mr-2 xsm:hidden md:flex">
        <li className="mr-4">
          <LinkScroll
            to="home"
            offset={-96}
            className="cursor-pointer text-3xl uppercase text-principal no-underline"
          >
            Inicio
          </LinkScroll>
        </li>
        <li className="mr-4">
          <LinkScroll
            to="carta"
            className="cursor-pointer text-3xl uppercase text-principal no-underline"
          >
            Carta
          </LinkScroll>
        </li>
        <li className="mr-4">
          <LinkScroll
            to="contact"
            className="cursor-pointer text-3xl uppercase text-principal no-underline"
          >
            Contacto
          </LinkScroll>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
