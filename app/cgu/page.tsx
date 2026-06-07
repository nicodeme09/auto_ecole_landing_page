import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Auto École App",
  robots: { index: false, follow: false },
};

export default function CGU() {
  return (
    <LegalLayout title="Conditions générales d'utilisation">
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">1. Objet et acceptation</h2>
        <p>
          Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation
          de la plateforme <strong>Auto École App</strong>, éditée par [Nom de votre société].
          En accédant au service, vous acceptez sans réserve les présentes CGU. Si vous n&apos;acceptez
          pas ces conditions, vous devez cesser d&apos;utiliser le service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description du service</h2>
        <p>
          Auto École App est une solution logicielle en mode SaaS (Software as a Service) destinée
          aux gérants et collaborateurs d&apos;auto-écoles. Elle permet notamment :
        </p>
        <ul className="list-disc list-inside space-y-1.5 mt-3 text-gray-700">
          <li>La gestion des apprenants et de leurs inscriptions.</li>
          <li>La planification des leçons de conduite et des examens.</li>
          <li>Le suivi des paiements et de la comptabilité.</li>
          <li>La gestion multi-sites et des collaborateurs.</li>
          <li>L&apos;espace en ligne pour les apprenants.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">3. Accès au service et compte utilisateur</h2>
        <p>
          L&apos;accès au service nécessite la création d&apos;un compte. Vous êtes responsable de la
          confidentialité de vos identifiants et de toutes les actions réalisées depuis votre compte.
          Vous vous engagez à informer immédiatement [Nom de votre société] de tout accès non autorisé
          à votre compte.
        </p>
        <p className="mt-3">
          Les informations fournies lors de l&apos;inscription doivent être exactes, complètes et à jour.
          Toute inscription d&apos;une personne morale engage la responsabilité de son représentant légal.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">4. Plans et facturation</h2>
        <p>Le service est proposé selon les formules suivantes :</p>
        <ul className="list-disc list-inside space-y-1.5 mt-3 text-gray-700">
          <li><strong>Plan Essentiel</strong> : 15 000 FCFA/mois — 1 site, 75 apprenants, 3 utilisateurs.</li>
          <li><strong>Plan Pro</strong> : 32 000 FCFA/mois — 3 sites, 300 apprenants, 10 utilisateurs.</li>
          <li><strong>Plan Multi-sites</strong> : 60 000 FCFA/mois — sites, apprenants et utilisateurs illimités.</li>
        </ul>
        <p className="mt-3">
          Une période d&apos;essai gratuit de <strong>14 jours</strong> est offerte sans obligation d&apos;achat.
          À l&apos;issue de l&apos;essai, la poursuite de l&apos;utilisation implique la souscription à un plan payant.
          En cas de non-paiement, l&apos;accès au service est suspendu.
        </p>
        <p className="mt-3">
          Les tarifs annuels bénéficient d&apos;une réduction de 30 % par rapport au tarif mensuel.
          Tout abonnement mensuel ou annuel est dû en début de période et n&apos;est pas remboursable.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">5. Obligations de l&apos;utilisateur</h2>
        <p>L&apos;utilisateur s&apos;engage à :</p>
        <ul className="list-disc list-inside space-y-1.5 mt-3 text-gray-700">
          <li>Utiliser le service conformément aux lois et réglementations en vigueur.</li>
          <li>Ne pas tenter de contourner les mesures de sécurité ou d&apos;accéder à des données non autorisées.</li>
          <li>Ne pas utiliser le service à des fins illicites, frauduleuses ou contraires aux bonnes mœurs.</li>
          <li>Maintenir à jour les informations de son compte.</li>
          <li>Respecter les droits des tiers, notamment en matière de données personnelles des apprenants.</li>
        </ul>
        <p className="mt-3">
          En tant que responsable du traitement des données de vos apprenants, vous vous engagez
          à respecter la réglementation applicable en matière de protection des données personnelles
          et à obtenir les consentements nécessaires.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">6. Disponibilité du service</h2>
        <p>
          [Nom de votre société] s&apos;efforce d&apos;assurer la disponibilité du service 24h/24, 7j/7.
          Toutefois, des interruptions peuvent survenir pour des raisons de maintenance, de mise à jour
          ou de force majeure. La société ne peut être tenue responsable des interruptions de service
          indépendantes de sa volonté.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">7. Données et confidentialité</h2>
        <p>
          Les données que vous saisissez dans l&apos;application vous appartiennent. [Nom de votre société]
          ne les utilise pas à des fins commerciales et ne les revend pas à des tiers.
          Le traitement de vos données personnelles est décrit dans notre{" "}
          <a href="/confidentialite" className="text-orange-500 hover:underline">
            Politique de confidentialité
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">8. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble de la plateforme (code source, interface, marques, logos, contenus) est la
          propriété de [Nom de votre société] et est protégé par les lois applicables.
          L&apos;abonnement vous confère un droit d&apos;utilisation personnel, non exclusif et non transférable.
          Toute reproduction, modification ou exploitation non autorisée est interdite.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">9. Limitation de responsabilité</h2>
        <p>
          [Nom de votre société] ne saurait être tenu responsable des dommages indirects (perte de
          revenus, perte de données, préjudice commercial) résultant de l&apos;utilisation ou de
          l&apos;impossibilité d&apos;utiliser le service. La responsabilité totale de la société est limitée
          au montant des sommes effectivement payées par l&apos;utilisateur au cours des 12 derniers mois.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">10. Résiliation</h2>
        <p>
          Vous pouvez résilier votre abonnement à tout moment depuis votre espace compte ou en
          contactant notre support. La résiliation prend effet à la fin de la période en cours.
          [Nom de votre société] se réserve le droit de suspendre ou de résilier votre accès
          en cas de violation des présentes CGU, sans préavis ni remboursement.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">11. Modification des CGU</h2>
        <p>
          [Nom de votre société] se réserve le droit de modifier les présentes CGU à tout moment.
          Les utilisateurs seront informés par email au moins 15 jours avant l&apos;entrée en vigueur
          des modifications. La poursuite de l&apos;utilisation du service après ce délai vaut acceptation
          des nouvelles conditions.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">12. Droit applicable et litiges</h2>
        <p>
          Les présentes CGU sont soumises au droit de la République du Bénin. En cas de litige,
          les parties s&apos;efforceront de trouver une solution amiable. À défaut, le litige sera soumis
          aux tribunaux compétents de [Ville, Bénin].
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">13. Contact</h2>
        <p>
          Pour toute question relative aux présentes CGU :<br />
          Email : contact@auto-ecole-app.com<br />
          Formulaire :{" "}
          <a href="/#contact" className="text-orange-500 hover:underline">
            Nous contacter
          </a>
        </p>
      </section>
    </LegalLayout>
  );
}
