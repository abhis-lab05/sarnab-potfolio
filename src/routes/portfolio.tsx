import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Sarnab Das" },
      { name: "description", content: "Selected case studies in performance marketing across edtech, real estate, D2C and e-commerce." },
      { property: "og:title", content: "Portfolio — Sarnab Das" },
      { property: "og:description", content: "Real campaigns. Real numbers. Real outcomes." },
    ],
  }),
  component: Portfolio,
});

const cases = [
  {
    industry: "EdTech",
    title: "Scaling a learning platform from CAC-positive to category leader",
    client: "Confidential · K-12 EdTech",
    role: "Owned full-funnel paid media strategy across Meta, Google and YouTube. Rebuilt attribution model and creative testing framework.",
    results: [
      { metric: "Lead volume", value: "+312%" },
      { metric: "CAC reduction", value: "-46%" },
      { metric: "Trial-to-paid", value: "+2.1×" },
    ],
    accent: "from-primary/30 to-transparent",
  },
  {
    industry: "Real Estate",
    title: "Filling a luxury residential project before topping-out",
    client: "Tier-1 Mumbai developer",
    role: "Programmatic + Meta + Google for HNI lead-gen. Implemented offline conversion tracking from CRM to ad accounts.",
    results: [
      { metric: "Site visits booked", value: "1,400+" },
      { metric: "Cost per SQL", value: "-58%" },
      { metric: "Bookings", value: "₹84Cr GMV" },
    ],
    accent: "from-primary/20 to-transparent",
  },
  {
    industry: "D2C",
    title: "Taking a personal-care brand from ₹2Cr to ₹14Cr ARR",
    client: "DTC personal care",
    role: "Built creative engine producing 40+ ad variants/month, restructured account around problem-aware audiences, launched lifecycle flows.",
    results: [
      { metric: "Blended ROAS", value: "3.8×" },
      { metric: "MoM revenue", value: "+27%" },
      { metric: "Repeat rate", value: "+19pp" },
    ],
    accent: "from-primary/30 to-transparent",
  },
  {
    industry: "E-commerce",
    title: "Cross-border marketplace expansion into 3 new geographies",
    client: "Global fashion marketplace",
    role: "Geo-specific creative localization, performance max experiments and feed optimization at scale.",
    results: [
      { metric: "New-market revenue", value: "+520%" },
      { metric: "ROAS (Tier-1 SKUs)", value: "5.2×" },
      { metric: "Time to break-even", value: "6 weeks" },
    ],
    accent: "from-primary/20 to-transparent",
  },
];

function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
        <div className="lg:col-span-8">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Selected work · 2020 — 2025</div>
          <h1 className="text-6xl md:text-8xl">Case<br/><span className="italic font-light text-muted-foreground">studies that</span><br/><span className="text-gradient">shipped numbers.</span></h1>
        </div>
        <p className="lg:col-span-4 text-muted-foreground text-lg">
          Four engagements where the work moved the line. Names redacted under NDA — full decks available on request.
        </p>
      </div>

      <div className="space-y-8">
        {cases.map((c, i) => (
          <article
            key={c.title}
            className={`relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12 lg:p-16 group hover:border-primary/50 transition-all`}
          >
            <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${c.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="relative grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs px-3 py-1 rounded-full border border-primary/40 text-primary">{c.industry}</span>
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")} / 0{cases.length}</span>
                </div>
                <h2 className="text-3xl md:text-5xl mb-6">{c.title}</h2>
                <div className="text-sm text-muted-foreground mb-6">{c.client}</div>
                <p className="text-muted-foreground leading-relaxed max-w-xl">{c.role}</p>
              </div>
              <div className="lg:col-span-5">
                <div className="space-y-px bg-border rounded-xl overflow-hidden border border-border">
                  {c.results.map((r) => (
                    <div key={r.metric} className="bg-surface-elevated p-5 flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">{r.metric}</span>
                      <span className="font-display font-bold text-2xl text-gradient">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-muted-foreground mb-6">Want the long version with full decks and dashboards?</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform">
          Request full case studies →
        </Link>
      </div>
    </div>
  );
}
