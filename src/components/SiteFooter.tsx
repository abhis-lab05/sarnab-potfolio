import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="font-display text-3xl font-bold leading-none">Sarnab<br/>Das.</div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Performance marketer turning ad spend into compound growth across edtech, real estate, e-commerce and D2C.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigate</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Elsewhere</div>
          <ul className="space-y-2 text-sm">
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn ↗</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Twitter / X ↗</a></li>
            <li><a href="mailto:hello@sarnabdas.com" className="hover:text-primary transition-colors">hello@sarnabdas.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Sarnab Das. All rights reserved.</span>
          <span className="font-mono">Built with intent. Measured in outcomes.</span>
        </div>
      </div>
    </footer>
  );
}
