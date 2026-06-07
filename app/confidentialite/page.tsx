import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Auto École App",
  robots: { index: false, follow: false },
};

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement de vos données personnelles est :<br />
          <strong>[Nom de votre société]</strong><br />
          [Adresse du siège social]<br />
          Email : contact@auto-ecole-app.com
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">2. Données collectées</h2>
        <p>Nous collectons les données suivantes selon votre utilisation de nos services :</p>
        <ul className="list-disc list-inside space-y-1.5 mt-3 text-gray-700">
          <li><strong>Données d&apos;identification</strong> : nom, prénom, adresse email, numéro de téléphone.</li>
          <li><strong>Données de connexion</strong> : adresse IP, logs de connexion, navigateur.</li>
          <li><strong>Données de l&apos;établissement</strong> : nom de l&apos;auto-école, adresse, ville.</li>
          <li><strong>Données d&apos;utilisation</strong> : fonctionnalités utilisées, pages visitées, actions réalisées.</li>
          <li><strong>Données de paiement</strong> : transactions réalisées via notre partenaire de paiement (nous ne stockons pas vos coordonnées bancaires).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">3. Finalités du traitement</h2>
        <ul className="list-disc list-inside space-y-1.5 mt-3 text-gray-700">
          <li>Fourniture et amélioration de nos services de gestion d&apos;auto-école.</li>
          <li>Gestion de votre compte et de votre abonnement.</li>
          <li>Facturation et suivi des paiements.</li>
          <li>Support client et assistance technique.</li>
          <li>Envoi de communications liées au service (notifications, mises à jour).</li>
          <li>Prévention de la fraude et sécurité des données.</li>
          <li>Respect des obligations légales applicables.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">4. Base légale du traitement</h2>
        <ul className="list-disc list-inside space-y-1.5 mt-3 text-gray-700">
          <li><strong>Exécution du contrat</strong> : pour la fourniture du service souscrit.</li>
          <li><strong>Intérêt légitime</strong> : pour améliorer nos services et assurer la sécurité.</li>
          <li><strong>Consentement</strong> : pour les communications marketing (vous pouvez vous désinscrire à tout moment).</li>
          <li><strong>Obligation légale</strong> : pour répondre aux exigences réglementaires.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">5. Durée de conservation</h2>
        <ul className="list-disc list-inside space-y-1.5 mt-3 text-gray-700">
          <li>Données de compte : durée de l&apos;abonnement + 3 ans après résiliation.</li>
          <li>Données de facturation : 10 ans (obligation légale comptable).</li>
          <li>Logs techniques : 12 mois glissants.</li>
          <li>Données de formulaire de contact : 24 mois.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">6. Partage des données</h2>
        <p>
          Nous ne vendons jamais vos données personnelles. Nous pouvons les partager avec :
        </p>
        <ul className="list-disc list-inside space-y-1.5 mt-3 text-gray-700">
          <li><strong>Hébergeur</strong> : Render.com (USA) — hébergement de l&apos;application.</li>
          <li><strong>Prestataire de paiement</strong> : traitement des transactions.</li>
          <li><strong>Outils d&apos;analyse</strong> : amélioration du service (données agrégées et anonymisées).</li>
          <li><strong>Autorités compétentes</strong> : uniquement sur réquisition légale.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">7. Transferts internationaux</h2>
        <p>
          Notre hébergeur (Render.com) est basé aux États-Unis. Ce transfert est encadré par
          les garanties appropriées conformément à la réglementation applicable sur la protection
          des données personnelles.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">8. Vos droits</h2>
        <p>Conformément à la législation applicable (notamment la Loi n°2017-20 du Bénin portant Code du Numérique), vous disposez des droits suivants :</p>
        <ul className="list-disc list-inside space-y-1.5 mt-3 text-gray-700">
          <li><strong>Accès</strong> : consulter les données que nous détenons sur vous.</li>
          <li><strong>Rectification</strong> : corriger des données inexactes ou incomplètes.</li>
          <li><strong>Effacement</strong> : demander la suppression de vos données (sous réserve d&apos;obligations légales).</li>
          <li><strong>Portabilité</strong> : recevoir vos données dans un format structuré.</li>
          <li><strong>Opposition</strong> : vous opposer à certains traitements.</li>
          <li><strong>Limitation</strong> : demander la limitation d&apos;un traitement.</li>
        </ul>
        <p className="mt-4">
          Pour exercer ces droits, contactez-nous à :{" "}
          <strong>contact@auto-ecole-app.com</strong>. Nous répondrons dans un délai de 30 jours.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">9. Cookies</h2>
        <p>
          Notre site utilise des cookies techniques nécessaires au bon fonctionnement du service.
          Aucun cookie de traçage publicitaire n&apos;est utilisé sans votre consentement préalable.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact</h2>
        <p>
          Pour toute question relative à la protection de vos données :<br />
          Email : contact@auto-ecole-app.com<br />
          Objet du message : « Protection des données »
        </p>
      </section>
    </LegalLayout>
  );
}
