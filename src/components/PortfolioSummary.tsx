import { useEffect, useRef, useState } from "react";

type Card = {
  prefix?: string;
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  caption: string;
};

const cards: Card[] = [
  {
    value: 4.5,
    suffix: "+",
    decimals: 1,
    label: "Years of experience",
    caption: "Building performance engines across high-velocity startups & agencies.",
  },
  {
    value: 12,
    suffix: "+",
    label: "Industries served",
    caption: "Edtech · Real Estate · E-commerce · D2C · SaaS · Fintech and more.",
  },
  {
    prefix: "₹",
    value: 40,
    suffix: "Cr+",
    label: "Ad budget managed",
    caption: "Optimised across Meta, Google, YouTube and programmatic channels.",
  },
];

function useCountUp(target: number, decimals = 0, duration = 1600, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value.toFixed(decimals);
}

function Counter({ card }: { card: Card }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const display = useCountUp(card.value, card.decimals ?? 0, 1600, visible);
  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 lg:p-10 transition-colors hover:border-primary/40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative z-10">
        <div className="font-mono text-[11px] uppercase tracking-widest text-primary mb-6">
          {card.label}
        </div>
        <div className="font-display text-6xl lg:text-7xl font-black leading-none tabular-nums">
          {card.prefix}
          <span className="text-gradient">{display}</span>
          {card.suffix}
        </div>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{card.caption}</p>
      </div>
    </div>
  );
}

export function PortfolioSummary() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <Counter key={c.label} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
