import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 10) {
                setVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 bg-white/90 backdrop-blur-md transition-transform duration-300 ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                <Link
                    to="/#hero"
                    className="text-lg font-semibold tracking-tight text-zinc-900"
                >
                    Dominique.
                </Link>

                <nav>

                    <ul className="flex items-center gap-8">

                        <li>
                            <Link
                                to="/#about"
                                className="text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-900"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/#experience"
                                className="text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-900"
                            >
                                Experience
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/#projects"
                                className="text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-900"
                            >
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/#contact"
                                className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition-all duration-200 hover:bg-zinc-900 hover:text-white"
                            >
                                Contact
                            </Link>
                        </li>

                    </ul>

                </nav>

            </div>
        </header>
    );
}

export default Navbar;