import { Link } from "react-router-dom";

type ProjectCardProps = {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    download: string | null;
};

function ProjectCard({
    slug,
    title,
    description,
    technologies,
    image,
    download,
}: ProjectCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-8">

                <div className="flex items-start justify-between gap-6">

                    <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                        {title}
                    </h3>

                </div>

                <p className="mt-6 leading-8 text-zinc-600">
                    {description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">

                    {technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600"
                        >
                            {technology}
                        </span>
                    ))}

                </div>

                <div className="mt-8 flex items-center gap-6">

                    <Link
                        to={`/projects/${slug}`}
                        className="text-sm font-semibold text-zinc-900 transition hover:text-zinc-500"
                    >
                        View Project →
                    </Link>

                    {download && (
                        <a
                            href={download}
                            download
                            className="text-sm font-semibold text-zinc-500 transition hover:text-zinc-900"
                        >
                            Download
                        </a>
                    )}

                </div>

            </div>

        </article>
    );
}

export default ProjectCard;