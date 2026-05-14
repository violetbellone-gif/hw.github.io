import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { heroData } from "../data/siteData";

function SpiralVisual() {
  return (
    <motion.svg
      viewBox="0 0 500 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* ===== Zone 1: Isolated Ambiguity (Bottom — chaotic, irregular) ===== */}

      {/* Chaotic cluster of short jagged paths */}
      <motion.path
        d="M 180 530 L 175 520 L 185 510 L 170 495 L 190 485"
        stroke="#8B95A0" strokeWidth="0.7" fill="none" opacity="0.4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 2.0 }}
      />
      <motion.path
        d="M 310 525 L 320 515 L 305 505 L 325 490 L 310 480"
        stroke="#6B7C88" strokeWidth="0.6" fill="none" opacity="0.35"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.3, delay: 2.1 }}
      />
      <motion.path
        d="M 200 500 L 210 490 L 195 475 L 215 465 L 195 455"
        stroke="#8B95A0" strokeWidth="0.6" fill="none" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 2.2 }}
      />
      <motion.path
        d="M 300 495 L 290 485 L 305 475 L 285 460 L 305 450"
        stroke="#6B7C88" strokeWidth="0.6" fill="none" opacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 2.3 }}
      />

      {/* Irregular ellipses — bottom, chaotic */}
      <motion.ellipse
        cx="250" cy="490" rx="85" ry="45"
        stroke="#8B95A0" strokeWidth="0.7" strokeDasharray="3 5"
        fill="none" opacity="0.35"
        initial={{ opacity: 0 }} animate={{ opacity: 0.35 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      />
      <motion.ellipse
        cx="245" cy="485" rx="65" ry="32" transform="rotate(-8 245 485)"
        stroke="#6B7C88" strokeWidth="0.5" strokeDasharray="6 4"
        fill="none" opacity="0.28"
        initial={{ opacity: 0 }} animate={{ opacity: 0.28 }}
        transition={{ duration: 0.7, delay: 1.8 }}
      />

      {/* Zone 1 label — LEFT offset, spatially avoids ellipse (left edge at x=165) */}
      <motion.text
        x="20" y="495"
        className="fill-steel text-[11px] font-semibold"
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
        initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}
        transition={{ duration: 0.6, delay: 2.4 }}
      >
        Isolated Ambiguity
      </motion.text>

      {/* Leader line Z1: text right-edge → ellipse left-anchor */}
      <motion.line
        x1="150" y1="492" x2="180" y2="485"
        stroke="#8B95A0" strokeWidth="0.5" opacity="0.22"
        initial={{ opacity: 0 }} animate={{ opacity: 0.22 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      />

      {/* ===== Zone 2: Documentation & Reflection (Middle — transitioning) ===== */}

      {/* Smoothing ellipses */}
      <motion.ellipse
        cx="250" cy="370" rx="80" ry="55"
        stroke="#8B95A0" strokeWidth="0.85" strokeDasharray="10 4"
        fill="none" opacity="0.45"
        initial={{ opacity: 0 }} animate={{ opacity: 0.45 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
      <motion.ellipse
        cx="248" cy="368" rx="60" ry="38"
        stroke="#6B7C88" strokeWidth="0.7" strokeDasharray="15 5"
        fill="none" opacity="0.38"
        initial={{ opacity: 0 }} animate={{ opacity: 0.38 }}
        transition={{ duration: 0.7, delay: 1.4 }}
      />

      {/* Cross-connecting lines — becoming more structured */}
      <motion.line
        x1="190" y1="350" x2="310" y2="390"
        stroke="#8B95A0" strokeWidth="0.5" opacity="0.25"
        initial={{ opacity: 0 }} animate={{ opacity: 0.25 }}
        transition={{ duration: 0.6, delay: 1.7 }}
      />
      <motion.line
        x1="310" y1="350" x2="190" y2="390"
        stroke="#6B7C88" strokeWidth="0.5" opacity="0.22"
        initial={{ opacity: 0 }} animate={{ opacity: 0.22 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      />

      {/* Smaller aligned nodes */}
      <motion.circle cx="190" cy="350" r="3" fill="#8B95A0" opacity="0.4"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4, delay: 1.9 }} />
      <motion.circle cx="310" cy="350" r="3" fill="#8B95A0" opacity="0.4"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4, delay: 1.95 }} />
      <motion.circle cx="190" cy="390" r="3" fill="#6B7C88" opacity="0.35"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4, delay: 2.0 }} />
      <motion.circle cx="310" cy="390" r="3" fill="#6B7C88" opacity="0.35"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4, delay: 2.05 }} />

      {/* Zone 2 labels — RIGHT offset, spatially avoids ellipse (right edge at x=330) */}
      <motion.text
        x="345" y="375"
        className="fill-steel text-[11px] font-semibold"
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
        initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}
        transition={{ duration: 0.6, delay: 2.1 }}
      >
        Documentation &amp;
      </motion.text>
      <motion.text
        x="345" y="393"
        className="fill-steel text-[11px] font-semibold"
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
        initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}
        transition={{ duration: 0.6, delay: 2.15 }}
      >
        Radical Reflection
      </motion.text>

      {/* Leader line Z2: text left-edge → ellipse right-anchor */}
      <motion.line
        x1="345" y1="379" x2="310" y2="390"
        stroke="#8B95A0" strokeWidth="0.5" opacity="0.22"
        initial={{ opacity: 0 }} animate={{ opacity: 0.22 }}
        transition={{ duration: 0.5, delay: 2.2 }}
      />

      {/* ===== Zone 3: Cognitive Closed-loop (Top — precise, geometric) ===== */}

      {/* Perfect concentric circles */}
      <motion.circle cx="250" cy="240" r="70"
        stroke="#8B95A0" strokeWidth="0.85" fill="none" opacity="0.55"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }} />
      <motion.circle cx="250" cy="240" r="52"
        stroke="#6B7C88" strokeWidth="0.7" fill="none" opacity="0.48"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.3, delay: 0.8 }} />
      <motion.circle cx="250" cy="240" r="34"
        stroke="#8B95A0" strokeWidth="0.6" fill="none" opacity="0.4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, delay: 1.0 }} />

      {/* Precise geometric cross lines */}
      <motion.line x1="215" y1="205" x2="285" y2="275"
        stroke="#8B95A0" strokeWidth="0.5" opacity="0.3"
        initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ duration: 0.5, delay: 1.5 }} />
      <motion.line x1="285" y1="205" x2="215" y2="275"
        stroke="#6B7C88" strokeWidth="0.5" opacity="0.28"
        initial={{ opacity: 0 }} animate={{ opacity: 0.28 }} transition={{ duration: 0.5, delay: 1.6 }} />

      {/* Precise node placements */}
      {[45, 135, 225, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 250 + 34 * Math.cos(rad);
        const cy = 240 + 34 * Math.sin(rad);
        return (
          <motion.circle key={`top-${i}`} cx={cx} cy={cy} r="3.3"
            fill="#8B95A0" opacity="0.5"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ duration: 0.35, delay: 1.7 + i * 0.06 }} />
        );
      })}

      {/* Zone 3 labels — LEFT offset, spatially avoids outer circle (left edge at x=180) */}
      <motion.text
        x="18" y="235"
        className="fill-steel text-[11px] font-semibold"
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
        initial={{ opacity: 0 }} animate={{ opacity: 0.65 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        Cognitive Closed-loop
      </motion.text>
      <motion.text
        x="18" y="253"
        className="fill-steel text-[11px] font-semibold"
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
        initial={{ opacity: 0 }} animate={{ opacity: 0.65 }}
        transition={{ duration: 0.6, delay: 1.85 }}
      >
        &amp; Scalable Execution
      </motion.text>

      {/* Leader lines Z3: text right-edge → circle left-anchor */}
      <motion.line
        x1="178" y1="236" x2="216" y2="240"
        stroke="#8B95A0" strokeWidth="0.5" opacity="0.22"
        initial={{ opacity: 0 }} animate={{ opacity: 0.22 }}
        transition={{ duration: 0.5, delay: 1.9 }}
      />
      <motion.line
        x1="170" y1="250" x2="216" y2="248"
        stroke="#8B95A0" strokeWidth="0.5" opacity="0.22"
        initial={{ opacity: 0 }} animate={{ opacity: 0.22 }}
        transition={{ duration: 0.5, delay: 1.92 }}
      />

      {/* ===== Spiral thread — winds from bottom chaos to top order ===== */}
      <motion.path
        d="M 250 510
           C 240 495, 220 480, 225 460
           C 230 440, 260 445, 265 420
           C 270 395, 230 390, 235 365
           C 240 340, 270 335, 265 310
           C 260 285, 230 280, 240 258
           C 250 236, 265 245, 250 240"
        stroke="#C5A059" strokeWidth="1.1" fill="none" opacity="0.7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, delay: 2.6, ease: "easeInOut" }}
      />

      {/* ===== Hot Core — pulsing gold center ===== */}
      <motion.circle cx="250" cy="240" r="6.5"
        fill="#C5A059"
        animate={{ r: [6.5, 9.5, 6.5], opacity: [0.85, 0.35, 0.85] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />

      {/* Small satellite dots scattered */}
      {[
        { cx: 155, cy: 530 }, { cx: 340, cy: 520 }, { cx: 165, cy: 460 },
        { cx: 335, cy: 455 }, { cx: 175, cy: 395 }, { cx: 325, cy: 385 },
        { cx: 185, cy: 305 }, { cx: 315, cy: 300 }, { cx: 200, cy: 270 },
        { cx: 300, cy: 268 },
      ].map((dot, i) => (
        <motion.circle key={`sat-${i}`} cx={dot.cx} cy={dot.cy} r="1.5"
          fill="#8B95A0"
          initial={{ opacity: 0 }} animate={{ opacity: 0.3 }}
          transition={{ duration: 0.35, delay: 2.8 + i * 0.04 }} />
      ))}
    </motion.svg>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-20 pb-16 bg-bg"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1
            className="font-heading font-bold text-primary leading-tight tracking-wide"
            style={{ fontSize: "clamp(3.25rem, 7.15vw, 6.5rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block">{heroData.headlineLine1}</span>
            <motion.span
              className="block text-steel italic font-light"
              style={{ fontSize: "clamp(2.34rem, 4.94vw, 4.16rem)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {heroData.headlineLine2}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-steel text-lg lg:text-xl font-light italic leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {heroData.subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <a
              href={heroData.ctaPrimary.href}
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent-warm text-white font-medium rounded-lg hover:bg-accent-warm/85 transition-all shadow-sm hover:shadow-md w-fit text-base"
            >
              {heroData.ctaPrimary.label}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href={heroData.ctaSecondary.href}
              className="inline-flex items-center px-8 py-3.5 border border-accent text-accent font-medium rounded-lg hover:bg-accent hover:text-white transition-all w-fit text-base"
            >
              {heroData.ctaSecondary.label}
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Upward Spiral Visual */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <SpiralVisual />
        </motion.div>
      </div>
    </section>
  );
}
