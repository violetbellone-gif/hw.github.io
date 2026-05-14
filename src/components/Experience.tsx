import { motion } from "framer-motion";
import { experienceEntries } from "../data/siteData";

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-subtle">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-20 tracking-tight"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-24">
          {experienceEntries.map((entry, i) => (
            <motion.div
              key={entry.id}
              id={entry.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 md:gap-12"
            >
              {/* Left: Role / Organization / Date */}
              <div className="md:border-r border-border md:pr-8">
                <h3 className="font-heading text-2xl font-semibold text-primary leading-tight mb-2">
                  {entry.role}
                </h3>
                <p className="text-steel text-base font-medium mb-1">
                  {entry.organization}
                </p>
                <span className="text-muted text-sm font-medium uppercase tracking-widest">
                  {entry.period}
                </span>
              </div>

              {/* Right: 3 Impact Bullets */}
              <div>
                <ul className="space-y-5">
                  {entry.highlights.map((h, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: i * 0.1 + j * 0.08 }}
                      className="flex gap-3 text-muted leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0 mt-2.5" />
                      <span className="text-base">
                        <strong className="text-primary font-semibold">
                          {h.lead}
                        </strong>
                        {" "}{h.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
