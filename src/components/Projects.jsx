import {
    FaReact,
    // FaPython,
    // FaPepperHot,
    // FaJs,
    // FaSass,
    // FaCode,
    // FaGithub,
    // FaExternalLinkAlt,
    // FaLaravel,
    // FaBootstrap,
    // FaDatabase
} from "react-icons/fa";
const Projects = () => {
    return (
        <div className="my-container mb-10" name='projects'>
            <h1
                className="text-xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 sm:text-3xl sm:leading-10 md:text-5xl md:leading-normal text-center mt-20">
                Most Popular Recipes
            </h1>
            <p className='mb-7 text-center text-gray-500 sm:max-w-xl md:max-w-full lg:max-w-screen-lg mx-auto'>Check out our most popular recipes - tried and tested favorites that are sure to impress! From mouthwatering mains to delectable desserts,
                these recipes are loved by our readers and are guaranteed to satisfy your cravings.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                <div className='shadow-lg flex flex-col rounded-lg bg-[#080808]'>
                    <div className="">
                        <a href="#">
                            <img className="w-full rounded-lg"
                                src='https://i.ibb.co/jzyGmgp/hindi-685x317.jpg'
                                alt='hello' />
                        </a>
                    </div>
                    <div className="px-6 py-4">
                        <div className="flex flex-wrap text-center pt-4 mb-2">
                            <div className="flex items-center mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-blue-400 text-blue-600">
                                <FaReact className='me-2'></FaReact>React
                            </div>
                            <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">React</div>
                            <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Next.js</div>
                        </div>
                        <a className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Hello world</a>
                        <p className="text-gray-500 text-sm">
                            The city that never sleeps
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;