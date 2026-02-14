import { motion } from "framer-motion";

const items = [
  { label: "Favorite color", value: "Blue and Gray" },
  { label: "Favorite foods", value: "FRIES ON TOP >>> sour cream flavored, then u started to like takoyaki na rin bcs of me hihi" },
  { label: "Favorite drinks", value: "Matchaaa baby — then we'd go to our fav dating spot at Lagom to order berry matcha :pp" },
  { label: "She’s great at", value: "Dancinggg 💃 you were great at everything u do esp when you're enjoying it. editing, drawing, cooking, and secret na yung iba kz baka yabangan mo lang ako sa personal 🙄 " },
  { label: "Biggest dreams", value: "I assume that would be traveling the world bcs u love aviation. but above all, I noticed that your biggest dream is to be independent and free from everything — to be able to do something without disappointing other people. to be successful so u can help people in need esp old people who's been wandering on the streets :')" },
  { label: "Music", value: "OPM, RnB, and classic songs — u kept making songs alive and meaningful. every song I heard from you feels like us. even if it's a sad song or love song, our love story were full of ups and downs yet we still chose each other every single time:))" }

];

export default function Favorites() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <p className="muted" style={{ margin: 0 }}>
        Your favorites — bcs I believe in to be loved is to be known.
      </p>

      <div
        className="card solid"
        style={{
          padding: 14,
          display: "grid",
          gap: 10,
          maxHeight: "60vh",
          overflowY: "auto"
        }}
      >
        {items.map((it, idx) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.07 }}
            style={{ display: "grid", gap: 4 }}
          >
            <div style={{ fontWeight: 700 }}>{it.label}</div>
            <div className="muted">{it.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
