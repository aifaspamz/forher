import { useEffect, useState } from "react";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = `${Date.now()}-${Math.random()}`;
      const h = {
        id,
        left: rand(5, 95),
        size: rand(14, 24),
        opacity: rand(0.12, 0.22)
      };

      setHearts((prev) => [...prev, h].slice(-14));

      setTimeout(() => {
        setHearts((prev) => prev.filter((x) => x.id !== id));
      }, 6000);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0
      }}
    >
      {hearts.map((h) => (
        <div
          key={h.id}
          style={{
            position: "absolute",
            left: `${h.left}%`,
            bottom: -30,
            fontSize: h.size,
            opacity: h.opacity,
            transform: "translateY(-120vh)",
            transition: "transform 6s linear"
          }}
        >
          💙
        </div>
      ))}
    </div>
  );
}
