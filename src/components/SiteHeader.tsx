import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Work" },
  { to: "/testimonials", label: "Words" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-primary glow group-hover:scale-150 transition-transform" />
          <span className="font-display font-bold text-lg tracking-tight">Sarnab Das</span>
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-2.5 sm:px-4 py-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
              activeProps={{ className: "px-2.5 sm:px-4 py-2 text-xs sm:text-sm text-foreground rounded-full bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-transform"
        >
          Let's talk →
        </Link>
      </div>
    </header>
  );
}
