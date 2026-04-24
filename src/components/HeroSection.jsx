import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
<motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  style={styles.title}
>
  Transforming Healthcare & Business Services
</motion.h1>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  style={styles.subtitle}
>
  We provide Revenue Cycle Management, Medical Coding,
  Bookkeeping, and Recruitment solutions.
</motion.p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>Get Started</button>
          <button style={styles.secondaryBtn}>Contact Us</button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "90vh",
    background: "linear-gradient(to right, #0b1c2c, #1f3c5a)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  overlay: {
    textAlign: "center",
    maxWidth: "800px",
  },
  title: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  buttons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
  },
  primaryBtn: {
    padding: "10px 20px",
    background: "#00aaff",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "10px 20px",
    background: "transparent",
    border: "1px solid white",
    color: "white",
    cursor: "pointer",
  },
};

export default HeroSection;