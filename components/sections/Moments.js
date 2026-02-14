import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Moments() {
  const photos = useMemo(
    () => [
      { src: "/photo1.jpg", caption: "us being us" },
      { src: "/photo2.jpg", caption: "balisong coded" },
      { src: "/photo3.jpg", caption: "I'm yours" },
      { src: "/photo4.jpg", caption: "mothers and daughters" },
      { src: "/photo5.jpg", caption: "first flower bouquet I gave 2 u" },
      { src: "/photo6.jpg", caption: "second flower bouquet for our first month" },
      { src: "/photo7.jpg", caption: "'thumbelina' flower bouquet tgt with mimi for ur eighteenth birthday" },
      { src: "/photo8.jpg", caption: "my fav photo of us" },
      { src: "/photo9.jpg", caption: "family dinner? /j" },
      { src: "/photo10.jpg", caption: "'that' one special day" },
      { src: "/photo11.jpg", caption: "first flower bouquet u gave 2 me" },
      { src: "/photo12.jpg", caption: "acts of service + princess treatment :p" },
      { src: "/photo13.jpg", caption: "FIRST FRESH FLOWER I RECEIVED (lol, you'll never getting away w ts u pulled on me. we ain't breakin up no matter what " },
      { src: "/photo14.jpg", caption: "cotie patootie" },
      { src: "/photo15.jpg", caption: "the outlets retake, 'Ikaw' version" },
      { src: "/photo16.jpg", caption: "our first broom broom tgt" },
      { src: "/photo17.jpg", caption: "us having a blast" },
      { src: "/photo18.jpg", caption: "ito pa rin ang the best among the rest" },
      { src: "/photo19.jpg", caption: "first meet up yarn" },
      { src: "/photo20.jpg", caption: "na para bang mhie at dhie ang tawagan" },
      { src: "/photo21.jpg", caption: "close your eyes close your eyes" },
      { src: "/photo22.jpg", caption: "playing lowkey by NIKI" },
      { src: "/photo23.jpg", caption: "how can we go back to being friends, when we just shared a bed?" },
      { src: "/photo24.jpg", caption: "using digi booths bcs we still cannot afford photobooths (it's alright, we'll do it countless times soon)" },
      { src: "/photo25.jpg", caption: "walang sawang 7/11 dates" },
      { src: "/photo26.jpg", caption: "plaza dates aaaa i loveee" },
      { src: "/photo27.jpg", caption: "on the wing it on" },
      { src: "/photo28.jpg", caption: "double dates w monics nd era" },
      { src: "/photo29.jpg", caption: "lagom date ulit >///<" },
      { src: "/photo30.jpg", caption: "jabee ofc mnm" },
      { src: "/photo31.jpg", caption: "unlimited fries sa bahay + netflix n chill" },
      { src: "/photo32.jpg", caption: "takoyaki with coke float the best" },
      { src: "/photo33.jpg", caption: "tako date ulit sa nightmarket" },
      { src: "/photo34.jpg", caption: "remember our meetup patago szn? what an adventurous journey we had" },
      { src: "/photo35.jpg", caption: "mmcm dates durin our talking stage szn" },
      { src: "/photo36.jpg", caption: "more inumans w you, baby" },
      { src: "/photo37.jpg", caption: "cofee spot para maiba naman?" },
      { src: "/photo38.jpg", caption: "AAAAAA MY PRETTY WIFE >//< ILY BIG TIME !!!" }
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  const onDragEnd = (_, info) => {
    if (info.offset.x < -60) next();
    if (info.offset.x > 60) prev();
  };

  const p = photos[index];

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <p className="muted" style={{ margin: 0, textAlign: "center" }}>
      </p>

      {/* Main photo card */}
      <div
        className="card solid"
        style={{
          padding: 14,
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}
      >
        {/* Photo area */}
        <motion.div
          key={p.src}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={onDragEnd}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            display: "grid",
            gap: 10
          }}
          aria-label="Photo carousel"
        >
          <img
            src={p.src}
            alt={p.caption}
            style={{
              width: "100%",
              maxHeight: "52vh",
              objectFit: "contain",
              borderRadius: 16,
              display: "block",
              background: "rgba(0,0,0,0.03)"
            }}
          />

          <div className="muted" style={{ textAlign: "center" }}>
            {p.caption}
          </div>
        </motion.div>

        {/* Sticky controls inside the card */}
        <div
          style={{
            position: "sticky",
            bottom: 0,
            paddingTop: 10,
            background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.96) 35%)"
          }}
        >
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn secondary" onClick={prev}>Prev</button>
            <button className="btn" onClick={next}>Next</button>
          </div>
        </div>
      </div>

      {/* Premium thumbnails row (horizontal scroll) */}
      <div
        className="card solid"
        style={{
          padding: 10,
          overflowX: "auto",
          display: "flex",
          gap: 10,
          WebkitOverflowScrolling: "touch"
        }}
        aria-label="Photo thumbnails"
      >
        {photos.map((ph, i) => (
          <button
            key={ph.src}
            className="card"
            onClick={() => setIndex(i)}
            aria-label={`Open photo ${i + 1}`}
            style={{
              minWidth: 110,
              border: i === index ? "2px solid rgba(59,130,246,0.65)" : "1px solid rgba(0,0,0,0.08)",
              padding: 8,
              cursor: "pointer",
              background: "transparent"
            }}
          >
            <img
              src={ph.src}
              alt={ph.caption}
              style={{
                width: "100%",
                height: 70,
                objectFit: "cover",
                borderRadius: 12,
                display: "block"
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
