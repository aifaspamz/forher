import { motion } from "framer-motion";

const cards = [
  { key: "reasons", title: "Reasons Why I Love You", emoji: "💙" },
  { key: "favorites", title: "Your Favorites", emoji: "✨" },
  { key: "moments", title: "Our Moments Together", emoji: "📸" },
  { key: "letter", title: "Love Letter", emoji: "💌" }
];

export default function CardGrid({ onOpen }) {
  return (
    <div className="grid cols3">
      {cards.map((c, idx) => (
        <motion.button
          key={c.key}
          className="card"
          onClick={() => onOpen(c.key)}
          style={{
            padding: 16,
            textAlign: "left",
            cursor: "pointer",
            border: "none",
            background: "white",
            display: "grid",
            gap: 8
          }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06 * idx }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          aria-label={`Open ${c.title}`}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              aria-hidden="true"
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                display: "grid",
                placeItems: "center",
                background: "rgba(74,144,226,0.10)",
                color: "#4a90e2",
                fontSize: 18
              }}
            >
              {c.emoji}
            </div>
            <h2 style={{ fontSize: "1.2rem" }}>{c.title}</h2>
          </div>

          <p className="muted small" style={{ margin: 0 }}>
          
          </p>
        </motion.button>
      ))}
    </div>
  );
}
