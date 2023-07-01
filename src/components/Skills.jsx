import { Icon } from "@iconify/react";

const Skills = () => {
    const skills = [
        { id: 1, icon: "vscode-icons:file-type-html", width: "80" },
        { id: 2, icon: "vscode-icons:file-type-css", width: "94" },
        { id: 3, icon: "logos:bootstrap", width: "80" },
        { id: 4, icon: "devicon:tailwindcss", width: "80" },
        { id: 5, icon: "logos:javascript", width: "70" },
        { id: 6, icon: "skill-icons:react-dark", width: "80" },
        { id: 7, icon: "devicon:reactrouter", width: "80" },
        { id: 8, icon: "vscode-icons:file-type-node", width: "80" },
        { id: 9, icon: "logos:daisyui", width: "85" },
        { id: 10, icon: "skill-icons:expressjs-dark", width: "90" },
        { id: 11, icon: "logos:axios", width: "130" },
        { id: 12, icon: "logos:jwt", width: "180" },
        { id: 13, icon: "logos:stripe", width: "150" },
        { id: 14, icon: "logos:firebase", width: "50" },
        { id: 15, icon: "logos:vercel", width: "80" },
        { id: 16, icon: "skill-icons:mongodb", width: "80" },
    ]
    return (
        <div className="px-4 pb-4 md:px-16 lg:px-8 lg:pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 pt-24" name="skill">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
                    Skills
                </p>
                <p className="py-6 text-white">Submit the form below to get in touch with me</p>
            </div>
            <div className="flex flex-wrap gap-8">
                {skills && skills.map((skill) =>
                    <div className="bg-amber-100 flex items-center" key={skill.id}>
                        <Icon icon={skill.icon} width={skill.width} />
                    </div>
                )}
            </div>
            <div className='flex flex-wrap gap-6 md:gap-10 justify-center items-center mt-6'>
                <img className='w-12 h-12' src="/images/html.png" alt="" />
                <img className='w-12 h-12' src="/images/css.png" alt="" />
                <img className='w-12 h-12' src="/images/js.png" alt="" />
                <img className='w-12 h-12' src="/images/bootstrap.png" alt="" />
                <img className='w-12 h-12' src="/images/tailwind.png" alt="" />
                <img className='w-12 h-12' src="/images/react.png" alt="" />
                <img className='w-12 h-12' src="/images/node.png" alt="" />
                <img className='w-12 h-12' src="/images/express.png" alt="" />
                <img className='w-12 h-12' src="/images/mongo.png" alt="" />
            </div>
        </div>
    );
};

export default Skills;