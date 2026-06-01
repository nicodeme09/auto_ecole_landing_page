const pillars = [
  {
    icon: "🌍",
    label: "Conçu pour l'Afrique de l'Ouest",
    sub: "Bénin · Togo · Côte d'Ivoire",
  },
  {
    icon: "💳",
    label: "Paiements FedaPay intégrés",
    sub: "Encaissements en FCFA, quittances auto",
  },
  {
    icon: "⚙️",
    label: "+70 paramètres configurables",
    sub: "Tarifs, permis, moniteurs, agences",
  },
  {
    icon: "🏢",
    label: "Multi-sites & multi-utilisateurs",
    sub: "Tableaux de bord séparés par agence",
  },
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 font-medium mb-8 uppercase tracking-wider">
          Pourquoi Auto École App
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.label} className="flex items-start gap-3">
              <span className="text-2xl mt-0.5 shrink-0">{p.icon}</span>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-tight mb-0.5">{p.label}</p>
                <p className="text-xs text-gray-400 leading-snug">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
