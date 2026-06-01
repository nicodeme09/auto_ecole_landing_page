"use client";

import { useState } from "react";
import { Check, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    id: "essentiel",
    name: "Essentiel",
    tag: null,
    desc: "Pour démarrer avec une auto-école.",
    monthly: 15000,
    annual: 10000,
    annualTotal: 120000,
    cta: "Commencer l'essai gratuit",
    highlight: false,
    limits: "1 agence · 75 apprenants · 3 utilisateurs",
    features: [
      "Dossiers apprenants complets",
      "Paiements & quittances PDF",
      "Planning des leçons",
      "Suivi des examens",
      "Cohortes de formation",
      "Support par email",
    ],
    excluded: [
      "Espace apprenant en ligne",
      "Paiement FedaPay",
      "Relances automatiques",
      "Export Excel / PDF",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tag: "Le plus choisi",
    desc: "Pour automatiser et professionnaliser votre gestion.",
    monthly: 32000,
    annual: 22000,
    annualTotal: 264000,
    cta: "Commencer l'essai gratuit",
    highlight: true,
    limits: "3 agences · 300 apprenants · 10 utilisateurs",
    features: [
      "Tout du plan Essentiel",
      "Espace apprenant en ligne",
      "Paiement en ligne via FedaPay",
      "Relances automatiques d'impayés",
      "Export Excel & PDF",
      "Tableaux de bord avancés",
      "Support prioritaire (48h)",
    ],
    excluded: [],
  },
  {
    id: "multi",
    name: "Multi-sites",
    tag: null,
    desc: "Pour les groupes et franchises multi-agences.",
    monthly: 60000,
    annual: 42000,
    annualTotal: 504000,
    cta: "Nous contacter",
    highlight: false,
    limits: "Agences · apprenants · utilisateurs illimités",
    features: [
      "Tout du plan Pro",
      "Agences illimitées",
      "Utilisateurs illimités",
      "Apprenants illimités",
      "Rapports consolidés multi-sites",
      "Accès API",
      "Gestionnaire de compte dédié",
    ],
    excluded: [],
  },
];

function fmt(n: number) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Tarifs
          </span>
          <h2 className="text-4xl font-black text-white tracking-tight mb-4">
            Simple et{" "}
            <span className="text-gradient">sans surprise</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            14 jours d&apos;essai gratuit sur tous les plans — sans carte bancaire.
          </p>

          {/* Toggle mensuel / annuel */}
          <div className="inline-flex items-center gap-3 bg-white/[0.06] border border-white/[0.08] rounded-full px-2 py-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                !annual ? "bg-white text-gray-900" : "text-gray-400 hover:text-white"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                annual ? "bg-white text-gray-900" : "text-gray-400 hover:text-white"
              }`}
            >
              Annuel
              <span className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                −30%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-7 flex flex-col transition-all ${
                plan.highlight
                  ? "bg-orange-500 border-2 border-orange-400 shadow-2xl shadow-orange-500/20"
                  : "bg-white/[0.04] border border-white/[0.08] hover:border-white/20"
              }`}
            >
              {/* Badge */}
              {plan.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-orange-600 text-xs font-black px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  {plan.tag}
                </div>
              )}

              {/* Plan name */}
              <div className="mb-5">
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${plan.highlight ? "text-white/70" : "text-gray-500"}`}>
                  {plan.name}
                </p>
                <p className={`text-sm leading-snug ${plan.highlight ? "text-white/80" : "text-gray-400"}`}>
                  {plan.desc}
                </p>
              </div>

              {/* Prix */}
              <div className="mb-2">
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-black leading-none ${plan.highlight ? "text-white" : "text-white"}`}>
                    {fmt(annual ? plan.annual : plan.monthly)}
                  </span>
                </div>
                <p className={`text-xs mt-1 ${plan.highlight ? "text-white/60" : "text-gray-500"}`}>
                  {annual
                    ? `facturé ${fmt(plan.annualTotal)}/an`
                    : "par mois"}
                </p>
              </div>

              {/* Limites */}
              <p className={`text-[11px] font-semibold mb-5 pb-5 border-b ${
                plan.highlight ? "text-white/70 border-white/20" : "text-gray-500 border-white/[0.07]"
              }`}>
                {plan.limits}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-xl text-sm transition-all mb-6 ${
                  plan.highlight
                    ? "bg-white text-orange-600 hover:bg-orange-50"
                    : "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/20"
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </a>

              {/* Features */}
              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.highlight ? "bg-white/20" : "bg-orange-500/15"
                    }`}>
                      <Check size={10} className={plan.highlight ? "text-white" : "text-orange-400"} />
                    </div>
                    <span className={`text-sm leading-snug ${plan.highlight ? "text-white/90" : "text-gray-300"}`}>
                      {f}
                    </span>
                  </li>
                ))}
                {plan.excluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 opacity-40">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white/5">
                      <span className="text-gray-500 text-[10px] font-bold leading-none">—</span>
                    </div>
                    <span className="text-sm text-gray-500 leading-snug line-through">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Essai gratuit */}
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full">
            <Zap size={14} />
            14 jours d&apos;essai gratuit — accès complet au plan Pro
          </div>
          <span className="text-gray-500 text-xs">Sans carte bancaire · Sans engagement · Données conservées 30 jours après expiration</span>
        </div>
      </div>
    </section>
  );
}
