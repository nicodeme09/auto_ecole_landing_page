import { ArrowRight, Check } from "lucide-react";

const included = [
  "Apprenants & cohortes illimités",
  "Espace apprenant en ligne (FedaPay inclus)",
  "Quittances PDF & journal de caisse",
  "Tableaux de bord multi-agences",
  "Relances automatiques par email",
  "Import CSV / Excel",
  "Configuration complète (70+ options)",
  "Support & accompagnement à l'installation",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
          Tarif
        </span>
        <h2 className="text-4xl font-black text-white tracking-tight mb-4">
          Un tarif adapté à{" "}
          <span className="text-gradient">votre auto-école</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          Pas de grille tarifaire rigide. On discute ensemble de vos besoins —
          nombre d&apos;agences, de moniteurs, de candidats — et on vous propose
          un prix juste.
        </p>

        {/* Card */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 sm:p-10 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div>
              <p className="text-white text-2xl font-black mb-1">Tout inclus, sans surprise</p>
              <p className="text-gray-400 text-sm">Chaque fonctionnalité disponible dès le premier jour.</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 shrink-0"
            >
              Obtenir un tarif
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-orange-500/15 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-orange-400" />
                </div>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-500 border-t border-white/[0.06] pt-6">
            ✓ Démo gratuite &nbsp;·&nbsp; ✓ Prise en main accompagnée &nbsp;·&nbsp; ✓ Sans engagement initial
          </p>
        </div>
      </div>
    </section>
  );
}
