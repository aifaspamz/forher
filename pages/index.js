import Layout from "../components/Layout";
import PinCard from "../components/PinCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        style={{ display: "grid", gap: 14 }}
      >
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", textAlign: "center" }}
          >
            Happy valentines, wifey :3
          </motion.h1>
          <p className="muted" style={{ marginTop: 8, textAlign: "center" }}>
            try to guess the password, babe. :p
          </p>
        </div>

        <PinCard />

      </motion.div>
    </Layout>
  );
}
