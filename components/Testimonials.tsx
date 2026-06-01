import { MapPin, Users, CreditCard, Calendar, FileText, AlertCircle } from "lucide-react";

const modules = [
  { icon: Users,       label: "Apprenants",   desc: "Dossiers complets, import CSV, accès candidat en ligne" },
  { icon: CreditCard,  label: "Paiements",    desc: "Encaissements, restes à payer, quittances PDF automatiques" },
  { icon: Calendar,    label: "Planning",     desc: "Leçons de conduite, disponibilités moniteurs, cohortes" },
  { icon: FileText,    label: "Examens",      desc: "Code, conduite, résultats, repêchages — tout l'historique" },
  { icon: AlertCircle, label: "Relances",     desc: "Détection des impayés, relances email en un clic" },
  { icon: FileText,    label: "Documents",    desc: "Dossiers numérisés, quittances, exports comptables" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Bannière Afrique ── */}
        <div className="mb-16 bg-orange-500 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <MapPin size={22} className="text-white/80" />
            <span className="text-white font-black text-lg">Conçu pour les auto-écoles africaines</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 sm:ml-4">
            {[
              "Paiements FedaPay",
              "Gestion en FCFA",
              "Multi-sites",
              "Suivi des cohortes",
              "Impayés en temps réel",
              "Interface en français",
            ].map((tag) => (
              <span key={tag} className="text-white/85 text-sm font-medium flex items-center gap-1.5">
                <span className="text-orange-200">✓</span> {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Pourquoi nous avons créé cette solution ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Notre histoire
            </span>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-5 leading-tight">
              Pourquoi nous avons créé{" "}
              <span className="text-gradient">Auto École App</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              En observant le quotidien des auto-écoles au Bénin, on a constaté la même réalité partout :
              des classeurs papier qui débordent, des paiements suivis sur des cahiers, des moniteurs qui
              jonglent entre WhatsApp et Excel pour gérer leur planning.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              Les logiciels existants sont conçus pour l'Europe — trop complexes, trop chers, et sans
              intégration de paiement mobile adapté au marché africain. Nous avons construit Auto École App
              pour combler ce vide : une solution tout-en-un, en français, pensée pour la réalité des
              auto-écoles d'Afrique de l'Ouest.
            </p>
            <div className="flex items-center gap-3 bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-white font-black text-sm">AE</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Équipe Auto École App</p>
                <p className="text-xs text-gray-400">Développé à Cotonou, Bénin · 2024</p>
              </div>
            </div>
          </div>

          {/* Modules */}
          <div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">
              Ce que la plateforme centralise
            </p>
            <div className="grid grid-cols-2 gap-3">
              {modules.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="bg-white border border-gray-100 rounded-xl p-4 hover:border-orange-200 hover:bg-orange-50/30 transition-all group">
                    <div className="w-8 h-8 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <Icon size={16} />
                    </div>
                    <p className="text-sm font-bold text-gray-900 mb-1">{m.label}</p>
                    <p className="text-xs text-gray-400 leading-snug">{m.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
