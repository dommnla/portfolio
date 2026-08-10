import ExperienceCard from "../common/ExperienceCard";
import { portfolio } from "../../data/portfolio";

function Experience() {
    return (
        <section
            id="experience"
            className="border-t border-zinc-200 bg-zinc-50 py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-20">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
                        Experience
                    </p>

                    <h2 className="text-5xl font-bold tracking-tight text-zinc-900">
                        My Journey
                    </h2>
                </div>

                <div className="relative">

                    <div className="absolute bottom-0 left-6 top-0 w-px bg-zinc-200 md:left-[49px]" />

                    {portfolio.experience.map((experience, index) => (
                        <ExperienceCard
                            key={experience.company}
                            number={String(index + 1).padStart(2, "0")}
                            company={experience.company}
                            position={experience.position}
                            period={experience.period}
                            description={experience.description}
                            contributions={experience.contributions}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Experience;