"use client";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    desc: "Pour démarrer sans prise de tête",
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Commencer gratuitement",
    ctaVariant: "outline",
    highlight: false,
    limit: "Jusqu'à 30 apprenants",
    features: [
      "Gestion des apprenants (30 max)",
      "Planning des leçons",
      "Suivi des paiements",
      "Espace apprenant en ligne",
      "1 compte moniteur",
      "Support par email",
    ],
  },
  {
    name: "Pro",
    desc: "Pour les auto-écoles en croissance",
    monthlyPrice: 49,
    yearlyPrice: 39,
    cta: "Demander une démo",
    ctaVariant: "primary",
    highlight: true,
    badge: "Le plus populaire",
    limit: "Apprenants illimités",
    features: [
      "Apprenants illimités",
      "Planning avancé multi-moniteurs",
      "Suivi paiements & quittances PDF",
      "Espace apprenant en ligne",
      "Moniteurs illimités",
      "Tableaux de bord & rapports",
      "Notifications automatiques",
      "Génération de documents",
      "Support prioritaire",
    ],
  },
  {
    name: "Enterprise",
    desc: "Pour les groupes et franchises",
    monthlyPrice: null,
    yearlyPrice: null,
    cta: "Nous contacter",
    ctaVariant: "outline",
    highlight: false,
    limit: "Sur mesure",
    features: [
      "Tout le plan Pro",
      "Multi-établissements",
      "Intégrations sur mesure",
      "Onboarding dédié",
      "SLA garanti",
      "Gestionnaire de compte",
      "Facturation personnalisée",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Tarifs
          </span>
          <h2 className="text-4xl font-black text-white tracking-tight mb-4">
            Simple, transparent,{" "}
            <span className="text-gradient">sans surprise</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Commencez gratuitement. Évoluez quand vous êtes prêt.
          </p>

          {/* Toggle annuel/mensuel */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !yearly ? "bg-white text-gray-900" : "text-gray-400 hover:text-white"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                yearly ? "bg-white text-gray-900" : "text-gray-400 hover:text-white"
              }`}
            >
              Annuel
              <span className="bg-green-500/20 text-green-400 text-xs px-1.5 py-0.5 rounded-full font-semibold">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-orange-500 text-white ring-2 ring-orange-400 ring-offset-2 ring-offset-gray-950"
                  : "bg-white/[0.04] border border-white/[0.08] text-white"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-orange-600 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? "text-orange-100" : "text-gray-400"}`}>
                  {plan.desc}
                </p>
              </div>

              {/* Price */}
              <div className="mb-2">
                {plan.monthlyPrice === null ? (
                  <p className="text-4xl font-black">Sur mesure</p>
                ) : plan.monthlyPrice === 0 ? (
                  <p className="text-4xl font-black">Gratuit</p>
                ) : (
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black">
                      {yearly ? plan.yearlyPrice : plan.monthlyPrice}€
                    </span>
                    <span className={`text-sm mb-1.5 ${plan.highlight ? "text-orange-100" : "text-gray-400"}`}>
                      /mois
                    </span>
                  </div>
                )}
              </div>

              <p className={`text-xs mb-6 ${plan.highlight ? "text-orange-100" : "text-gray-400"}`}>
                {plan.limit}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-xl text-sm transition-all mb-7 ${
                  plan.highlight
                    ? "bg-white text-orange-600 hover:bg-orange-50"
                    : "bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="space-y-3 mt-auto">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-white" : "text-orange-400"}`}
                    />
                    <span className={plan.highlight ? "text-orange-50" : "text-gray-300"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Tous les plans incluent un essai gratuit de 14 jours. Aucune carte bancaire requise.
        </p>
      </div>
    </section>
  );
}
