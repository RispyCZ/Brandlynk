import { useState } from "react";
import { Check, Globe, QrCode, Shield, Target, MapPin, BarChart2, Zap } from "lucide-react";

export default function Landing() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-black flex items-center justify-center text-white font-bold">B</div>
            <span className="font-semibold">Brandlynk</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-black/80">Features</a>
            <a href="#pricing" className="hover:text-black/80">Pricing</a>
            <a href="#faq" className="hover:text-black/80">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a className="text-sm hover:opacity-80" href="#">Sign in</a>
            <a className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium bg-black text-white hover:bg-black/90 shadow-sm" href="#cta">Get started</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Branded short links with <span className="underline decoration-black/15">privacy‑first</span> analytics.
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Own your links, your domains, and your data. Smart geo/device redirects, custom QR codes, and GDPR‑friendly insights—without cookie banners.
            </p>

            <div id="cta" className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="you@company.com"
                className="w-full sm:w-80 rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <button className="rounded-2xl px-5 py-3 bg-black text-white font-medium hover:bg-black/90">
                Start free
              </button>
            </div>

            <p className="mt-3 text-sm text-gray-500">No credit card. EU‑hosted. Export anytime.</p>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/> GDPR‑friendly analytics</div>
              <div className="flex items-center gap-2"><Globe className="h-4 w-4"/> Custom domains</div>
              <div className="flex items-center gap-2"><QrCode className="h-4 w-4"/> QR codes</div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border shadow-sm p-4 bg-gradient-to-b from-gray-50 to-white">
              <div className="rounded-2xl border bg-white p-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"/>
                  <span className="font-medium">acme.to</span>
                  <span className="text-gray-400">/launch</span>
                </div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border p-3">
                    <div className="flex items-center gap-2 text-sm font-medium"><BarChart2 className="h-4 w-4"/> Clean analytics</div>
                    <p className="mt-2 text-sm text-gray-600">Unique clicks, referrers, UTM, country/device — no cookies, no fingerprints.</p>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="flex items-center gap-2 text-sm font-medium"><MapPin className="h-4 w-4"/> Smart routing</div>
                    <p className="mt-2 text-sm text-gray-600">Send EU to .eu, US to .com, or mobile to app store. Rules that respect privacy.</p>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="flex items-center gap-2 text-sm font-medium"><QrCode className="h-4 w-4"/> Custom QR</div>
                    <p className="mt-2 text-sm text-gray-600">On‑brand QR codes with logos & shapes. Export SVG/PNG.</p>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="flex items-center gap-2 text-sm font-medium"><Shield className="h-4 w-4"/> EU hosting</div>
                    <p className="mt-2 text-sm text-gray-600">Data residency options and easy exports for audits.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -bottom-6 rotate-6 hidden lg:block">
              <div className="rounded-2xl border bg-white shadow p-4 w-56">
                <div className="text-xs text-gray-500">Rule</div>
                <div className="mt-1 text-sm font-medium">If country = DE → /de</div>
                <div className="mt-2 text-xs text-gray-500">Fallback: /en</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-10 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-70">
          <Logo text="ACME"/>
          <Logo text="STUDIO"/>
          <Logo text="NIMBLE"/>
          <Logo text="FROG"/>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">Brand at scale. Privacy by default.</h2>
            <p className="mt-3 text-gray-600">Everything you need for links that look good and work smarter—without tracking people across the internet.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Feature icon={<Globe className="h-5 w-5"/>} title="Custom domains">
              Connect multiple domains and subdomains. Map campaigns per client or product.
            </Feature>
            <Feature icon={<BarChart2 className="h-5 w-5"/>} title="GDPR‑friendly analytics">
              Cookieless, aggregated metrics: unique clicks, referrers, top countries & devices.
            </Feature>
            <Feature icon={<QrCode className="h-5 w-5"/>} title="Custom QR codes">
              Branded QR with logos, colors, and shapes. One link powers print and digital.
            </Feature>
            <Feature icon={<MapPin className="h-5 w-5"/>} title="Geo & device rules">
              Route by country, region, or device. Fallbacks and per‑rule analytics.
            </Feature>
            <Feature icon={<Target className="h-5 w-5"/>} title="UTM & link params">
              Append, preserve, or sanitize UTMs. Team‑wide presets keep naming tidy.
            </Feature>
            <Feature icon={<Zap className="h-5 w-5"/>} title="Fast API & bulk tools">
              Import/export, CSV bulk create, and a clean REST API for devs.
            </Feature>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">Simple pricing</h2>
            <p className="mt-3 text-gray-600">Start free. Upgrade when you need more domains or advanced routing.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Plan
              name="Free"
              price="€0"
              tagline="Kick the tires"
              cta="Start free"
              features={[
                "1 custom domain",
                "250 redirects / month",
                "GDPR‑friendly analytics",
                "Basic QR codes",
                "Link expiration & notes",
              ]}
            />

            <Plan
              highlighted
              name="Pro"
              price="€5/mo"
              tagline="For makers & teams"
              cta="Upgrade to Pro"
              features={[
                "Up to 50 domains",
                "10,000 redirects / month",
                "Geo & device rules",
                "Custom QR styles (SVG/PNG)",
                "API access & CSV import",
                "Custom 404 & link pages",
              ]}
            />

            <Plan
              name="Business"
              price="€20/mo"
              tagline="Unlimited at a fair price"
              cta="Get Business"
              features={[
                "Unlimited domains",
                "Unlimited redirects*",
                "SLA & priority support",
                "Seats & roles (5 included)",
                "SSO (SAML/OIDC) add‑on",
                "Audit exports & webhooks",
              ]}
              footnote="* Fair‑use policy applies to protect platform stability."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 border-t">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold">FAQ</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Faq q="What makes your analytics GDPR‑friendly?" a="We store only aggregated, event‑level metrics—no cookies, no cross‑site IDs, no device fingerprinting. You can fully export or delete your data anytime."/>
            <Faq q="How do geo/device rules work?" a="Create routing rules per link or at the domain level. Target by country/region or device type (mobile/desktop). Each rule has a fallback URL."/>
            <Faq q="Can I bring my own domain?" a="Yes. Connect any number of domains on paid plans. We provide DNS setup guides and automatic HTTPS."/>
            <Faq q="Is there an API?" a="Yes. The Pro plan includes a clean REST API, API keys, rate‑limits that scale, and CSV bulk tools."/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-black text-white font-bold flex items-center justify-center">B</div>
            <span>Brandlynk</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="font-medium text-gray-800">Product</div>
              <ul className="mt-2 space-y-1">
                <li><a href="#features" className="hover:underline">Features</a></li>
                <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-gray-800">Legal</div>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
                <li><a href="#" className="hover:underline">DPA</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-gray-800">Company</div>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Status</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-gray-800">EU</div>
              <ul className="mt-2 space-y-1">
                <li>EU‑hosted</li>
                <li>GDPR‑friendly</li>
              </ul>
            </div>
          </div>
          <div className="text-xs text-gray-400">© {new Date().getFullYear()} Brandlynk</div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-5">
      <div className="flex items-center gap-2 text-sm font-semibold">{icon} {title}</div>
      <p className="mt-2 text-sm text-gray-600">{children}</p>
    </div>
  );
}

function Plan({ name, price, tagline, features, cta, highlighted, footnote }: {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  footnote?: string;
}) {
  return (
    <div className={`rounded-3xl border p-6 flex flex-col ${highlighted ? "shadow-lg ring-1 ring-black/5" : ""}`}>
      <div className="text-sm text-gray-500">{name}</div>
      <div className="mt-1 text-3xl font-bold">{price}</div>
      <div className="mt-1 text-sm text-gray-600">{tagline}</div>
      <ul className="mt-5 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="h-4 w-4 mt-0.5"/>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#cta" className={`mt-6 inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium ${highlighted ? "bg-black text-white hover:bg-black/90" : "border hover:bg-gray-50"}`}>
        {cta}
      </a>
      {footnote && <p className="mt-3 text-xs text-gray-500">{footnote}</p>}
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border p-5">
      <div className="font-medium">{q}</div>
      <p className="mt-2 text-sm text-gray-600">{a}</p>
    </div>
  );
}

function Logo({ text }: { text: string }) {
  return (
    <div className="h-10 flex items-center justify-center rounded-lg border bg-white text-xs tracking-widest font-semibold text-gray-400">
      {text}
    </div>
  );
}
