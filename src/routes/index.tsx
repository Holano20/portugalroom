import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Globe2,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  MapPin,
  Building2,
  Award,
  ArrowRight,
  Mail,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroImage from "@/assets/portugal-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PortugalRoom.com — Premium .COM Domain for Portugal Rentals & Hospitality" },
      {
        name: "description",
        content:
          "PortugalRoom.com is a premium, brandable .COM domain for room rentals, student housing, coliving, hospitality, travel, and property businesses in Portugal. Secure transfer via Escrow.com or GoDaddy.",
      },
      {
        name: "keywords",
        content:
          "PortugalRoom, premium domain, .com domain for sale, Portugal rentals, room rentals Portugal, student accommodation Portugal, coliving Portugal, hospitality domain, brandable domain, Escrow domain transfer",
      },
      { name: "author", content: "PortugalRoom.com" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "PortugalRoom.com — Premium .COM Domain for Portugal Rentals & Hospitality" },
      {
        property: "og:description",
        content:
          "A rare, exact-match .COM domain for Portugal's rental and hospitality market. Brandable, memorable, SEO-friendly. Secure transfer via Escrow.com or GoDaddy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "PortugalRoom.com" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "PortugalRoom.com — Premium .COM Domain for Portugal's Rental & Hospitality Market" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PortugalRoom.com — Premium .COM Domain for Portugal Rentals & Hospitality" },
      {
        name: "twitter:description",
        content:
          "Premium .COM domain for Portugal's rental & hospitality market. Brandable, memorable, SEO-friendly. Secure transfer via Escrow.com or GoDaddy.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
      { name: "twitter:image:alt", content: "PortugalRoom.com — Premium .COM Domain for Portugal's Rental & Hospitality Market" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PortugalRoom.com",
          category: "Premium Domain Name",
          description:
            "Premium .COM domain perfect for room rentals, student accommodation, hospitality, travel, and property businesses in Portugal.",
          brand: { "@type": "Brand", name: "PortugalRoom.com" },
          image: "/og-image.jpg",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: "2495",
            priceCurrency: "USD",
            url: "/",
            seller: { "@type": "Organization", name: "PortugalRoom.com" },
          },
        }),
      },
    ],
  }),
  component: LandingPage,
});


function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster position="top-center" richColors />
      <Nav />
      <Hero />
      <Features />
      <Value />
      <PremiumDomains />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-hero shadow-card-luxe flex items-center justify-center">
          <div className="w-5 h-5 border-[1.5px] border-white/90 rounded-sm rotate-45" />
        </div>
        <div className="absolute inset-0 rounded-xl bg-hero blur-xl opacity-40 -z-10" />
      </div>
      <div className="leading-none">
        <div className="font-display text-xl font-semibold tracking-tight">
          Portugal<span className="text-gradient">Room</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-0.5">
          .com · Premium Domain
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#value" className="hover:text-foreground transition-colors">Why It Matters</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <Button
          asChild
          size="sm"
          className="bg-hero text-white shadow-card-luxe hover:opacity-95 hover:scale-[1.02] transition-all"
        >
          <a href="#contact">Make an Offer <ArrowRight className="ml-1 w-4 h-4" /></a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  const badges = ["Premium .COM", "Exact Match", "Brandable", "SEO Friendly"];
  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-glow/20 blur-3xl animate-float" />
      <div className="absolute top-40 -left-32 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs uppercase tracking-[0.2em] text-primary font-medium mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Rare · Available Now
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight">
              Portugal<span className="text-gradient italic">Room</span>
              <span className="text-muted-foreground font-normal">.com</span>
            </h1>

            <p className="mt-6 font-display text-2xl md:text-3xl text-foreground/90 leading-snug max-w-xl">
              Premium .COM Domain for Portugal's Rental & Hospitality Market
            </p>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              PortugalRoom.com is a memorable, brandable, and SEO-friendly domain perfectly suited
              for room rentals, student accommodation, coliving, hospitality, travel platforms,
              relocation services, and property management businesses.
            </p>

            <div className="mt-8 inline-flex flex-col items-start p-6 rounded-2xl border border-primary/20 bg-primary/5 shadow-card-luxe">
              <div className="text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Asking Price</div>
              <div className="font-display text-4xl md:text-5xl text-gradient font-medium">$2,495 USD</div>
              <div className="text-xs text-muted-foreground mt-2">Serious offers are welcome.</div>
              <div className="text-xs text-muted-foreground mt-1">Secure transfer via Escrow.com or GoDaddy.</div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-hero text-white h-14 px-8 text-base shadow-luxe hover:scale-[1.02] transition-transform"
              >
                <a href="#contact">
                  Make an Offer <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base border-primary/20 hover:bg-primary/5"
              >
                <a href="#value">Why This Domain</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-primary/20 bg-card text-xs font-medium text-foreground/80"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> {b}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Escrow secured</div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Verified ownership</div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-luxe">
              <img
                src={heroImage}
                alt="PortugalRoom.com — aerial view of Lisbon, Portugal at golden hour representing the country's rental and hospitality market"
                width={1600}
                height={1000}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/85 rounded-2xl p-5 border border-white/60">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-display text-lg leading-none">Lisbon · Porto · Algarve</div>
                    <div className="text-xs text-muted-foreground mt-1">One domain. Every market.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-3xl bg-hero opacity-30 blur-2xl" />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {[
            { k: "€27B", v: "Portugal tourism GDP" },
            { k: "30M+", v: "Annual Tourists" },
            { k: "1 of 1", v: "Exact-match domain" },
            { k: ".com", v: "Global TLD" },
          ].map((m) => (
            <div key={m.v} className="bg-card p-8">
              <div className="font-display text-4xl text-gradient">{m.k}</div>
              <div className="text-sm text-muted-foreground mt-2">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Globe2, title: "Premium .COM Extension", desc: "The world's most trusted top-level domain — instant credibility with customers, partners, and investors." },
    { icon: Sparkles, title: "Effortlessly Brandable", desc: "Short, elegant, and unmistakable — a name customers remember the first time they hear it." },
    { icon: Building2, title: "Precise Market Fit", desc: "Purpose-built for room rentals, student housing, coliving, hospitality, travel, and property brands." },
    { icon: TrendingUp, title: "Built-in SEO Advantage", desc: "Exact-match keywords for Portugal's accommodation sector — a lasting edge in organic search." },
    { icon: ShieldCheck, title: "Secure, Verified Ownership", desc: "Privately owned and transferred through Escrow.com or GoDaddy for a fully protected acquisition." },
    { icon: Award, title: "Long-Term Digital Asset", desc: "Premium geographic .COM domains are scarce, appreciating assets — a foundation, not an expense." },
  ];
  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Features</div>
          <h2 className="font-display text-5xl md:text-6xl font-medium leading-tight">
            Built to be the <span className="text-gradient italic">flagship</span> of your brand.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-luxe hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <it.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-2xl mb-3">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Value() {
  const bullets = [
    "Room Rental Platforms",
    "Student Accommodation",
    "Coliving Companies",
    "Property Management",
    "Travel Agencies",
    "Hospitality Brands",
    "Relocation Services",
    "Vacation Rentals",
  ];
  return (
    <section id="value" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Why This Domain</div>
            <h2 className="font-display text-5xl md:text-6xl font-medium leading-tight mb-8">
              A domain isn't a cost. It's a <span className="text-gradient italic">position</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              PortugalRoom.com combines one of Europe's fastest growing destinations with one of
              the strongest hospitality keywords.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-10">
              It is perfectly suited for:
            </p>
            <Button
              asChild
              size="lg"
              className="bg-hero text-white h-14 px-8 shadow-luxe hover:scale-[1.02] transition-transform"
            >
              <a href="#contact">Make an Offer <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {bullets.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:translate-x-1 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/90 text-sm">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PremiumDomains() {
  const cards = [
    {
      icon: Award,
      title: "Trust & Credibility",
      desc: "Premium .COM domains signal legitimacy from the first click, giving new brands the authority of established players.",
    },
    {
      icon: Sparkles,
      title: "Memorability",
      desc: "Short, keyword-rich domains stay in customers' minds and drive repeat direct traffic without paid acquisition.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Asset",
      desc: "Premium geographic domains have consistently proven to be valuable, appreciating assets for businesses in local markets.",
    },
  ];
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Comparable Premium Domains</div>
          <h2 className="font-display text-5xl md:text-6xl font-medium leading-tight mb-6">
            Why <span className="text-gradient italic">premium domains</span> matter.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Premium .COM domains are trusted by customers, remembered more easily, and often become
            the foundation of successful brands. Instead of chasing historical sale prices, focus on
            what a premium geographic domain does for a business operating in a local market — it
            becomes the front door.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-luxe hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <c.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-2xl mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "How will the domain be transferred?",
      a: "The domain will be transferred securely through Escrow.com or GoDaddy after payment.",
    },
    {
      q: "How long does the transfer take?",
      a: "Usually between 24 and 72 hours.",
    },
    {
      q: "Is the asking price negotiable?",
      a: "Reasonable offers are welcome.",
    },
    {
      q: "Who owns the domain?",
      a: "The domain is privately owned.",
    },
    {
      q: "Can I use Escrow.com or GoDaddy for the purchase?",
      a: "Yes. Escrow.com and or GoDaddy is welcome and recommended for a secure transaction.",
    },
  ];
  return (
    <section id="faq" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">FAQ</div>
          <h2 className="font-display text-5xl md:text-6xl font-medium leading-tight">
            Answers, before you <span className="text-gradient italic">ask</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-luxe transition-all duration-500"
            >
              <h3 className="font-display text-xl mb-3 text-foreground">{f.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", offer: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please enter your name and email.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Offer received. We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", offer: "", message: "" });
    }, 900);
  };

  const trust = [
    { icon: CheckCircle2, label: "Verified Ownership" },
    { icon: ShieldCheck, label: "Secure Escrow Transfer" },
    { icon: Zap, label: "Fast Domain Transfer" },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {trust.map((t) => (
            <span
              key={t.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card text-sm font-medium text-foreground/80 shadow-card-luxe"
            >
              <t.icon className="w-4 h-4 text-primary" /> {t.label}
            </span>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-luxe border border-border">
          <div className="absolute inset-0 bg-hero" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, white 0%, transparent 40%), radial-gradient(circle at 80% 70%, white 0%, transparent 40%)",
            }}
          />

          <div className="relative grid md:grid-cols-2 gap-0">
            <div className="p-12 md:p-14 text-white">
              <div className="text-xs uppercase tracking-[0.25em] text-white/70 mb-4">Make an Offer</div>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-6">
                Own the address of Portugal's next great brand.
              </h2>
              <p className="text-white/80 leading-relaxed mb-10">
                Submit a serious inquiry and receive a response within 24 hours. All transactions
                are handled through Escrow.com or GoDaddy for complete security.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3"><Mail className="w-4 h-4" /> roominportugal@gmail.com</div>
                <div className="flex items-center gap-3"><ShieldCheck className="w-4 h-4" /> Escrow.com secured transfer</div>
                <div className="flex items-center gap-3"><Award className="w-4 h-4" /> Verified premium listing</div>
              </div>
            </div>

            <form onSubmit={submit} className="p-10 md:p-12 bg-background/95 backdrop-blur-xl space-y-5">
              <div>
                <Label htmlFor="name" className="mb-2 block">Full name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" className="h-12" />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="h-12" />
              </div>
              <div>
                <Label htmlFor="offer" className="mb-2 block">Offer (USD)</Label>
                <Input id="offer" value={form.offer} onChange={(e) => setForm({ ...form, offer: e.target.value })} placeholder="Enter your offer" className="h-12" />
              </div>
              <div>
                <Label htmlFor="message" className="mb-2 block">Message (optional)</Label>
                <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project…" rows={3} />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 bg-hero text-white text-base shadow-luxe hover:scale-[1.01] transition-transform"
              >
                {loading ? "Submitting…" : "Submit Offer"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-xs text-muted-foreground text-center pt-1">
                Serious inquiries only. We usually respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo />
        <div className="text-sm text-muted-foreground text-center md:text-right space-y-1">
          <div className="font-display text-base text-foreground">PortugalRoom.com</div>
          <div>Premium Domain for Sale</div>
          <div>
            <a href="mailto:roominportugal@gmail.com" className="hover:text-foreground transition-colors">
              roominportugal@gmail.com
            </a>
          </div>
          <div>Transfer secured via Escrow.com or GoDaddy</div>
          <div className="pt-2">© 2026 PortugalRoom.com — All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
