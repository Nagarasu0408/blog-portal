import { useParallax } from "react-scroll-parallax";

function Scale() {
    const parallax = useParallax({
        scale: [0, 5, "easeIn"],
        rotateX: [0, 720],

    });
    return (
        <div className="container-body">
            <div ref={parallax.ref} className="spinner">
                Stay and Transport
            </div>
        </div>
    );
}

export default Scale;