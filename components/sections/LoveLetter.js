import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function LoveLetter() {
  const fullText = useMemo(
    () =>
`To my dearest wifey,

    Happy Valentine’s Day, babe! It’s our first Valentine together this year, and I’m so glad we made it this farrrr. Thank you so much for being so understanding. We had our own goals and challenges, yet we still found ways to be with each other—even if it took us days or weeks. Yes, we’re almost two hours away from each other, living in different cities, but that doesn’t make me love you less. To be real with you, it makes me love you even more :’) I miss you every day, and I always wish for the day we’ll live together. I can’t wait for us to grow, be independent, and finally do all the plans and promises we’ve made.

I also want to thank you for giving me another chance to love you way better than before. Ik I have my flaws and downsides, but I'm willing to change for the better—to become the best version of myself—just so I can give you the love that u truly deserve. Please keep in mind that you're worth changing for and worth every inconvenience. I really hope it's us in the future—I'm afraid I'd forever yearn for your soul if we didn't end up together ಥ_ಥ still, I believe in us. I believe in the way we fight for each other, the way we choose each other despite every tampuhan or misunderstandings, distance and challenges. You’re my safe place, my person, and my greatest blessing. Someday, when we’re finally living side by side, I know all of this waiting will be worth it. Until then, I’ll keep loving you—louder, stronger, and truer every single day. I love you forever, babe.

With all my love,
Aifs`,
    []
  );

  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setTyped("");
    setDone(false);

    const id = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));

      if (i >= fullText.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 45 + Math.random() * 35); // romantic natural typing speed

    return () => clearInterval(id);
  }, [fullText]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div
        className="card parchment"
        style={{
          padding: 16,
          whiteSpace: "pre-wrap",
          lineHeight: 1.7
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          style={{ fontSize: "1rem" }}
        >
          {typed}
          
        </motion.div>

        {done && (
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}
          >
            <span className="pill">💙</span>
            <span className="pill">💙</span>
            <span className="pill">💙</span>
          </motion.div>
        )}
      </div>

      <p className="muted small" style={{ margin: 0 }}>
        <b>February 14, 2026</b>.
      </p>
    </div>
  );
}
