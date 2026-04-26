import { AnimatedCounter } from "./AnimatedCounter";

const cards = [
  {
    label: "Years driving performance",
    end: 4.5,
    decimals: 1,
    suffix: "+",
    note: "Hands-on across the full funnel",
  },
  {
    label: "Industries served",
    end: 6,
    suffix: "",
    note: "EdTech · Real Estate · D2C · E-com · SaaS · Fintech",
  },
  {
    label: "Ad budget managed",
    end: 40,
    prefix: "₹",
    suffix: "Cr+",
    note: "Across Meta, Google, programmatic & LinkedIn",
  },
  {
    label: "Average ROAS lift",
    end: 4,
    suffix: "×",
    note: "Measured pre vs post engagement",
  },
];

export function PortfolioSummary() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">At a glance</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {cards.map((c, i) => (
            <div
              key={c.label}
              className="bg-card p-6 lg:p-8 hover:bg-surface-elevated transition-colors animate-fade-in"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}
            >
              <div className="font-display font-black text-4xl lg:text-6xl text-gradient leading-none">
                <AnimatedCounter
                  end={c.end}
                  decimals={c.decimals ?? 0}
                  prefix={c.prefix}
                  suffix={c.suffix}
                />
              </div>
              <div className="mt-4 text-sm font-medium">{c.label}</div>
              <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
