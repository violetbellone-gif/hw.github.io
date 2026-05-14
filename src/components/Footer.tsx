import { Mail } from "lucide-react";
import { siteConfig } from "../data/siteData";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 bg-bg">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <p className="text-muted text-base">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Open to global opportunities in project execution and localization.
        </p>
      </div>
    </footer>
  );
}
