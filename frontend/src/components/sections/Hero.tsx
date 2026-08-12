import { portfolio } from "../../data/portfolio";

const asset = (path: string) =>
    `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden bg-white"
        >

            {/* Desktop graduation photo */}
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] md:block">

                <img
                    src={asset("/images/graduation.png")}
                    alt=""
                    className="h-full w-full object-cover object-[center_0%]"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />

            </div>

            {/* Mobile graduation photo */}
            <div className="pointer-events-none absolute inset-0 md:hidden">

                <img
                    src={asset("/images/graduation.png")}
                    alt=""
                    className="h-full w-full object-cover object-[center_0%]"
                />

                <div className="absolute inset-0 bg-black/65" />

            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6">

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/90 md:text-zinc-500">
                    {portfolio.personal.role}
                </p>

                <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-8xl md:text-zinc-900">
                    {portfolio.personal.firstName}
                    <br />
                    {portfolio.personal.lastName}
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-8 text-white/90 md:text-zinc-600">
                    {portfolio.personal.tagline}
                </p>

                <div className="mt-12 flex flex-wrap gap-4">

                    <div className="mt-12 flex gap-4">
                        <a
                            href="#projects"
                            className="rounded-xl bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800"
                        >
                            View Projects
                        </a>

                        <a
                            href={asset("/EvangelistaDominiqueLatestResume.pdf")}
                            download="EvangelistaDominiqueLatestResume.pdf"
                            className="rounded-xl border border-zinc-300 px-6 py-3 text-zinc-900 transition hover:bg-zinc-100"
                        >
                            Download Resume
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;