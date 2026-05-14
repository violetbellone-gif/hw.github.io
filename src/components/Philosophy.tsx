import { Layout, MessageSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { philosophyItems } from "../data/siteData";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-8 h-8" />,
  MessageSquare: <MessageSquare className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
};

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-subtle">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl lg:text-5xl font-bold text-primary text-center mb-6 tracking-tight"
        >
          The Execution Protocol
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted text-center max-w-lg mx-auto mb-20 font-light text-base"
        >
          Three principles that convert ambiguity into operational clarity.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.14 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-accent/25 transition-all group"
            >
              <div className="text-accent mb-5 group-hover:scale-105 transition-transform duration-300">
                {iconMap[item.icon]}
              </div>
              <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
