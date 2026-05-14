import { motion } from "framer-motion";

export function RawReflection() {
  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          {/* Monospace label — like a log entry */}
          <p className="text-accent/50 font-mono text-sm tracking-wider mb-6 select-none">
            root/logs/reflection:
          </p>

          <blockquote className="text-steel text-lg md:text-xl font-light italic leading-relaxed border-l border-accent/25 pl-6">
            Beneath every structured workflow is a period of navigating through
            the unknown. I don't fear the chaos; I document it until it becomes
            a system.
          </blockquote>

          <p className="text-accent/30 font-mono text-xs tracking-wider mt-8 select-none">
            // End of log — system operational
          </p>
        </motion.div>
      </div>
    </section>
  );
}
