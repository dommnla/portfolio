import { portfolio } from "../../data/portfolio";
const asset = (path: string) =>
    `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden bg-white"
        >

            <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%]">

                <img
                    src={asset("/images/graduation.png")}
                    alt=""
                    className="h-full w-full object-cover object-[center_0%]"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />

            </div>

            <div className="mx-auto flex w-full max-w-7xl flex-col px-6">

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
                    {portfolio.personal.role}
                </p>

                <h1 className="max-w-4xl text-6xl font-bold leading-tight tracking-tight text-zinc-900 md:text-8xl">
                    {portfolio.personal.firstName}
                    <br />
                    {portfolio.personal.lastName}
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
                    {portfolio.personal.tagline}
                </p>

                <div className="mt-12 flex gap-4">
                    <button className="rounded-xl bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800">
                        View Projects
                    </button>

                    <button className="rounded-xl border border-zinc-300 px-6 py-3 text-zinc-900 transition hover:bg-zinc-100">
                        Download Resume
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Hero;