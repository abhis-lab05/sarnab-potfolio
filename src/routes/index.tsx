import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroPortrait from "@/assets/sarnab-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarnab Das — Performance Marketer Driving Measurable Growth" },
      { name: "description", content: "4.5+ years scaling brands in edtech, real estate, e-commerce and D2C through paid media, SEO/SEM, CRO and analytics." },
      { property: "og:title", content: "Sarnab Das — Performance Marketer" },
      { property: "og:description", content: "Driving compound growth across edtech, real estate, e-commerce and D2C." },
    ],
  }),
  component: Home,
});

type Stat = {
  prefix?: string;
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 4.5, decimals: 1, suffix: "+", label: "Years in performance" },
  { prefix: "₹", value: 40, suffix: "Cr+", label: "Ad spend managed" },
  { value: 6, suffix: "+", label: "Industries served" },
  { value: 12, suffix: "+", label: "Brands scaled" },
];

function useCountUp(target: number, decimals: number, start: boolean, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return v.toFixed(decimals);
}

function StatCard({ stat, start }: { stat: Stat; start: boolean }) {
  const display = useCountUp(stat.value, stat.decimals ?? 0, start);
  return (
    <div className="bg-card p-8 lg:p-12">
      <div className="font-display text-5xl lg:text-7xl font-black text-gradient tabular-nums">
        {stat.prefix}{display}{stat.suffix}
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
}


const industries = ["Edtech", "Real Estate", "E-commerce", "D2C", "SaaS", "Fintech"];

function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStatsVisible(true),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden grain">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-40 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for new engagements · Q2 2026
            </div>
            <h1 className="mt-6 text-6xl md:text-7xl lg:text-[8rem]">
              Performance,<br />
              <span className="italic font-light text-muted-foreground">measured in </span>
              <span className="text-gradient">outcomes.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-medium">Sarnab Das</span> — a performance marketer with 4.5+ years architecting growth for brands in edtech, real estate, e-commerce and D2C. Data-driven, channel-agnostic, ROAS-obsessed.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform glow">
                See the work →
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border hover:bg-secondary transition-colors font-semibold">
                Start a project
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/5] bg-card">
              <img
                src={heroPortrait}
                alt="Sarnab Das, performance marketer"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-background/60 border border-border rounded-xl p-4">
                <div className="font-mono text-xs text-muted-foreground">CURRENTLY</div>
                <div className="text-sm mt-1">Scaling D2C brands · Optimizing paid funnels · Writing on growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border overflow-hidden bg-surface">
        <div className="flex marquee whitespace-nowrap py-6">
          {[...industries, ...industries, ...industries].map((i, idx) => (
            <div key={idx} className="flex items-center gap-12 px-12 font-display text-3xl md:text-5xl text-muted-foreground/40">
              <span>{i}</span>
              <span className="text-primary">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">By the numbers</div>
            <h2 className="text-5xl md:text-6xl">
              Strategy is opinion.<br/>
              <span className="italic font-light">Performance is</span> proof.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every campaign starts with a hypothesis and ends with a number. I don't chase vanity metrics — I build systems where every rupee is accountable to revenue.
          </p>
        </div>
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} start={statsVisible} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-card p-12 lg:p-20 text-center grain">
          <div className="absolute inset-0 -z-0 opacity-50" style={{ background: "var(--gradient-glow)" }} />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl">Have a number<br/>that needs <span className="text-gradient italic">moving?</span></h2>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:scale-105 transition-transform glow">
              Let's talk growth →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
