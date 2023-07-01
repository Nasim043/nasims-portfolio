import { useEffect, useState } from "react";
import Card from "./Card";

const ProjectSection = () => {
    const [projects, setProjects] = useState();
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects);
    return (
        <section className="px-4 pb-4 md:px-16 lg:px-16 lg:pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 pt-24" name="projects">
            {projects && projects.map(project => <Card project={project} key={project.id}></Card>)}
        </section>
    );
};

export default ProjectSection;
