"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Combien de temps faut-il pour prendre en main Auto École App ?",
    a: "La plupart de nos utilisateurs sont opérationnels en moins d'une heure. L'interface est pensée pour être intuitive, et nous proposons un accompagnement à l'installation inclus dans tous les plans.",
  },
  {
    q: "Puis-je importer mes données existantes (Excel, autre logiciel) ?",
    a: "Oui. Nous proposons un outil d'import depuis Excel et CSV. Si vous venez d'un autre logiciel, notre équipe peut vous accompagner dans la migration de vos données sans perte d'information.",
  },
  {
    q: "L'application fonctionne-t-elle sur mobile ?",
    a: "Absolument. Auto École App est entièrement responsive et fonctionne sur tous les appareils : ordinateur, tablette et smartphone. Vos moniteurs peuvent gérer leur planning depuis leur téléphone.",
  },
  {
    q: "Les données de mes apprenants sont-elles sécurisées ?",
    a: "Toutes les données sont chiffrées, hébergées en Europe et sauvegardées quotidiennement. Nous respectons le RGPD. Vos données vous appartiennent et peuvent être exportées à tout moment.",
  },
  {
    q: "Puis-je avoir plusieurs moniteurs et comptes utilisateurs ?",
    a: "Oui, dès le plan Pro. Chaque moniteur dispose de son propre accès sécurisé avec les permissions adaptées à son rôle. Le gérant garde une visibilité complète sur l'ensemble de l'activité.",
  },
  {
    q: "Comment fonctionne l'espace apprenant en ligne ?",
    a: "Chaque apprenant reçoit un lien de connexion par email. Il accède à son dossier, son planning de leçons, ses factures et sa progression. C'est une valeur ajoutée forte pour fidéliser vos candidats.",
  },
  {
    q: "Y a-t-il un engagement minimum ?",
    a: "Non. Tous nos plans sont sans engagement avec un paiement mensuel. L'abonnement annuel bénéficie d'une réduction de 20%. Vous pouvez annuler à tout moment.",
  },
  {
    q: "Que se passe-t-il si je dépasse la limite d'apprenants du plan Starter ?",
    a: "Vous recevrez une notification avant d'atteindre la limite. Vous pouvez passer en plan Pro à tout moment, et toutes vos données sont conservées. Aucune perte, transition fluide.",
  },
  {
    q: "Proposez-vous un support en cas de problème ?",
    a: "Oui. Support par email pour tous les plans, support prioritaire pour le plan Pro. Nous répondons généralement sous 2h en jours ouvrés. Une base de connaissance complète est aussi disponible.",
  },
  {
    q: "Peut-on faire une démo avant de s'engager ?",
    a: "Bien sûr. Nous proposons une démo personnalisée gratuite de 30 minutes avec un membre de notre équipe. Vous verrez le logiciel en action avec vos propres cas d'usage.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-50 text-orange-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">
            Questions fréquentes
          </h2>
          <p className="text-gray-500 text-lg">
            Tout ce que vous devez savoir avant de commencer.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                open === i ? "border-orange-200 bg-orange-50/50" : "border-gray-100 bg-gray-50"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                {open === i ? (
                  <Minus size={16} className="text-orange-500 shrink-0" />
                ) : (
                  <Plus size={16} className="text-gray-400 shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Une autre question ?{" "}
          <a href="#contact" className="text-orange-500 hover:underline font-medium">
            Contactez-nous
          </a>
        </p>
      </div>
    </section>
  );
}
