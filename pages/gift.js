import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import CardGrid from "../components/CardGrid";
import GiftModal from "../components/GiftModal";
import { AnimatePresence, motion } from "framer-motion";

export default function GiftPage() {
  const router = useRouter();
  const [openKey, setOpenKey] = useState(null);

  useEffect(() => {
    const unlocked = sessionStorage.getItem("forher_unlocked") === "true";
    if (!unlocked) router.replace("/");
  }, [router]);

  const restart = () => {
    sessionStorage.removeItem("forher_unlocked");
    router.push("/");
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        style={{ display: "grid", gap: 14 }}
      >
        <div style={{ display: "grid", gap: 10 }}>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", textAlign: "center"}}>
            happy harts dayyyy, babe! 💙
          </h1>
          <p className="muted" style={{ margin: 0 }}>
            to my one and only universe, my iris, my valentine, aphrodite, sure thing, endless love, and hopefully my greatest love:
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn secondary" onClick={restart}>
              Restart
            </button>
          </div>
        </div>

        <CardGrid onOpen={setOpenKey} />

        <AnimatePresence>
          {openKey && (
            <GiftModal openKey={openKey} onClose={() => setOpenKey(null)} />
          )}
        </AnimatePresence>
      </motion.div>
    </Layout>
  );
}
