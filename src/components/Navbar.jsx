import React, { useRef, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    const handleNav = () => {
      setNav(!nav);
    };
    window.onclick = (event) => {
      if (buttonRef.current.contains(event.target)) {
        handleNav();
      } else if (!menuRef.current.contains(event.target)) {
        setNav(false);
      }
    };
  }, [nav]);

  return (
    <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold primary-color ml-4">
        Antonio Carrizosa
      </h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#about">Sobre mí</a>
        </li>
        <li className="p-5">
          <a href="#work">Proyectos</a>
        </li>
        <li className="p-5">
          <a href="#experience">Experiencia</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      <div ref={buttonRef} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        ref={menuRef}
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 z-50"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl primary-color m-4">Antonio Carrizosa</h1>
        <ul className="p-8 text-2xl">
          <li className="p-5">
            <a href="#about">Sobre mí</a>
          </li>
          <li className="p-5">
            <a href="#work">Proyectos</a>
          </li>
          <li className="p-5">
            <a href="#experience">Experiencia</a>
          </li>
          <li className="p-5">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
