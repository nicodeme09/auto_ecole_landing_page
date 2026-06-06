import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const APP_URL = "https://auto-ecole-app-auxt.onrender.com";

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-indigo-500/15 rounded-2xl blur-3xl scale-90" />

      {/* Browser chrome */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
        {/* URL bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-1 text-[10px] text-gray-400 font-mono ml-1">
            auto-ecole-app.onrender.com/dashboard
          </div>
        </div>

        <div className="flex" style={{ height: "400px" }}>

          {/* ── Sidebar ─────────────────────────────────────────── */}
          <div className="shrink-0 bg-white border-r border-gray-100 flex flex-col py-3" style={{ width: "148px" }}>
            {/* Logo */}
            <div className="flex items-center gap-2 px-3 mb-4">
              <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-white font-black text-[10px]">AE</span>
              </div>
              <div>
                <p className="text-[9px] font-bold text-gray-900 leading-tight">Auto Ecole Pro Benin</p>
                <p className="text-[7px] text-gray-400 leading-tight">Gestion intelligente</p>
              </div>
            </div>

            {/* Nav item active */}
            <div className="mx-2 mb-0.5 flex items-center gap-2 px-2 py-1.5 bg-indigo-50 rounded-lg">
              <div className="w-3 h-3 bg-indigo-600 rounded-sm opacity-80" />
              <span className="text-[9px] font-semibold text-indigo-700">Tableaux de bord</span>
            </div>
            <div className="mx-2 mb-2 flex items-center gap-2 px-2 py-1.5 rounded-lg">
              <div className="w-3 h-3 border border-gray-300 rounded-sm" />
              <span className="text-[9px] text-gray-500">Contrôle candidats</span>
            </div>

            <p className="px-3 text-[7px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Formation</p>
            {["Cohortes de formation", "Planning des leçons"].map(l => (
              <div key={l} className="mx-2 flex items-center gap-2 px-2 py-1 rounded-lg">
                <div className="w-2 h-2 rounded-sm border border-gray-300" />
                <span className="text-[8px] text-gray-500">{l}</span>
              </div>
            ))}

            <p className="px-3 text-[7px] font-semibold text-gray-400 uppercase tracking-wider mt-2 mb-1">Apprenants</p>
            {["Inscriptions", "Paiements", "Examens"].map(l => (
              <div key={l} className="mx-2 flex items-center gap-2 px-2 py-1 rounded-lg">
                <div className="w-2 h-2 rounded-sm border border-gray-300" />
                <span className="text-[8px] text-gray-500">{l}</span>
              </div>
            ))}

            <p className="px-3 text-[7px] font-semibold text-gray-400 uppercase tracking-wider mt-2 mb-1">Finances</p>
            {["Relances", "Dépenses", "Comptabilité"].map(l => (
              <div key={l} className="mx-2 flex items-center gap-2 px-2 py-1 rounded-lg">
                <div className="w-2 h-2 rounded-sm border border-gray-300" />
                <span className="text-[8px] text-gray-500">{l}</span>
              </div>
            ))}

            {/* User */}
            <div className="mt-auto mx-3 flex items-center gap-2 pt-2 border-t border-gray-100">
              <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                <span className="text-white text-[8px] font-bold">S</span>
              </div>
              <div>
                <p className="text-[8px] font-semibold text-gray-700">superadmin</p>
                <p className="text-[7px] text-gray-400">Cotonou</p>
              </div>
            </div>
          </div>

          {/* ── Main content ────────────────────────────────────── */}
          <div className="flex-1 bg-gray-50 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center justify-between shrink-0">
              <div>
                <p className="text-[8px] text-gray-400">Accueil › Tableaux de bord</p>
                <p className="text-[11px] font-bold text-gray-900">Pilotage multi-site de l&apos;activité</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[7px] px-2 py-0.5 rounded-full border border-gray-200 text-gray-500">Toutes les cohortes</span>
                <span className="text-[7px] px-2 py-0.5 rounded-full bg-indigo-600 text-white font-medium">Multi-sites</span>
              </div>
            </div>

            <div className="flex-1 overflow-hidden p-3 flex flex-col gap-2.5">
              {/* Alert */}
              <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500 text-[10px]">⚠</span>
                  <p className="text-[8px] text-orange-800">
                    <strong>Relance prioritaire :</strong> idrissou Abdou Matinou — Reste{" "}
                    <strong>120K FCFA</strong>. En attente depuis 38 jours.
                  </p>
                </div>
                <span className="text-[7px] border border-orange-400 text-orange-600 px-2 py-0.5 rounded font-medium shrink-0 ml-2">
                  Régler
                </span>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Apprenants actifs", value: "10", sub: "100% · sur 10 total", icon: "👥", accent: "text-indigo-500" },
                  { label: "Inscriptions du mois", value: "9", sub: "3 cohorte(s) en cours", icon: "📅", accent: "text-indigo-500" },
                  { label: "Encaissé", value: "75K", unit: "FCFA", sub: "Objectif mensuel · 1.0%", icon: "💰", accent: "text-orange-500" },
                  { label: "Reste à encaisser", value: "1.3M", unit: "FCFA", sub: "Taux d'enc. · 5.4%", icon: "↑", accent: "text-orange-500" },
                ].map((s) => (
                  <div key={s.label} className="bg-white border border-gray-100 rounded-lg p-2">
                    <p className="text-[7px] text-gray-400 mb-1">{s.label}</p>
                    <p className={`text-sm font-black leading-none ${s.accent}`}>
                      {s.value}
                      {s.unit && <span className="text-[7px] font-semibold ml-0.5">{s.unit}</span>}
                    </p>
                    <p className="text-[6px] text-gray-400 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="bg-white border border-gray-100 rounded-lg p-2.5 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[8px] font-semibold text-gray-700">Évolution des inscriptions &amp; encaissements</p>
                  <p className="text-[7px] text-gray-400">du 01 au 31 mai 2026</p>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1"><div className="w-2 h-1 rounded bg-indigo-500" /><span className="text-[7px] text-gray-500">Inscriptions</span></div>
                  <div className="flex items-center gap-1"><div className="w-2 h-1 rounded bg-orange-400" /><span className="text-[7px] text-gray-500">Encaissements</span></div>
                </div>
                {/* SVG line chart */}
                <svg viewBox="0 0 280 50" className="w-full" style={{ height: "46px" }}>
                  <polyline points="0,45 40,42 80,35 120,28 160,22 200,18 240,14 280,10" fill="none" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" />
                  <polyline points="0,48 40,46 80,44 120,40 160,36 200,30 240,25 280,20" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3,2" />
                </svg>
              </div>

              {/* Table */}
              <div className="bg-white border border-gray-100 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100">
                  <p className="text-[8px] font-semibold text-gray-700">Inscriptions récentes</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[7px] text-green-600">0 soldées</span>
                    <span className="text-[7px] text-orange-500">3 en cours</span>
                    <span className="text-[7px] text-indigo-500">Voir tout →</span>
                  </div>
                </div>
                <div className="grid text-[7px] font-semibold text-gray-400 uppercase px-3 py-1 border-b border-gray-50" style={{ gridTemplateColumns: "1fr 1fr 80px 60px" }}>
                  <span>Apprenant</span><span>Cohorte</span><span>Reste</span><span>Statut</span>
                </div>
                {[
                  { nom: "Adjovi Adjiki", cohorte: "Cotonou Active 2026", reste: "95 000 FCFA", statut: "Partiel" },
                  { nom: "Idrissou A.", cohorte: "Cotonou Active 2026", reste: "120 000 FCFA", statut: "Partiel" },
                ].map((r) => (
                  <div key={r.nom} className="grid px-3 py-1.5 border-b border-gray-50 last:border-0 items-center" style={{ gridTemplateColumns: "1fr 1fr 80px 60px" }}>
                    <span className="text-[8px] font-medium text-gray-800">{r.nom}</span>
                    <span className="text-[7px] text-gray-500">{r.cohorte}</span>
                    <span className="text-[7px] font-semibold text-orange-500">{r.reste}</span>
                    <span className="text-[7px] px-1.5 py-0.5 bg-orange-50 text-orange-600 border border-orange-200 rounded-full text-center">{r.statut}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 border border-gray-100">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs font-semibold text-gray-700">Paiement reçu — +45 000 FCFA</span>
      </div>
      <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg px-3 py-2 border border-gray-100">
        <p className="text-[9px] text-gray-400">Apprenants actifs</p>
        <p className="text-sm font-black text-indigo-600">10 candidats</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
              Nouveau — Assistant IA intégré dans la plateforme
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Gérez votre{" "}
              <span className="text-gradient">auto-école</span>{" "}
              avec une longueur d&apos;avance
            </h1>

            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
              Dossiers apprenants, plannings de conduite, paiements, moniteurs —
              tout centralisé dans une interface simple, rapide et moderne.
            </p>

            <ul className="space-y-2 mb-10">
              {[
                "Suivi complet de chaque apprenant en temps réel",
                "Encaissements, quittances et restes à payer automatiques",
                "Espace en ligne pour vos candidats",
                "Assistant IA disponible 24h/24 pour vous guider sur la plateforme",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-orange-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/inscription-auto-ecole?plan=pro`}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Commencer gratuitement
                <ArrowRight size={16} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-6 py-3.5 rounded-xl transition-all border border-white/10"
              >
                <Play size={14} className="text-orange-400" />
                Voir les fonctionnalités
              </a>
            </div>

            <p className="mt-6 text-xs text-white/30">
              ✓ Sans engagement &nbsp;·&nbsp; ✓ Prise en main en 10 minutes &nbsp;·&nbsp; ✓ Support inclus
            </p>
          </div>

          {/* Right: Real dashboard mockup */}
          <div className="relative animate-float">
            <DashboardMockup />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
