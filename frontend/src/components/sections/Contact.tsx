import { useForm, ValidationError } from "@formspree/react";
import { portfolio } from "../../data/portfolio";

function Contact() {
    const [state, handleSubmit] = useForm("xqpzbkaj");

    return (
        <section
            id="contact"
            className="border-t border-zinc-200 bg-white py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
                    Contact
                </p>

                <h2 className="max-w-2xl text-5xl font-bold tracking-tight text-zinc-900">
                    {state.succeeded ? "Message sent." : "Let's connect."}
                </h2>

                {state.succeeded ? (
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                        Thanks for reaching out. I'll get back to you as soon
                        as possible.
                    </p>
                ) : (
                    <>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                            Have an opportunity, a project, or simply want to get in
                            touch? Send me a message.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-12 max-w-3xl"
                        >

                            <div className="grid gap-6 md:grid-cols-2">

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-zinc-900"
                                    >
                                        Name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 outline-none transition focus:border-zinc-900"
                                        placeholder="Your name"
                                    />

                                    <ValidationError
                                        prefix="Name"
                                        field="name"
                                        errors={state.errors}
                                        className="mt-2 text-sm text-red-600"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-zinc-900"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 outline-none transition focus:border-zinc-900"
                                        placeholder="your@email.com"
                                    />

                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                        className="mt-2 text-sm text-red-600"
                                    />
                                </div>

                            </div>

                            <div className="mt-6">
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-semibold text-zinc-900"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={7}
                                    className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-zinc-900 outline-none transition focus:border-zinc-900"
                                    placeholder="Write your message..."
                                />

                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                    className="mt-2 text-sm text-red-600"
                                />
                            </div>

                            {state.errors && (
                                <ValidationError
                                    errors={state.errors}
                                    className="mt-4 text-sm text-red-600"
                                />
                            )}

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="mt-8 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {state.submitting ? "Sending..." : "Send Message"}
                            </button>

                        </form>
                    </>
                )}

                <div className="mt-12">
                    <p className="mb-4 text-sm font-semibold text-zinc-900">
                        You can also reach me through these platforms.
                    </p>

                    <div className="flex flex-wrap gap-4">

                        <a
                            href={portfolio.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit my LinkedIn profile"
                            className="flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <path d="M6.5 8.25A1.75 1.75 0 1 0 6.5 4.75a1.75 1.75 0 0 0 0 3.5ZM5 9.75h3v9H5v-9Zm5 0h2.875v1.23h.04c.4-.76 1.375-1.56 2.83-1.56 3.025 0 3.585 1.99 3.585 4.58v4.75h-3v-4.21c0-1.005-.02-2.295-1.4-2.295-1.4 0-1.615 1.095-1.615 2.225v4.28H10v-9Z" />
                            </svg>
                        </a>

                        <a
                            href={portfolio.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit my GitHub profile"
                            className="flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 7.34c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028.92 1.028 2.683 0 3.842-2.337 4.688-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.58.688.482A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
                            </svg>
                        </a>

                        <a
                            href={portfolio.contact.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit my Facebook profile"
                            className="flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.8V3.94c-.31-.04-1.37-.14-2.6-.14-2.57 0-4.33 1.57-4.33 4.45V10H7v3h2.87v8h3.63Z" />
                            </svg>
                        </a>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;