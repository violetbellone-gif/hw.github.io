import { Scale, Cog } from "lucide-react";
import { motion } from "framer-motion";
import { aboutData } from "../data/siteData";

const blockIcons: Record<string, React.ReactNode> = {
  Scale: <Scale className="w-5 h-5" />,
  Cog: <Cog className="w-5 h-5" />,
};

export function AboutCreds() {
  return (
    <section id="about" className="py-32 px-6 bg-bg overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-tight">
            About &amp; Credentials
          </h2>
          <p className="text-muted leading-relaxed text-base md:text-lg">
            {aboutData.narrative}
          </p>
        </motion.div>

        {/* Transition subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-steel text-sm font-medium uppercase tracking-widest mt-16 mb-12"
        >
          {aboutData.transitionSubheadline}
        </motion.p>

        {/* Integration Blocks — two distinct cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {aboutData.integrationBlocks.map((block, bi) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: bi * 0.12 }}
              className="bg-card border border-border rounded-xl p-7 lg:p-8 hover:border-accent/20 transition-all"
            >
              {/* Block header with icon */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
                <span className="text-accent">{blockIcons[block.icon]}</span>
                <h3 className="font-heading text-xl font-semibold text-primary tracking-tight">
                  {block.label}
                </h3>
              </div>

              {/* Integration items within the block */}
              <div className="space-y-8">
                {block.items.map((item) => (
                  <div key={item.id} className="group">
                    {/* Label row + connecting line */}
                    <div className="flex items-center gap-0 mb-2.5">
                      <span className="text-primary font-semibold text-base tracking-tight whitespace-nowrap">
                        {item.left}
                      </span>
                      <div className="flex-1 flex items-center mx-2.5 min-w-0">
                        <div className="flex-1 h-px bg-border group-hover:bg-accent/25 transition-colors" />
                        <span className="mx-2 text-accent-warm font-heading text-base font-bold select-none">
                          {item.connector}
                        </span>
                        <div className="flex-1 h-px bg-border group-hover:bg-accent/25 transition-colors" />
                      </div>
                      <span className="text-primary font-semibold text-sm tracking-tight text-right whitespace-nowrap">
                        {item.right}
                      </span>
                    </div>

                    {/* Linguistic component tag + description */}
                    <div className="flex items-start gap-3">
                      <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent/8 text-accent border border-accent/15 flex-shrink-0 mt-0.5 select-none">
                        {item.tag}
                      </span>
                      <p className="text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Credentials Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-28 pt-12 border-t border-border"
        >
          <p className="text-muted text-xs font-medium uppercase tracking-[0.2em] mb-7">
            Verified Credentials
          </p>
          <div className="space-y-4">
            {aboutData.credentialBar.map((cred) => (
              <div
                key={cred.label}
                className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5"
              >
                <span className="text-primary font-semibold text-base tracking-tight min-w-[90px]">
                  {cred.label}
                </span>
                <span className="text-muted text-sm font-light hidden sm:inline">
                  {cred.detail}
                </span>
                <span className="hidden lg:inline text-border mx-1.5 text-xs select-none">—</span>
                <span className="text-steel text-sm font-light italic">
                  {cred.supports}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
