import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Alaoui",
    role: "Directrice, Auto École Al Amal",
    location: "Casablanca",
    avatar: "FA",
    rating: 5,
    quote:
      "Depuis qu'on utilise Auto École App, on a divisé par trois le temps passé sur l'administratif. Les dossiers apprenants sont impeccables, les paiements sont suivis automatiquement. Je ne pourrais plus revenir en arrière.",
  },
  {
    name: "Jean-Pierre Moreau",
    role: "Gérant, Auto-École Moreau & Fils",
    location: "Lyon",
    avatar: "JM",
    rating: 5,
    quote:
      "L'espace apprenant en ligne a tout changé. Mes candidats suivent leur progression eux-mêmes, posent moins de questions et se sentent mieux accompagnés. Le taux de satisfaction a explosé.",
  },
  {
    name: "Aminata Diallo",
    role: "Responsable administrative",
    location: "Dakar",
    avatar: "AD",
    rating: 5,
    quote:
      "Le suivi des paiements était notre gros point faible. Maintenant, on voit en temps réel qui a payé, qui est en retard, et les quittances se génèrent toutes seules. Un gain de temps énorme.",
  },
  {
    name: "Mohamed Benhaddou",
    role: "Moniteur & Co-gérant",
    location: "Paris",
    avatar: "MB",
    rating: 5,
    quote:
      "Je gère mon planning depuis mon téléphone. Fini les appels pour confirmer les leçons — tout est dans l'appli. Simple, rapide, efficace. Et le support répond toujours rapidement.",
  },
  {
    name: "Claire Fontaine",
    role: "Directrice pédagogique",
    location: "Bordeaux",
    avatar: "CF",
    rating: 5,
    quote:
      "La prise en main a été immédiate. En moins d'une semaine, toute l'équipe était autonome. Le rapport qualité-prix est imbattable pour une solution aussi complète.",
  },
  {
    name: "Omar Khoury",
    role: "Gérant, Auto-École Prestige",
    location: "Marseille",
    avatar: "OK",
    rating: 5,
    quote:
      "Les tableaux de bord m'ont permis de prendre des décisions que je n'aurais jamais pu prendre avant : quels moniteurs sont sous-utilisés, quels créneaux sont saturés. Vraiment précieux.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-50 text-orange-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">
            Ce que disent les{" "}
            <span className="text-gradient">professionnels</span>
          </h2>
          <p className="text-lg text-gray-500">
            Des auto-écoles de toute taille et de toute région font confiance à Auto École App.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:bg-orange-50/30 transition-all card-hover"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
