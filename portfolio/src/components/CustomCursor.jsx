import { useEffect, useRef } from "react";
import "../styles/CustomCursor.css";

import cursorFace from "../assets/images/cursor-face.png";

const TRAIL_COUNT = 6;

function CustomCursor() {
  const cursorsRef = useRef([]);
  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const positions = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }))
  );

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      cursorsRef.current.forEach((cursor) => {
        cursor?.classList.add("is-visible");
      });
    };

    const handleMouseLeave = () => {
      cursorsRef.current.forEach((cursor) => {
        cursor?.classList.remove("is-visible");
      });
    };

    const handleMouseEnter = () => {
      cursorsRef.current.forEach((cursor) => {
        cursor?.classList.add("is-visible");
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationFrame;

    const animate = () => {
      // ตัวแรกตามเมาส์
      positions.current[0].x +=
        (mouse.current.x - positions.current[0].x) * 0.18;

      positions.current[0].y +=
        (mouse.current.y - positions.current[0].y) * 0.18;

      // ตัวต่อ ๆ ไปตามตัวก่อนหน้า
      for (let i = 1; i < TRAIL_COUNT; i++) {
        positions.current[i].x +=
          (positions.current[i - 1].x - positions.current[i].x) * 0.18;

        positions.current[i].y +=
          (positions.current[i - 1].y - positions.current[i].y) * 0.18;
      }

      // แสดงตำแหน่งของแต่ละตัว
      cursorsRef.current.forEach((cursor, index) => {
        if (!cursor) return;

        const position = positions.current[index];

        cursor.style.transform = `
          translate3d(
            ${position.x}px,
            ${position.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {Array.from({ length: TRAIL_COUNT }).map((_, index) => (
        <div
          key={index}
          ref={(element) => {
            cursorsRef.current[index] = element;
          }}
          className="custom-cursor"
          aria-hidden="true"
        >
          <img src={cursorFace} alt="" />
        </div>
      ))}
    </>
  );
}

export default CustomCursor;