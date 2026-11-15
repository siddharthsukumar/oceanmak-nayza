import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Reveal({ children, className = "", delay = 0, y = 24 }) {
  return (
    <LazyMotion features={domAnimation}>
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </m.div>
    </LazyMotion>
  );
}