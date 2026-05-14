import { MessageCircle, Globe, Trophy, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { journeyNodes } from "../data/siteData";

const iconMap: Record<number, React.ReactNode> = {
  1: <MessageCircle className="w-5 h-5" />,
  2: <Globe className="w-5 h-5" />,
  3: <Trophy className="w-5 h-5" />,
  4: <Compass className="w-5 h-5" />,
};

export function JourneyMap() {
  const handleClick = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="journey" className="py-32 px-6 bg-bg">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary text-center mb-4 tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted text-center max-w-lg mx-auto mb-20 font-light text-base">
            A career built on managing complexity across borders.
          </p>
        </motion.div>

        {/* Metro-style timeline — stripped to year + title only */}
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-[5%] right-[5%] h-px bg-border" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-4 relative">
            {journeyNodes.map((node, i) => (
              <motion.button
                key={node.id}
                onClick={() => handleClick(node.targetId)}
                className="flex flex-col items-center flex-1 group cursor-pointer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Year label */}
                <span className="text-muted text-sm font-medium uppercase tracking-widest mb-4 text-center">
                  {node.label}
                </span>

                {/* Node circle */}
                <span
                  className="relative z-10 w-14 h-14 rounded-full border-2 border-border bg-card text-steel flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:scale-110 group-hover:shadow-md"
                >
                  {iconMap[node.id]}
                </span>

                {/* Milestone title */}
                <h3 className="font-heading text-base font-semibold text-primary mt-5 text-center leading-tight group-hover:text-accent transition-colors">
                  {node.title}
                </h3>

                {/* Subtle indicator */}
                <span className="text-accent/0 group-hover:text-accent/60 text-sm mt-1.5 transition-all duration-300 font-medium">
                  View details
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
