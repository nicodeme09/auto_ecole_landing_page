import { TrendingDown, Zap, Eye, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    stat: "80%",
    title: "Moins de temps sur la paperasse",
    description:
      "Fini les tableurs Excel et les classeurs papier. Quittances PDF, relances automatiques et dossiers numérisés en quelques clics.",
  },
  {
    icon: Zap,
    stat: "0",
    title: "Double saisie",
    description:
      "Une information saisie une seule fois est disponible partout : dossier apprenant, facture, planning, espace en ligne.",
  },
  {
    icon: Eye,
    stat: "100%",
    title: "Visibilité en temps réel",
    description:
      "Tableau de bord mis à jour en temps réel. Sachez exactement où en est chaque apprenant, chaque paiement, chaque moniteur.",
  },
  {
    icon: HeartHandshake,
    stat: "+40%",
    title: "Satisfaction de vos apprenants",
    description:
      "Espace en ligne dédié, rappels automatiques, suivi transparent. Vos candidats vivent une expérience moderne et professionnelle.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Bénéfices concrets
          </span>
          <h2 className="text-4xl font-black text-white tracking-tight mb-4">
            Résultats mesurables dès{" "}
            <span className="text-gradient">les premiers jours</span>
          </h2>
          <p className="text-lg text-gray-400">
            Auto École App ne fait pas que numériser votre travail — il le transforme.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-orange-500/20 transition-all group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <Icon size={22} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-4xl font-black text-gradient mb-2">{b.stat}</p>
                    <h3 className="font-semibold text-white text-lg mb-2">{b.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
