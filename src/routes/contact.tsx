import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sarnab Das" },
      { name: "description", content: "Get in touch with Sarnab Das to discuss performance marketing engagements, consulting or collaborations." },
      { property: "og:title", content: "Contact Sarnab Das" },
      { property: "og:description", content: "Let's talk growth, paid media, and what to do with that quarterly target." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Contact</div>
          <h1 className="text-6xl md:text-7xl">Let's make<br/><span className="italic text-gradient">numbers move.</span></h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Whether it's a full-funnel rebuild, a paid media audit, or just a chat about your growth stack — I read every message.
          </p>
          <div className="mt-10 space-y-5">
            <a href="mailto:hello@sarnabdas.com" className="block group">
              <div className="font-mono text-xs text-muted-foreground">EMAIL</div>
              <div className="text-xl mt-1 group-hover:text-primary transition-colors">hello@sarnabdas.com</div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block group">
              <div className="font-mono text-xs text-muted-foreground">LINKEDIN</div>
              <div className="text-xl mt-1 group-hover:text-primary transition-colors">/in/sarnabdas ↗</div>
            </a>
            <div>
              <div className="font-mono text-xs text-muted-foreground">BASED IN</div>
              <div className="text-xl mt-1">Bengaluru · Working globally</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            {sent ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">✦</div>
                <h2 className="text-3xl mb-3">Message received.</h2>
                <p className="text-muted-foreground">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Subject" name="subject" required />
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-[1.02] transition-transform glow">
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
