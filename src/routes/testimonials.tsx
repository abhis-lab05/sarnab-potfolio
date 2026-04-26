import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Sarnab Das" },
      { name: "description", content: "What clients and collaborators say about working with Sarnab Das on performance marketing." },
      { property: "og:title", content: "Testimonials — Sarnab Das" },
      { property: "og:description", content: "Words from founders, marketers and clients." },
    ],
  }),
  component: Testimonials,
});

const quotes = [
  {
    text: "Sarnab's expertise in performance marketing helped us hit our quarterly goals weeks ahead of schedule. Analytical, creative — and never satisfied with last week's number.",
    author: "Priya Mehta",
    title: "Co-founder, EdTech Startup",
  },
  {
    text: "He doesn't just run ads. He rebuilt our attribution stack and helped us see which of our channels actually printed money. ROAS doubled in the quarter.",
    author: "Rahul Shah",
    title: "Head of Growth, D2C Brand",
  },
  {
    text: "One of the few marketers who can sit with engineering, finance and brand in the same meeting and leave with a roadmap everyone signs.",
    author: "Aditi Roy",
    title: "VP Marketing, Real Estate",
  },
  {
    text: "We went from praying for leads to forecasting them. That shift is the difference between a marketer and a partner.",
    author: "Karthik Iyer",
    title: "Founder, Personal Care DTC",
  },
];

function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Testimonials</div>
        <h1 className="text-6xl md:text-7xl">Kind words from<br/><span className="italic text-gradient">demanding people.</span></h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {quotes.map((q, i) => (
          <figure
            key={i}
            className={`relative rounded-3xl border border-border bg-card p-10 hover:border-primary/40 transition-colors ${i % 3 === 0 ? "md:translate-y-8" : ""}`}
          >
            <div className="font-display text-7xl text-primary leading-none mb-4">"</div>
            <blockquote className="text-xl leading-relaxed text-foreground/90">
              {q.text}
            </blockquote>
            <figcaption className="mt-8 pt-6 border-t border-border flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-primary-foreground" style={{ background: "var(--gradient-accent)" }}>
                {q.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{q.author}</div>
                <div className="text-sm text-muted-foreground">{q.title}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
