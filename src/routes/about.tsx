import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sarnab Das" },
      { name: "description", content: "The story, skills and philosophy behind Sarnab Das — a performance marketer obsessed with measurable growth." },
      { property: "og:title", content: "About Sarnab Das" },
      { property: "og:description", content: "Performance marketer with 4.5+ years across edtech, real estate, e-commerce and D2C." },
    ],
  }),
  component: About,
});

const skills = [
  { name: "Paid Media (Meta, Google, LinkedIn)", level: 95 },
  { name: "SEO & SEM", level: 88 },
  { name: "Conversion Rate Optimization", level: 92 },
  { name: "Marketing Analytics & Attribution", level: 90 },
  { name: "Email & Lifecycle Marketing", level: 80 },
  { name: "Creative Strategy & Testing", level: 85 },
];

const timeline = [
  { year: "2024 — Now", role: "Senior Performance Marketing Lead", company: "D2C & E-commerce brands", note: "Scaling DTC brands from 7 to 8-figure ARR through full-funnel paid media." },
  { year: "2022 — 2024", role: "Performance Marketing Manager", company: "Real Estate & EdTech", note: "Owned ₹15Cr+ in annual paid spend across Meta, Google and programmatic." },
  { year: "2020 — 2022", role: "Growth Marketer", company: "Early-stage startups", note: "Built measurement stacks and unlocked first profitable acquisition channels." },
];

function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="grid lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-4">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">About</div>
          <h1 className="text-6xl md:text-7xl">Hi, I'm <span className="italic font-light">Sarnab.</span></h1>
        </div>
        <div className="lg:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I've spent the last <span className="text-foreground font-medium">4.5 years</span> in the trenches of paid acquisition — bidding on auctions at 2 AM, debugging pixel events, and translating dashboards into business decisions.
          </p>
          <p>
            My playground spans <span className="text-foreground">edtech</span>, <span className="text-foreground">real estate</span>, <span className="text-foreground">e-commerce</span> and <span className="text-foreground">D2C</span>. The verticals are different. The principle isn't: <span className="text-primary italic">find the bottleneck, model it, beat it.</span>
          </p>
          <p>
            Outside of work I read systems thinking, brew too much coffee, and lose weekends to film photography.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl mb-12">Core <span className="text-gradient italic">competencies</span></h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="font-mono text-sm text-muted-foreground">{s.level}</span>
              </div>
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${s.level}%`, background: "var(--gradient-accent)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h2 className="text-4xl md:text-5xl mb-12">The <span className="italic">journey</span></h2>
        <div className="space-y-px bg-border border border-border rounded-2xl overflow-hidden">
          {timeline.map((t) => (
            <div key={t.year} className="bg-card p-8 grid md:grid-cols-12 gap-4 hover:bg-surface-elevated transition-colors">
              <div className="md:col-span-3 font-mono text-sm text-primary">{t.year}</div>
              <div className="md:col-span-4">
                <div className="font-display text-2xl font-bold">{t.role}</div>
                <div className="text-sm text-muted-foreground mt-1">{t.company}</div>
              </div>
              <p className="md:col-span-5 text-muted-foreground">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
