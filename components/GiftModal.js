import { motion } from "framer-motion";
import Reasons from "./sections/Reasons";
import Favorites from "./sections/Favorites";
import Moments from "./sections/Moments";
import LoveLetter from "./sections/LoveLetter";

const titleMap = {
  reasons: "Reasons Why I Love You",
  favorites: "Your Favorites",
  moments: "Our Moments Together",
  letter: "princess sent u a letter ! 💌"
};

export default function GiftModal({ openKey, onClose }) {
  const render = () => {
    switch (openKey) {
      case "reasons": return <Reasons />;
      case "favorites": return <Favorites />;
      case "language": return <LoveLanguage />;
      case "moments": return <Moments />;
      case "letter": return <LoveLetter />;
      default: return null;
    }
  };

  return (
    <motion.div
      className="overlay"
      role="dialog"
      aria-modal="true"
      aria-label={titleMap[openKey]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <motion.div
        className="modal"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header */}
        <div className="modalHeader">
          <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", gap: 12 }}>
            <div style={{ display: "grid", gap: 6 }}>
              <h2 style={{ fontSize: "1.7rem", margin: 0 }}>{titleMap[openKey]}</h2>
              <p className="muted small" style={{ margin: 0 }}>
              </p>
            </div>

            <button className="btn secondary" onClick={onClose}>
              Back
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="modalBody">
          {render()}
        </div>
      </motion.div>
    </motion.div>
  );
}
