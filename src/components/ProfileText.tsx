import { useRef, useEffect } from "react";
import "../styles/ProfileText.css"; // Achte darauf, dass diese Datei existiert

export default function ProfileText() {
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = e.clientX / innerWidth - 0.5 * 10;
            const y = e.clientY / innerHeight - 0.5 * 10;

            console.log("Mouse X:", x.toFixed(2), "Mouse Y:", y.toFixed(2)); // Debug-Ausgabe

            if (textRef.current) {
                textRef.current.style.transform = `
          rotateY(${x * 90}deg) 
          rotateX(${y * -90}deg)
        `;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="profile-text-container">
            <div ref={textRef} className="profile-text">
                <div className="korean-Profile">한재희 <br /></div>
                <div>JEHEE HAN</div>
            </div>
        </div>
    );
}
