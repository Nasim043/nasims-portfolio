import { useEffect, useState } from "react";
import Card from "./Card";

const ProjectSection = () => {
    const [projects, setProjects] = useState();
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    
    return (
        <section className="px-4 pb-4 md:px-16 lg:px-8 lg:pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 pt-24" name="projects">
            <div className="pb-8">
                <p className="text-3xl font-semibold text-primary-300 sm:text-4xl inline border-b-4 border-gray-500">
                    My Projects
                </p>
                <p className="text-primary-50 mt-5 text-base leading-relaxed opacity-80">Explore my portfolio of innovative projects</p>
            </div>
            {projects && projects.map(project => <Card project={project} key={project.id}></Card>)}
        </section>
    );
};

export default ProjectSection;
