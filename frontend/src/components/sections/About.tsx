import { portfolio } from "../../data/portfolio";

function About() {
    return (
        <section
            id="about"
            className="border-t border-zinc-200 bg-white py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-16 lg:grid-cols-2">

                    <div>

                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
                            About Me
                        </p>

                    </div>

                    <div>

                        <p className="text-lg leading-9 text-zinc-600">
                            {portfolio.personal.about}
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;