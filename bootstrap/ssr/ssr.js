import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Shield, Globe, QrCode, BarChart2, MapPin, Target, Zap, Check } from "lucide-react";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
function Landing() {
  const [email, setEmail] = useState("");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white text-gray-900", children: [
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-xl bg-black flex items-center justify-center text-white font-bold", children: "B" }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Brandlynk" })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-6 text-sm", children: [
        /* @__PURE__ */ jsx("a", { href: "#features", className: "hover:text-black/80", children: "Features" }),
        /* @__PURE__ */ jsx("a", { href: "#pricing", className: "hover:text-black/80", children: "Pricing" }),
        /* @__PURE__ */ jsx("a", { href: "#faq", className: "hover:text-black/80", children: "FAQ" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("a", { className: "text-sm hover:opacity-80", href: "#", children: "Sign in" }),
        /* @__PURE__ */ jsx("a", { className: "inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium bg-black text-white hover:bg-black/90 shadow-sm", href: "#cta", children: "Get started" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl font-bold leading-tight", children: [
          "Branded short links with ",
          /* @__PURE__ */ jsx("span", { className: "underline decoration-black/15", children: "privacy‑first" }),
          " analytics."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-gray-600", children: "Own your links, your domains, and your data. Smart geo/device redirects, custom QR codes, and GDPR‑friendly insights—without cookie banners." }),
        /* @__PURE__ */ jsxs("div", { id: "cta", className: "mt-8 flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              value: email,
              onChange: (e) => setEmail(e.target.value),
              type: "email",
              placeholder: "you@company.com",
              className: "w-full sm:w-80 rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20"
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "rounded-2xl px-5 py-3 bg-black text-white font-medium hover:bg-black/90", children: "Start free" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-gray-500", children: "No credit card. EU‑hosted. Export anytime." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-6 text-sm text-gray-500", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
            " GDPR‑friendly analytics"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
            " Custom domains"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(QrCode, { className: "h-4 w-4" }),
            " QR codes"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-3xl border shadow-sm p-4 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border bg-white p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-green-500" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "acme.to" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "/launch" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border p-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
                /* @__PURE__ */ jsx(BarChart2, { className: "h-4 w-4" }),
                " Clean analytics"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-600", children: "Unique clicks, referrers, UTM, country/device — no cookies, no fingerprints." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border p-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
                " Smart routing"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-600", children: "Send EU to .eu, US to .com, or mobile to app store. Rules that respect privacy." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border p-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
                /* @__PURE__ */ jsx(QrCode, { className: "h-4 w-4" }),
                " Custom QR"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-600", children: "On‑brand QR codes with logos & shapes. Export SVG/PNG." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border p-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
                " EU hosting"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-600", children: "Data residency options and easy exports for audits." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute -right-6 -bottom-6 rotate-6 hidden lg:block", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border bg-white shadow p-4 w-56", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Rule" }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm font-medium", children: "If country = DE → /de" }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs text-gray-500", children: "Fallback: /en" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-10 border-t", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-70", children: [
      /* @__PURE__ */ jsx(Logo, { text: "ACME" }),
      /* @__PURE__ */ jsx(Logo, { text: "STUDIO" }),
      /* @__PURE__ */ jsx(Logo, { text: "NIMBLE" }),
      /* @__PURE__ */ jsx(Logo, { text: "FROG" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "features", className: "py-20 border-t", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Brand at scale. Privacy by default." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-gray-600", children: "Everything you need for links that look good and work smarter—without tracking people across the internet." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsx(Feature, { icon: /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5" }), title: "Custom domains", children: "Connect multiple domains and subdomains. Map campaigns per client or product." }),
        /* @__PURE__ */ jsx(Feature, { icon: /* @__PURE__ */ jsx(BarChart2, { className: "h-5 w-5" }), title: "GDPR‑friendly analytics", children: "Cookieless, aggregated metrics: unique clicks, referrers, top countries & devices." }),
        /* @__PURE__ */ jsx(Feature, { icon: /* @__PURE__ */ jsx(QrCode, { className: "h-5 w-5" }), title: "Custom QR codes", children: "Branded QR with logos, colors, and shapes. One link powers print and digital." }),
        /* @__PURE__ */ jsx(Feature, { icon: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }), title: "Geo & device rules", children: "Route by country, region, or device. Fallbacks and per‑rule analytics." }),
        /* @__PURE__ */ jsx(Feature, { icon: /* @__PURE__ */ jsx(Target, { className: "h-5 w-5" }), title: "UTM & link params", children: "Append, preserve, or sanitize UTMs. Team‑wide presets keep naming tidy." }),
        /* @__PURE__ */ jsx(Feature, { icon: /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5" }), title: "Fast API & bulk tools", children: "Import/export, CSV bulk create, and a clean REST API for devs." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "pricing", className: "py-20 border-t", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Simple pricing" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-gray-600", children: "Start free. Upgrade when you need more domains or advanced routing." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsx(
          Plan,
          {
            name: "Free",
            price: "€0",
            tagline: "Kick the tires",
            cta: "Start free",
            features: [
              "1 custom domain",
              "250 redirects / month",
              "GDPR‑friendly analytics",
              "Basic QR codes",
              "Link expiration & notes"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Plan,
          {
            highlighted: true,
            name: "Pro",
            price: "€5/mo",
            tagline: "For makers & teams",
            cta: "Upgrade to Pro",
            features: [
              "Up to 50 domains",
              "10,000 redirects / month",
              "Geo & device rules",
              "Custom QR styles (SVG/PNG)",
              "API access & CSV import",
              "Custom 404 & link pages"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Plan,
          {
            name: "Business",
            price: "€20/mo",
            tagline: "Unlimited at a fair price",
            cta: "Get Business",
            features: [
              "Unlimited domains",
              "Unlimited redirects*",
              "SLA & priority support",
              "Seats & roles (5 included)",
              "SSO (SAML/OIDC) add‑on",
              "Audit exports & webhooks"
            ],
            footnote: "* Fair‑use policy applies to protect platform stability."
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "faq", className: "py-20 border-t", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold", children: "FAQ" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsx(Faq, { q: "What makes your analytics GDPR‑friendly?", a: "We store only aggregated, event‑level metrics—no cookies, no cross‑site IDs, no device fingerprinting. You can fully export or delete your data anytime." }),
        /* @__PURE__ */ jsx(Faq, { q: "How do geo/device rules work?", a: "Create routing rules per link or at the domain level. Target by country/region or device type (mobile/desktop). Each rule has a fallback URL." }),
        /* @__PURE__ */ jsx(Faq, { q: "Can I bring my own domain?", a: "Yes. Connect any number of domains on paid plans. We provide DNS setup guides and automatic HTTPS." }),
        /* @__PURE__ */ jsx(Faq, { q: "Is there an API?", a: "Yes. The Pro plan includes a clean REST API, API keys, rate‑limits that scale, and CSV bulk tools." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "border-t", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center md:items-start justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-xl bg-black text-white font-bold flex items-center justify-center", children: "B" }),
        /* @__PURE__ */ jsx("span", { children: "Brandlynk" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-800", children: "Product" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#features", className: "hover:underline", children: "Features" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#pricing", className: "hover:underline", children: "Pricing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faq", className: "hover:underline", children: "FAQ" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-800", children: "Legal" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Privacy" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Terms" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "DPA" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-800", children: "Company" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Contact" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:underline", children: "Status" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-800", children: "EU" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1", children: [
            /* @__PURE__ */ jsx("li", { children: "EU‑hosted" }),
            /* @__PURE__ */ jsx("li", { children: "GDPR‑friendly" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-400", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Brandlynk"
      ] })
    ] }) })
  ] });
}
function Feature({ icon, title, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
      icon,
      " ",
      title
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-600", children })
  ] });
}
function Plan({ name, price, tagline, features, cta, highlighted, footnote }) {
  return /* @__PURE__ */ jsxs("div", { className: `rounded-3xl border p-6 flex flex-col ${highlighted ? "shadow-lg ring-1 ring-black/5" : ""}`, children: [
    /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: name }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 text-3xl font-bold", children: price }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-gray-600", children: tagline }),
    /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2 text-sm", children: features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 mt-0.5" }),
      /* @__PURE__ */ jsx("span", { children: f })
    ] }, f)) }),
    /* @__PURE__ */ jsx("a", { href: "#cta", className: `mt-6 inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium ${highlighted ? "bg-black text-white hover:bg-black/90" : "border hover:bg-gray-50"}`, children: cta }),
    footnote && /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-gray-500", children: footnote })
  ] });
}
function Faq({ q, a }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border p-5", children: [
    /* @__PURE__ */ jsx("div", { className: "font-medium", children: q }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-600", children: a })
  ] });
}
function Logo({ text }) {
  return /* @__PURE__ */ jsx("div", { className: "h-10 flex items-center justify-center rounded-lg border bg-white text-xs tracking-widest font-semibold text-gray-400", children: text });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Landing
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/home.tsx": __vite_glob_0_0 });
      return pages[`./Pages/${name}.tsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
