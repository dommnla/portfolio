import { Link, useParams } from "react-router-dom";
import { portfolio } from "../data/portfolio";
import Navbar from "../components/layout/Navbar";

function ProjectDetails() {
    const { slug } = useParams();

    const project = portfolio.projects.find(
        (project) => project.slug === slug
    );

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-zinc-900">
                        Project Not Found
                    </h1>

                    <Link
                        to="/"
                        className="mt-6 inline-block text-zinc-500 transition hover:text-zinc-900"
                    >
                        ← Return to Portfolio
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-zinc-50">

            <Navbar />

            <div className="mx-auto min-h-screen max-w-7xl border-x border-zinc-200 bg-white shadow-[0_0_40px_rgba(0,0,0,0.06)]">

                <section className="px-6 py-24">

                <Link
                    to="/"
                    className="text-sm text-zinc-500 transition hover:text-zinc-900"
                >
                    ← Back to Portfolio
                </Link>

                {/* Project Header */}
                <div className="mt-12">
                    <h1 className="text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl">
                        {project.title}
                    </h1>
                </div>

                {/* Main Project Image */}
                <div className="mt-12 overflow-hidden rounded-3xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-[500px] w-full object-cover"
                    />
                </div>

                {/* Project Description */}
                <div className="mt-10 max-w-4xl">
                    <p className="text-xl leading-9 text-zinc-600">
                        {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    {project.download && (
                        <a
                            href={project.download}
                            download
                            className="mt-10 inline-block rounded-xl bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800"
                        >
                            Download Project
                        </a>
                    )}
                </div>

                {/* Project Sections */}
                <div className="mt-28 space-y-32">

                    {project.sections.map((section, index) => {

                        {/* Text-only section */}
                        if (section.type === "text") {
                            return (
                                <section key={index}>
                                    <div className="text-center">
                                        <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
                                            {section.title}
                                        </h2>

                                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-zinc-600">
                                            {section.content}
                                        </p>
                                    </div>
                                </section>
                            );
                        }

                        {/* Landscape video */}
                        if (section.type === "video") {
                            return (
                                <section key={index}>
                                    <div className="text-center">
                                        <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="mt-10 overflow-hidden rounded-3xl bg-zinc-950 shadow-sm">
                                        <video
                                            className="aspect-video w-full"
                                            controls
                                            preload="metadata"
                                        >
                                            <source
                                                src={section.video}
                                                type="video/mp4"
                                            />
                                        </video>
                                    </div>

                                    <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-zinc-600">
                                        {section.description}
                                    </p>
                                </section>
                            );
                        }

                        {/* Portrait videos */}
                        if (section.type === "portrait-video") {
                            return (
                                <section key={index}>
                                    <div className="text-center">
                                        <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-12">
                                        {section.videos.map((video) => (
                                            <div
                                                key={video}
                                                className="overflow-hidden rounded-3xl bg-zinc-950 shadow-sm"
                                            >
                                                <video
                                                    className="h-[520px] w-auto md:h-[620px]"
                                                    controls
                                                    preload="metadata"
                                                >
                                                    <source
                                                        src={video}
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-zinc-600">
                                        {section.description}
                                    </p>
                                </section>
                            );
                        }

                        {/* Development team */}
                        if (section.type === "team") {
                            return (
                                <section key={index}>
                                    <div className="text-center">
                                        <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="mt-10">
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="mx-auto max-h-[500px] max-w-4xl rounded-3xl border border-zinc-200 object-contain"
                                        />

                                        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-zinc-600">
                                            {section.description}
                                        </p>

                                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                                            {section.members.map((member) => (
                                                <span
                                                    key={member}
                                                    className="rounded-full border border-zinc-200 px-5 py-2.5 text-base font-medium text-zinc-700"
                                                >
                                                    {member}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            );
                        }

                        {/* Image gallery */}
                        if (section.type === "gallery") {
                            return (
                                <section key={index}>
                                    <div className="text-center">
                                        <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                                        {section.images.map((image) => (
                                            <img
                                                key={image}
                                                src={image}
                                                alt={section.title}
                                                className="w-full rounded-2xl border border-zinc-200"
                                            />
                                        ))}
                                    </div>

                                    <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-zinc-600">
                                        {section.description}
                                    </p>
                                </section>
                            );
                        }

                        if (section.type === "development-showcase") {
                            return (
                                <section key={index}>

                                    <div className="text-center">
                                        <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="mt-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">

                                        {/* Portrait Development Image */}
                                        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
                                            <img
                                                src={section.portrait}
                                                alt={`${section.title} development`}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        {/* Landscape Development Images */}
                                        <div className="flex flex-col gap-6">

                                            {section.landscape.map((image) => (
                                                <div
                                                    key={image}
                                                    className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50"
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`${section.title} development`}
                                                        className="w-full object-contain"
                                                    />
                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                    <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-zinc-600">
                                        {section.description}
                                    </p>

                                </section>
                            );
                        }

                        {/* Application / Web Portal showcase */}
                        if (section.type === "showcase") {
                            return (
                                <section key={index}>
                                    <div className="text-center">
                                        <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="mt-10 grid gap-12 md:grid-cols-[auto_1fr] md:items-start">

                                        {/* Mobile Application */}
                                        <div className="text-center">
                                            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
                                                <img
                                                    src={section.items[0].image}
                                                    alt={section.items[0].label}
                                                    className="mx-auto max-h-[650px] w-auto object-contain"
                                                />
                                            </div>

                                            <p className="mt-4 text-sm font-medium text-zinc-500">
                                                {section.items[0].label}
                                            </p>
                                        </div>

                                        {/* Web Portal */}
                                        <div className="text-center">
                                            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
                                                <img
                                                    src={section.items[1].image}
                                                    alt={section.items[1].label}
                                                    className="w-full object-contain"
                                                />
                                            </div>

                                            <p className="mt-4 text-sm font-medium text-zinc-500">
                                                {section.items[1].label}
                                            </p>
                                        </div>

                                    </div>

                                    <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-zinc-600">
                                        {section.description}
                                    </p>
                                </section>
                            );
                        }

                        return null;
                    })}

                </div>

            </section>
            </div>
        </main>
    );
}

export default ProjectDetails;