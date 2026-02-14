import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  "your pretty smile w your little fangs brightens up my world.",
  "you make even ordinary days feel special.",
  "your genuineness feels like ethereal. you are too good to be true.",
  "you feel like peace, like a gentle breeze across the sea.",
  "you’re strong, gentle, and brave. you kept pushing forward and not give up on anything.",
  "you inspire me to become better. everything became better since you.",
  "you’re my comfort and my favorite person. I will and would always choose you over anyone else.",
  "you believe in us—always and in all ways.",
  "you feel like home—my future, my someday."
];

const closingMessage = `Even if there were no reasons at all, I would still choose you — every single time. js a reminder of how deeply lovable you are. I love you not because of what you do, but because of who you are. (✿◠‿◠)`;

export default function Reasons() {
  const [shown, setShown] = useState(0);
  const [typed, setTyped] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);
  const [burst, setBurst] = useState(false);

  /* Typing animation */
  useEffect(() => {
    if (shown === reasons.length) {
      let i = 0;
      setTyped("");
      setDoneTyping(false);

      const interval = setInterval(() => {
        i++;
        setTyped(closingMessage.slice(0, i));
        if (i >= closingMessage.length) {
          clearInterval(interval);
          setDoneTyping(true);
          setBurst(true);

          setTimeout(() => setBurst(false), 2500);
        }
      }, 25);

      return () => clearInterval(interval);
    }
  }, [shown]);

  return (
    <div style={{ display: "grid", gap: 12, position: "relative" }}>
      {/* Intro text */}
      {shown === 0 && (
        <div className="muted small">
          Ik love isn't supposed to depend on reasons. my love for you isn't conditional—
          I love you because I just do. my heart chose you and it will keep choosing you.
          but I still wanna tell you how you make me feel and the things <strong>about you</strong>
          that make me love you even more. nd if u ever doubt yourself, pls read this 💙
        </div>
      )}

      {/* Reasons Card */}
      <div className="card solid" style={{ padding: 14 }}>
        <div style={{ display: "grid", gap: 10 }}>
          {reasons.slice(0, shown).map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              style={{ display: "flex", gap: 10, alignItems: "start" }}
            >
              <span style={{ color: "#3b82f6", marginTop: 2 }}>💙</span>
              <div>{r}</div>
            </motion.div>
          ))}

          {/* Closing typed message */}
          <AnimatePresence>
            {shown === reasons.length && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  marginTop: 14,
                  padding: 16,
                  borderRadius: 16,
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  whiteSpace: "pre-line"
                }}
              >
                {typed}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button
          className="btn"
          onClick={() => setShown((s) => Math.min(s + 1, reasons.length))}
        >
          {shown < reasons.length ? "Reveal Me 💙" : "All revealed 🫶"}
        </button>

        <button className="btn secondary" onClick={() => {
          setShown(0);
          setTyped("");
          setDoneTyping(false);
        }}>
          Reset
        </button>
      </div>

      {/* 💙 Confetti Hearts Burst */}
      {burst && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden"
          }}
        >
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                y: 0,
                x: 0,
                opacity: 1,
                scale: 1
              }}
              animate={{
                y: -200 - Math.random() * 200,
                x: (Math.random() - 0.5) * 300,
                opacity: 0,
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 2,
                ease: "easeOut"
              }}
              style={{
                position: "absolute",
                bottom: "40%",
                left: "50%",
                fontSize: 18 + Math.random() * 16
              }}
            >
              💙
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
