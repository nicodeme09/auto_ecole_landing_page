import { Check, X } from "lucide-react";

const rows = [
  {
    feature: "Dossiers apprenants centralisés",
    traditional: false,
    app: true,
  },
  {
    feature: "Planification des leçons en temps réel",
    traditional: false,
    app: true,
  },
  {
    feature: "Suivi automatique des paiements",
    traditional: false,
    app: true,
  },
  {
    feature: "Quittances PDF automatiques",
    traditional: false,
    app: true,
  },
  {
    feature: "Espace en ligne pour les apprenants",
    traditional: false,
    app: true,
  },
  {
    feature: "Tableaux de bord & rapports",
    traditional: false,
    app: true,
  },
  {
    feature: "Notifications automatiques",
    traditional: false,
    app: true,
  },
  {
    feature: "Accès mobile",
    traditional: false,
    app: true,
  },
  {
    feature: "Sauvegarde sécurisée des données",
    traditional: false,
    app: true,
  },
  {
    feature: "Multi-utilisateurs & rôles",
    traditional: false,
    app: true,
  },
];

export default function Comparison() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-50 text-orange-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Comparatif
          </span>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">
            Avant vs Après
          </h2>
          <p className="text-lg text-gray-500">
            La différence entre gérer son auto-école à l&apos;ancienne et avec Auto École App.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="px-6 py-4 text-sm font-semibold text-gray-500">Fonctionnalité</div>
            <div className="px-6 py-4 text-center text-sm font-semibold text-gray-500">
              Gestion traditionnelle
            </div>
            <div className="px-6 py-4 text-center text-sm font-semibold text-white bg-orange-500 rounded-t-none">
              Auto École App
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              <div className="px-6 py-4 text-sm text-gray-700 font-medium flex items-center">
                {row.feature}
              </div>
              <div className="px-6 py-4 flex items-center justify-center">
                <X size={18} className="text-red-400" />
              </div>
              <div className="px-6 py-4 flex items-center justify-center bg-orange-50/50">
                <Check size={18} className="text-orange-500 font-bold" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
          >
            Passer à Auto École App maintenant →
          </a>
          <p className="mt-3 text-xs text-gray-400">
            Démo gratuite · Sans engagement · Accompagnement à l&apos;installation
          </p>
        </div>
      </div>
    </section>
  );
}
