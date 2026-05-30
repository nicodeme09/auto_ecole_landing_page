import {
  Users, Calendar, CreditCard, BookOpen,
  BarChart3, Bell, Shield, Smartphone,
  GraduationCap, Settings
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestion des apprenants",
    description:
      "Dossier complet pour chaque candidat : coordonnées, progression, historique des paiements. Import en masse depuis un fichier CSV ou Excel en quelques secondes.",
    color: "orange",
  },
  {
    icon: BookOpen,
    title: "Cohortes de formation",
    description:
      "Organisez vos apprenants par cohorte (vague de formation). Affectez un moniteur, définissez les dates, suivez la progression du groupe en temps réel.",
    color: "blue",
  },
  {
    icon: CreditCard,
    title: "Paiements & quittances",
    description:
      "Enregistrez les encaissements, calculez automatiquement le reste à payer et générez des quittances PDF. Journal de caisse et comptabilité par cohorte inclus.",
    color: "green",
  },
  {
    icon: Smartphone,
    title: "Espace apprenant en ligne",
    description:
      "Chaque candidat accède à son espace personnel : progression, planning, quittances. Paiement en ligne via FedaPay directement depuis l'espace candidat.",
    color: "purple",
  },
  {
    icon: BarChart3,
    title: "Tableaux de bord multi-sites",
    description:
      "Pilotez votre activité depuis un seul tableau de bord : inscriptions, encaissements, restes à payer, taux d'encaissement — par site ou toutes agences confondues.",
    color: "red",
  },
  {
    icon: GraduationCap,
    title: "Suivi des examens",
    description:
      "Enregistrez les tentatives code et conduite, les résultats, les repêchages. Historique clair pour chaque candidat sur l'ensemble de son parcours.",
    color: "teal",
  },
  {
    icon: Bell,
    title: "Relances automatiques",
    description:
      "Détectez les apprenants avec des impayés et envoyez des relances par email en un clic. Tableau des priorités de relance directement sur le tableau de bord.",
    color: "pink",
  },
  {
    icon: Shield,
    title: "Accès multi-profils sécurisé",
    description:
      "Superadmin, moniteur, secrétariat — chaque rôle dispose de son accès personnalisé. Connexion sécurisée par email et mot de passe, données hébergées sur le cloud.",
    color: "indigo",
  },
  {
    icon: Calendar,
    title: "Planning des leçons",
    description:
      "Planifiez les cours de conduite par cohorte. Gérez les disponibilités de chaque moniteur et consultez le calendrier de formation en un coup d'œil.",
    color: "yellow",
  },
];

const colorMap: Record<string, string> = {
  orange: "bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white",
  blue:   "bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
  green:  "bg-green-50 text-green-500 group-hover:bg-green-500 group-hover:text-white",
  purple: "bg-purple-50 text-purple-500 group-hover:bg-purple-500 group-hover:text-white",
  yellow: "bg-yellow-50 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white",
  red:    "bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white",
  teal:   "bg-teal-50 text-teal-500 group-hover:bg-teal-500 group-hover:text-white",
  pink:   "bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white",
  indigo: "bg-indigo-50 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white",
  gray:   "bg-gray-100 text-gray-500 group-hover:bg-gray-500 group-hover:text-white",
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-50 text-orange-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Fonctionnalités
          </span>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">
            Tout ce dont vous avez besoin,{" "}
            <span className="text-gradient">rien de superflu</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Auto École App centralise l&apos;ensemble de votre gestion dans une interface
            pensée pour les professionnels de la conduite au Bénin.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group card-hover bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-200 ${colorMap[f.color]}`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>

        {/* Last feature — wide */}
        <div className="mt-5 group card-hover bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <Settings size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">Configuration complète & multi-agences</h3>
            <p className="text-orange-100 text-sm">
              Plus de 70 paramètres configurables : nom de l&apos;établissement, tarifs, villes, moniteurs, types de permis.
              Gérez plusieurs agences depuis un seul compte avec des tableaux de bord séparés par site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
