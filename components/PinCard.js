import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const CORRECT_PIN = "082225";

export default function PinCard() {
  const router = useRouter();
  const inputRef = useRef(null);

  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const [hintIndex, setHintIndex] = useState(-1);
  const [loading, setLoading] = useState(false);

  const hints = [
    "Hint #1: “ako, ikaw, tayo”",
    "Hint #2: “birthday ko, birthday mo, year naging tayo”"
  ];

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const doShake = (msg) => {
    setError(msg);
    setShake(true);
    setTimeout(() => setShake(false), 450);
  };

  const tryUnlock = () => {
    if (pin.length !== 6) return doShake("Enter 6 digits, babe 💙");
    if (pin !== CORRECT_PIN) return doShake("Try again, babe!");

    setLoading(true);
    setError("");
    sessionStorage.setItem("forher_unlocked", "true");

    setTimeout(() => {
      router.push("/gift");
    }, 1200);
  };

  return (
    <motion.div
      className="card"
      style={{ padding: 18, display: "grid", gap: 12 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div style={{ display: "grid", gap: 6 }}>
        <h2 style={{ fontSize: "1.5rem" }}>Enter the PIN</h2>
        <p className="muted" style={{ margin: 0 }}>
          (Numbers only — 6 digits)
        </p>
      </div>

      <motion.input
        ref={inputRef}
        className="pinInput"
        inputMode="numeric"
        value={pin}
        placeholder="••••••"
        onChange={(e) => {
          setPin(e.target.value.replace(/\D/g, "").slice(0, 6));
          setError("");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") tryUnlock();
        }}
        animate={shake ? { x: [0, -10, 10, -8, 8, -5, 5, 0] } : { x: 0 }}
        transition={{ duration: 0.45 }}
      />

      {error && (
        <motion.div
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: "#b00020", fontWeight: 600 }}
        >
          {error}
        </motion.div>
      )}

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button className="btn" onClick={tryUnlock} disabled={loading}>
          {loading ? "Unlocking..." : "Unlock"}
        </button>

        <button
          className="btn secondary"
          onClick={() => setHintIndex((i) => (i + 1) % hints.length)}
        >
          Hint
        </button>
      </div>

      {hintIndex >= 0 && (
        <motion.div
          className="small"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginTop: 6,
            padding: 12,
            borderRadius: 14,
            border: "1px dashed rgba(0,0,0,0.18)",
            background: "rgba(74,144,226,0.06)"
          }}
        >
          {hints[hintIndex]}
        </motion.div>
      )}
    </motion.div>
  );
}
