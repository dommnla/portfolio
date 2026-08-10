import { portfolio } from "../../data/portfolio";

function Skills() {
    return (
        <section
            id="skills"
            className="border-t border-zinc-200 bg-zinc-50 py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
                    Skills
                </p>

                <h2 className="mb-16 text-5xl font-bold tracking-tight text-zinc-900">
                    Technologies I work with.
                </h2>

                <div className="grid gap-6 md:grid-cols-3">

                    {portfolio.skills.map((skill) => (
                        <div
                            key={skill.category}
                            className="rounded-2xl border border-zinc-200 bg-white p-8"
                        >

                            <h3 className="mb-6 text-lg font-semibold text-zinc-900">
                                {skill.category}
                            </h3>

                            <div className="flex flex-wrap gap-2">

                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600"
                                    >
                                        {item}
                                    </span>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;