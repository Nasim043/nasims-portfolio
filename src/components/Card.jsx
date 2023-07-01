import { FaGithub } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Icon } from "@iconify/react";

const Card = (props) => {
    // eslint-disable-next-line react/prop-types
    const { clientLink, serverLink, fullScreenShot, liveLink, projectName, projectDescription, projectType, technologies } = props.project;
    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 h-72">
                <img
                    src={fullScreenShot}
                    alt={projectName}
                    className="w-full h-full rounded-lg shadow-lg object-cover object-top ease-in-out duration-[5s] hover:object-bottom"
                />
            </div>

            {/* Description Side */}
            <div className="w-full lg:w-1/2">
                <div className="p-4 lg:p-8">
                    <h2 className="text-white text-3xl lg:text-4xl font-semibold mb-4">{projectName}</h2>
                    <h2 className="text-white text-xl lg:text-2xl font-medium mb-4">{projectType}</h2>
                    <p className="text-gray-500 mb-6">
                        {projectDescription}
                    </p>
                    <div className="flex flex-wrap gap-6 md:gap-10 justify-start items-center my-6">
                        {/* eslint-disable-next-line react/prop-types */}
                        {technologies?.map((technologie) => <Icon icon={technologie.icon} width={technologie.width} className="h-10" key={technologie.id}/>)}
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href={clientLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600"
                        >
                            <span className="flex items-center">Client <FaGithub className="ml-2"></FaGithub></span>
                        </a>
                        <a
                            href={serverLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600"
                        >
                            <span className="flex items-center">Server <FaGithub className="ml-2"></FaGithub></span>
                        </a>
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600"
                        >
                            <span className="flex items-center">Live <BsFillArrowUpRightCircleFill className="ml-2"></BsFillArrowUpRightCircleFill></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;