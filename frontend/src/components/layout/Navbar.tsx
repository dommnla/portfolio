import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 10) {
                setVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setVisible(false);
                setMenuOpen(false);
            } else {
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 bg-white/90 backdrop-blur-md transition-transform duration-300 ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                <Link
                    to="/#hero"
                    onClick={closeMenu}
                    className="text-lg font-semibold tracking-tight text-zinc-900"
                >
                    Dominique.
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">

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

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-300 text-zinc-900 transition-colors hover:bg-zinc-100 md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <div className="flex w-5 flex-col gap-1.5">
                        <span
                            className={`block h-0.5 w-5 bg-zinc-900 transition-transform duration-200 ${
                                menuOpen
                                    ? "translate-y-2 rotate-45"
                                    : ""
                            }`}
                        />

                        <span
                            className={`block h-0.5 w-5 bg-zinc-900 transition-opacity duration-200 ${
                                menuOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />

                        <span
                            className={`block h-0.5 w-5 bg-zinc-900 transition-transform duration-200 ${
                                menuOpen
                                    ? "-translate-y-2 -rotate-45"
                                    : ""
                            }`}
                        />
                    </div>
                </button>

            </div>

            {/* Mobile Navigation */}
            <div
                className={`border-t border-zinc-200 bg-white/95 backdrop-blur-md transition-all duration-200 md:hidden ${
                    menuOpen
                        ? "max-h-80 opacity-100"
                        : "pointer-events-none max-h-0 overflow-hidden opacity-0"
                }`}
            >
                <nav className="px-6 py-4">

                    <ul className="flex flex-col">

                        <li>
                            <Link
                                to="/#about"
                                onClick={closeMenu}
                                className="block py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/#experience"
                                onClick={closeMenu}
                                className="block py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                            >
                                Experience
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/#projects"
                                onClick={closeMenu}
                                className="block py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                            >
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/#contact"
                                onClick={closeMenu}
                                className="mt-2 block rounded-lg border border-zinc-300 px-4 py-3 text-center text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
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