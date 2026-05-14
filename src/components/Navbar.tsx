import { siteConfig } from "../data/siteData";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-heading text-2xl font-semibold text-primary tracking-tight hover:text-accent transition-colors"
        >
          {siteConfig.name}
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-base font-medium text-muted hover:text-primary transition-colors">
            About
          </a>
          <a href="#philosophy" className="text-base font-medium text-muted hover:text-primary transition-colors">
            Philosophy
          </a>
          <a href="#journey" className="text-base font-medium text-muted hover:text-primary transition-colors">
            Journey
          </a>
          <a href="#experience" className="text-base font-medium text-muted hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#skills" className="text-base font-medium text-muted hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-base font-medium text-muted hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        {/* Mobile: simplified nav — just the logo links to sections via scroll, handled by anchor tags */}
      </div>
    </header>
  );
}
