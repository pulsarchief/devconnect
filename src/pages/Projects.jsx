import { projects } from "../data/project";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        date={project.date}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
