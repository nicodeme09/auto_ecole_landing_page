import { FolderOpen, Zap, LayoutDashboard, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: FolderOpen,
    title: "Fini les classeurs papier",
    description:
      "Chaque dossier apprenant est numérique, complet et accessible en un clic. Les quittances PDF se génèrent automatiquement à chaque encaissement.",
  },
  {
    icon: Zap,
    title: "Zéro double saisie",
    description:
      "Une information saisie une seule fois est disponible partout : dossier apprenant, facture, planning, espace en ligne. Vous ne ressaisissez jamais.",
  },
  {
    icon: LayoutDashboard,
    title: "Vue complète en temps réel",
    description:
      "Tableau de bord mis à jour instantanément. Apprenants actifs, restes à payer, relances prioritaires — tout visible sans fouiller vos cahiers.",
  },
  {
    icon: Smartphone,
    title: "Espace candidat sur mobile",
    description:
      "Chaque apprenant accède à son espace depuis son téléphone : progression, planning, quittances. Moins d'appels, moins de questions répétées.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Ce que ça change
          </span>
          <h2 className="text-4xl font-black text-white tracking-tight mb-4">
            Conçu pour éliminer{" "}
            <span className="text-gradient">les tâches répétitives</span>
          </h2>
          <p className="text-lg text-gray-400">
            Auto École App prend en charge ce qui vous fait perdre du temps — pour que vous vous
            concentriez sur la formation, pas sur la paperasse.
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
