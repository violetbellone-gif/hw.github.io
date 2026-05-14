import { motion } from "framer-motion";
import { skillCategories } from "../data/siteData";

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-bg">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-20 tracking-tight"
        >
          Skills &amp; Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: ci * 0.14 }}
            >
              <h3 className="font-heading text-xl font-semibold text-primary mb-6 pb-4 border-b border-border">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.tags.map((tag, ti) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.14 + ti * 0.04 }}
                    className="inline-block px-4 py-2 bg-card border border-border rounded-full text-base text-muted hover:border-accent/40 hover:text-accent transition-all cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
