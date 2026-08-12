import ProjectCard from "../common/ProjectCard";
import { portfolio } from "../../data/portfolio";

function Projects() {
    return (
        <section
            id="projects"
            className="border-t border-zinc-200 bg-white py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
                    Projects
                </p>

                <h2 className="mb-16 max-w-2xl text-5xl font-bold tracking-tight text-zinc-900">
                    Things I've built.
                </h2>

                <div className="grid gap-6 lg:grid-cols-2">

                    {portfolio.projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            slug={project.slug}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            image={project.image}
                            download={project.download}
                            showViewProject={project.slug !== "developer-portfolio"}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;