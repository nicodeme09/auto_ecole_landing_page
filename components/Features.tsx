import {
  Users, Calendar, CreditCard, FileText,
  BarChart3, Bell, Shield, Smartphone,
  GraduationCap, Clock
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestion des apprenants",
    description:
      "Dossier complet pour chaque candidat : coordonnées, progression, résultats d'examen, historique des leçons et documents administratifs centralisés.",
    color: "orange",
  },
  {
    icon: Calendar,
    title: "Planning des leçons",
    description:
      "Calendrier interactif pour planifier les cours de conduite. Gérez les disponibilités de chaque moniteur et évitez les conflits d'horaires en un clic.",
    color: "blue",
  },
  {
    icon: CreditCard,
    title: "Suivi des paiements",
    description:
      "Encaissements, restes à payer, quittances automatiques. Visualisez l'état financier de chaque dossier et relancez les impayés facilement.",
    color: "green",
  },
  {
    icon: Smartphone,
    title: "Espace apprenant en ligne",
    description:
      "Chaque candidat accède à son espace personnel : progression, planning, factures et résultats. Moins de questions, plus d'autonomie.",
    color: "purple",
  },
  {
    icon: FileText,
    title: "Documents & attestations",
    description:
      "Générez automatiquement les attestations de fin de formation, quittances, contrats et courriers administratifs en quelques secondes.",
    color: "yellow",
  },
  {
    icon: BarChart3,
    title: "Tableaux de bord & rapports",
    description:
      "Visualisez vos indicateurs clés : taux de réussite, CA mensuel, occupation des moniteurs, dossiers en cours. Décidez sur la base de données réelles.",
    color: "red",
  },
  {
    icon: GraduationCap,
    title: "Suivi des examens",
    description:
      "Enregistrez les tentatives code et conduite, les résultats, les repêchages. Un historique clair pour chaque candidat tout au long de sa formation.",
    color: "teal",
  },
  {
    icon: Bell,
    title: "Notifications automatiques",
    description:
      "Rappels de leçons, alertes de paiements en retard, notifications de résultats d'examen. Restez informé sans effort.",
    color: "pink",
  },
  {
    icon: Shield,
    title: "Accès sécurisé multi-profils",
    description:
      "Gérant, moniteurs, secrétariat — chaque rôle dispose de son accès personnalisé et sécurisé. Données chiffrées et hébergées en Europe.",
    color: "indigo",
  },
  {
    icon: Clock,
    title: "Historique complet",
    description:
      "Retrouvez l'intégralité de l'historique de chaque apprenant : actions réalisées, paiements effectués, leçons passées. Zéro perte d'information.",
    color: "gray",
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
            pensée pour les professionnels de la conduite.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.slice(0, 9).map((f) => {
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
            <Clock size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">Historique complet & traçabilité</h3>
            <p className="text-orange-100 text-sm">
              Chaque action est enregistrée. Retrouvez l&apos;intégralité de l&apos;historique de chaque
              apprenant — leçons, paiements, examens — sans jamais perdre une donnée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
