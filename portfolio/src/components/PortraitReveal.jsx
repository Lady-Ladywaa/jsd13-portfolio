import { useEffect, useRef, useState } from "react";
import "../styles/PortraitReveal.css";

import mainImg from "../assets/images/profile-main.png";
import secondImg from "../assets/images/profile-second.png";

function PortraitReveal({
    mainImage = mainImg,
    secondImage = secondImg,
}) {
    const containerRef = useRef(null);

    const target = useRef({
        x: 50,
        y: 50,
    });

    const current = useRef({
        x: 50,
        y: 50,
    });

    const frame = useRef(null);

    const [position, setPosition] = useState({
        x: 50,
        y: 50,
    });

    const [isHovering, setIsHovering] = useState(false);

    // Smooth mouse movement
    useEffect(() => {
        const animate = () => {
            current.current.x +=
                (target.current.x - current.current.x) * 0.15;

            current.current.y +=
                (target.current.y - current.current.y) * 0.15;

            setPosition({
                x: current.current.x,
                y: current.current.y,
            });

            frame.current = requestAnimationFrame(animate);
        };

        frame.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(frame.current);
        };
    }, []);

    // Track mouse position
    const handlePointerMove = (event) => {
        const container = containerRef.current;

        if (!container) return;

        const rect = container.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) / rect.width) * 100;

        const y =
            ((event.clientY - rect.top) / rect.height) * 100;

        target.current = {
            x: Math.max(0, Math.min(100, x)),
            y: Math.max(0, Math.min(100, y)),
        };

        setIsHovering(true);
    };

    const handlePointerLeave = () => {
        setIsHovering(false);

        // Return reveal position to center
        target.current = {
            x: 50,
            y: 50,
        };
    };

    return (
        <div
            ref={containerRef}
            className={`portrait-reveal ${isHovering ? "is-hovering" : ""
                }`}
            style={{
                "--mouse-x": `${position.x}%`,
                "--mouse-y": `${position.y}%`,
            }}
            onPointerMove={handlePointerMove}
            onPointerEnter={handlePointerMove}
            onPointerLeave={handlePointerLeave}
        >
            {/* Main portrait */}
            <img
                src={mainImage}
                alt="Professional portrait"
                className="portrait-image portrait-main"
                draggable="false"
            />

            {/* Second portrait revealed by mouse */}
            <img
                src={secondImage}
                alt="Creative portrait"
                className="portrait-image portrait-second"
                draggable="false"
            />

            {/* Custom cursor */}
            <div className="portrait-cursor">
                <span>MOVE</span>
            </div>
        </div>
    );
}

export default PortraitReveal;