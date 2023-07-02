import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skill",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ]
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="flex justify-between items-center w-full h-20 px-4 text-primary-50 backdrop-filter backdrop-blur-lg mb-8 fixed top-0 left-0 z-50 lg:px-16">
        <div>
          <h1 className="text-3xl ml-2">Nasim.dev</h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-semibold text-primary-50 hover:scale-105 duration-200"
            >
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          ))}
          <a className="text-primary-50 font-semibold" href="https://drive.google.com/uc?export=download&id=1gBPVdHgB9L0LQI3s1N7ocSTroySsa499" target="_blank" rel="noreferrer">Resume</a>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul data-aos="fade-left" data-aos-duration="500" className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-96 mt-20 bg-mybg text-primary-50 opacity-50">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-4 text-xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
            <a className="text-xl pt-4" href="https://drive.google.com/uc?export=download&id=1gBPVdHgB9L0LQI3s1N7ocSTroySsa499" target="_blank" rel="noreferrer">Resume</a>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;