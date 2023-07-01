import Lottie from "lottie-react";
import aboutme from "../assets/computer.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion"

const About = () => {
    return (
        <section className="px-4 pb-4 md:px-16 lg:px-8 lg:pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 pt-24" name="about">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
                    About
                </p>
                <p className="py-6 text-white">Submit the form below to get in touch with me</p>
            </div>
            <div className="md:flex items-center">
                <div className="md:w-1/2">
                    <Lottie animationData={aboutme} loop={true} />
                </div>
                <div className="text-gray-500 md:w-1/2 text-justify">
                    <p className="">
                        Hello, I&#39;m Abu Saleh Nasim, a passionate junior MERN (MongoDB, Express.js, React, Node.js) developer with a strong interest in web development and emerging technologies.
                        What I love most about web development is the continuous learning it requires. I&#39;m constantly exploring new libraries, frameworks, and tools to stay up-to-date with the latest industry trends. I believe that staying updated with the latest tools and techniques is crucial for success in this field.
                    </p>
                    <br />
                    <p>
                        If you&#39;re looking for a dedicated junior MERN developer who is eager to contribute, learn, and grow, I would love to connect. Feel free to reach out to me through email or connect with me on LinkedIn.
                    </p>
                    <br />
                    <div
                        className="flex space-x-4 text-xl">
                        <a href="https://github.com/Nasim043" className="rounded-full border-2 p-1 text-red-900 bg-white duration-300 hover:scale-125"><FaGithub></FaGithub></a>
                        <a href="https://www.linkedin.com/in/md-abu-saleh-nasim-3773b4155/" className="rounded-full border-2 p-1 text-red-900 bg-white duration-300 hover:scale-125"><FaLinkedin></FaLinkedin></a>
                        <a href="mailto:nasimcse16@gmail.com" className="rounded-full border-2 p-1 text-red-900 bg-white duration-300 hover:scale-125"><MdEmail></MdEmail></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;