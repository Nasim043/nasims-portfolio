import Lottie from "lottie-react";
import aboutme from "../assets/computer.json";
import { Icon } from "@iconify/react";

const About = () => {
    return (
        <section className="px-4 pb-4 md:px-16 lg:px-8 lg:pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 pt-24" name="about">
            <div className="pb-8">
                <p className="text-3xl font-semibold text-primary-300 sm:text-4xl inline border-b-4 border-gray-500">
                    About Me
                </p>
                <p className="text-primary-50 mt-5 text-base leading-relaxed opacity-80">Passionate MERN developer, dedicated to creating impactful solutions</p>
            </div>
            <div className="md:flex items-center">
                <div className="md:w-1/2" data-aos="fade-down" data-aos-duration="1000" data-aos-mirror="true">
                    <Lottie animationData={aboutme} loop={true} />
                </div>
                <div className="text-gray-500 md:w-1/2 text-justify" data-aos="fade-left" data-aos-duration="1000">
                    <p className="text-primary-50 text-base leading-relaxed opacity-80">
                        Hello, I&#39;m Abu Saleh Nasim, a passionate junior MERN (MongoDB, Express.js, React, Node.js) developer with a strong interest in web development and emerging technologies.
                        What I love most about web development is the continuous learning it requires. I&#39;m constantly exploring new libraries, frameworks, and tools to stay up-to-date with the latest industry trends. I believe that staying updated with the latest tools and techniques is crucial for success in this field.
                    </p>
                    <br />
                    <p className="text-primary-50 text-base leading-relaxed opacity-80">
                        If you&#39;re looking for a dedicated junior MERN developer who is eager to contribute, learn, and grow, I would love to connect. Feel free to reach out to me through email or connect with me on LinkedIn.
                    </p>
                    <br />
                    <div className="flex space-x-5">
                        <a href="https://github.com/Nasim043"
                            className="rounded-full border-2 p-1 text-primary-700 border-primary-700 hover:bg-primary-600 hover:text-neutral-50 duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary-600">
                            <Icon className="text-xl" icon={'akar-icons:github-fill'} />
                        </a>
                        <a href="https://www.linkedin.com/in/md-abu-saleh-nasim-3773b4155/"
                            className="rounded-full border-2 p-1 text-primary-700 border-primary-700 hover:bg-primary-600 hover:text-neutral-50 duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary-600">
                            <Icon className="text-xl" icon={'akar-icons:linkedin-fill'} />
                        </a>
                        <a href="mailto:nasimcse16@gmail.com"
                            className="rounded-full border-2 p-1 text-primary-700 border-primary-700 hover:bg-primary-600 hover:text-neutral-50 duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary-600">
                            <Icon className="text-xl" icon={'mdi:email-outline'} />
                        </a>
                </div>
            </div>
        </div>
        </section >
    );
};

export default About;