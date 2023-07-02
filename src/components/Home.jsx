import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "./SocialLinks";
import { Icon } from "@iconify/react";


const Home = () => {
    return (
        <>
            <div className="px-4 pb-4 md:px-16 lg:px-8 lg:pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 pt-32 text-gray-500 text-center" name="home">
                <h3 className="text-white text-2xl font-bold sm:text-4xl md:font-semibold">Hi, 👋</h3>
                <h3 className="text-white text-2xl font-bold sm:text-4xl md:font-semibold">I&apos;m Abu Saleh Nasim</h3>
                <span className="text-white text-2xl font-bold sm:text-4xl md:font-semibold mr-2">I&apos;m a</span>
                <TypeAnimation
                    sequence={['Web Developer', 800, 'MERN Stack Developer', 800]}
                    style={{ fontSize: '2em', color: '#7cd1fd', fontWeight: 'bold' }}
                    repeat={Infinity}
                />
                {/* <p> A passionate junior web developer from Bangladesh. I have always been fascinated by the power of the web and its ability to connect people from all over the world.</p> */}
                <div className="my-4 space-x-4 md:space-x-6">
                    <a className="text-md mb-2 mx-auto inline-flex w-28 items-center justify-center rounded-lg border bg-primary-700 px-1 py-2.5 font-medium text-primary-50 hover:bg-primary-700/80 focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-600"
                        href="https://drive.google.com/uc?export=download&id=1gBPVdHgB9L0LQI3s1N7ocSTroySsa499" target="_blank" rel="noreferrer">Resume <Icon icon={'material-symbols:download'} className="ml-2"></Icon></a>
                    <Link to="contact" className="text-md mb-2 mx-auto inline-flex w-28 items-center justify-center rounded-lg border bg-primary-700 px-1 py-2.5 font-medium text-primary-50 hover:bg-primary-700/80 focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-600" smooth={true} duration={500}>Contact me</Link>
                </div>
                <SocialLinks></SocialLinks>
            </div>
        </>
    );
};

export default Home;