import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales — Auto École App",
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales">
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Éditeur du site</h2>
        <p>
          Le site <strong>auto-ecole-app.com</strong> est édité par :<br />
          <strong>[Nom de votre société]</strong><br />
          Forme juridique : [SARL / SAS / SASU / etc.]<br />
          Siège social : [Adresse complète]<br />
          Email : contact@auto-ecole-app.com<br />
          Directeur de la publication : [Prénom Nom]
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Hébergement</h2>
        <p>
          Le site et l&apos;application sont hébergés par :<br />
          <strong>Render.com</strong><br />
          525 Brannan Street, Suite 300<br />
          San Francisco, CA 94107 — États-Unis<br />
          Site web : <a href="https://render.com" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">render.com</a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes, logo,
          icônes, vidéos, etc.) sont la propriété exclusive de [Nom de votre société] ou
          de ses partenaires, et sont protégés par les lois applicables en matière de propriété
          intellectuelle. Toute reproduction, distribution, modification ou utilisation non
          autorisée est interdite sans accord préalable écrit.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Limitation de responsabilité</h2>
        <p>
          [Nom de votre société] s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
          informations diffusées sur ce site. Toutefois, la société ne peut garantir
          l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition.
          En conséquence, l&apos;éditeur décline toute responsabilité pour toute imprécision,
          inexactitude ou omission.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Liens hypertextes</h2>
        <p>
          Ce site peut contenir des liens vers d&apos;autres sites internet. [Nom de votre société]
          n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur
          contenu.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Données personnelles</h2>
        <p>
          La collecte et le traitement de vos données personnelles sont décrits dans notre{" "}
          <a href="/confidentialite" className="text-orange-500 hover:underline">
            Politique de confidentialité
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
        <p>
          Pour toute question relative à ce site ou à nos services :<br />
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
