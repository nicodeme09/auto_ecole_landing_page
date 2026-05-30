const stats = [
  { value: "200+", label: "Auto-écoles équipées" },
  { value: "18 000+", label: "Apprenants gérés" },
  { value: "98%", label: "Satisfaction client" },
  { value: "< 10 min", label: "Prise en main" },
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 font-medium mb-8 uppercase tracking-wider">
          Chiffres clés
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
