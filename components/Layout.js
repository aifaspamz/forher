import FloatingHearts from "./FloatingHearts";

export default function Layout({ children }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <FloatingHearts />

      <div className="container">{children}</div>

      <footer
        style={{
          position: "fixed",
          bottom: "14px",
          right: "18px",
          fontSize: "0.75rem",
          opacity: 0.7,
          zIndex: 10,
          textAlign: "right",
          pointerEvents: "none"
        }}
      >
        from your past, present, and future wife, aifs 💕
      </footer>
    </div>
  );
}
