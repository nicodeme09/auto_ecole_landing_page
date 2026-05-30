import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gray-950 rounded-3xl overflow-hidden p-12 text-center">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-orange-500/15 rounded-full blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Zap size={12} />
              Démarrez en moins de 10 minutes
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
              Prêt à moderniser
              <br />
              <span className="text-gradient">votre auto-école ?</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Rejoignez plus de 200 auto-écoles qui ont fait confiance à Auto École App
              pour simplifier leur gestion au quotidien.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5 text-sm"
              >
                Demander une démo gratuite
                <ArrowRight size={16} />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-7 py-4 rounded-xl transition-all text-sm"
              >
                Voir les tarifs
              </a>
            </div>

            <p className="mt-5 text-xs text-gray-600">
              ✓ 14 jours d&apos;essai gratuit &nbsp;·&nbsp; ✓ Sans carte bancaire &nbsp;·&nbsp; ✓ Sans engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
