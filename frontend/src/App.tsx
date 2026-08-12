import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import HashScroll from "./components/common/HashScroll";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollReveal from "./components/common/ScrollReveal";
import Contact from "./components/sections/Contact";

function Home() {
    return (
        <>
            <Navbar />

            <Hero />

            <ScrollReveal>
                <About />
            </ScrollReveal>

            <ScrollReveal>
                <Experience />
            </ScrollReveal>

            <ScrollReveal>
                <Projects />
            </ScrollReveal>

            <ScrollReveal>
                <Skills />
            </ScrollReveal>

            <ScrollReveal>
                <Contact />
            </ScrollReveal>
        </>
    );
}

function App() {
    return (
        <BrowserRouter basename="/portfolio">

            <HashScroll />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/projects/:slug"
                    element={<ProjectDetails />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;