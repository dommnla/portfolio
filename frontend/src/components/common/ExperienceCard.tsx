type ExperienceCardProps = {
    number: string;
    company: string;
    position: string;
    period: string;
    description: string;
    contributions?: string[];
};

function ExperienceCard({
    number,
    company,
    position,
    period,
    description,
    contributions,
}: ExperienceCardProps) {
    return (
        <article className="grid grid-cols-[3rem_1fr] gap-6 md:grid-cols-[3rem_1fr]">

            <div className="relative flex md:justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-white text-sm font-semibold text-zinc-900">
                    {number}
                </div>
            </div>

            <div className="pb-16">

                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">

                    <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                            {company}
                        </h3>

                        <p className="mt-1 text-zinc-500">
                            {position}
                        </p>
                    </div>

                    <span className="text-sm text-zinc-500 md:pt-1">
                        {period}
                    </span>

                </div>

                <p className="mt-6 max-w-3xl leading-8 text-zinc-600">
                    {description}
                </p>

                {contributions && contributions.length > 0 && (
                    <div className="mt-8 max-w-3xl">

                        <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
                            Key Contributions
                        </h4>

                        <ul className="mt-4 space-y-3">

                            {contributions.map((contribution) => (
                                <li
                                    key={contribution}
                                    className="flex gap-3 text-sm leading-7 text-zinc-600"
                                >
                                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />

                                    <span>
                                        {contribution}
                                    </span>
                                </li>
                            ))}

                        </ul>

                    </div>
                )}

            </div>

        </article>
    );
}

export default ExperienceCard;