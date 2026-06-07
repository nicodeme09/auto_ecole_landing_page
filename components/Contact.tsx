"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nom: "", ecole: "", email: "", telephone: "", message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Une erreur est survenue. Réessayez ou contactez-nous par email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Demander une démo
            </span>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-5">
              Voyez Auto École App{" "}
              <span className="text-gradient">en action</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Notre équipe vous présente le logiciel en 30 minutes, adapté à votre situation.
              Posez vos questions, explorez les fonctionnalités qui vous intéressent.
            </p>

            {[
              { emoji: "🕐", text: "Démo de 30 minutes avec un expert" },
              { emoji: "🎯", text: "Adaptée à votre type d'auto-école" },
              { emoji: "🚀", text: "Installation guidée incluse" },
              { emoji: "💬", text: "Réponse sous 24h ouvrées" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 mb-3">
                <span className="text-xl">{item.emoji}</span>
                <span className="text-gray-700 font-medium text-sm">{item.text}</span>
              </div>
            ))}

            <div className="mt-8 p-5 bg-orange-50 border border-orange-100 rounded-2xl">
              <p className="text-sm text-orange-700 font-medium">
                💡 Sans engagement · Sans carte bancaire · 100% gratuit
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Message envoyé !
                </h3>
                <p className="text-gray-500 text-sm">
                  Notre équipe vous contacte sous 24h pour planifier votre démo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Sophie Martin"
                      value={form.nom}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Nom de l&apos;auto-école *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Auto-École du Centre"
                      value={form.ecole}
                      onChange={(e) => setForm({ ...form, ecole: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sophie@autoecole.fr"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="+33 6 00 00 00 00"
                    value={form.telephone}
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Votre besoin
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Décrivez votre situation actuelle, vos besoins ou vos questions..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/25"
                >
                  <Send size={16} />
                  {loading ? "Envoi en cours…" : "Demander ma démo gratuite"}
                </button>

                <p className="text-center text-xs text-gray-400">
                  En soumettant ce formulaire, vous acceptez notre{" "}
                  <a href="/confidentialite" className="underline hover:text-gray-600">politique de confidentialité</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
