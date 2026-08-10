import { useInView } from "react-intersection-observer";
import "animate.css";

type ScrollRevealProps = {
    children: React.ReactNode;
    delay?: number;
};

function ScrollReveal({
    children,
    delay = 0,
}: ScrollRevealProps) {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            style={{
                animationDelay: `${delay}ms`,
                visibility: inView ? "visible" : "hidden",
            }}
            className={
                inView
                    ? "animate__animated animate__fadeInUp"
                    : ""
            }
        >
            {children}
        </div>
    );
}

export default ScrollReveal;