export default function Footer() {
  const year = new Date().getFullYear();

  const nav = [
    {
      title: "Produit",
      links: [
        { label: "Fonctionnalités", href: "#features" },
        { label: "Tarifs", href: "#pricing" },
        { label: "Comparatif", href: "#comparison" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "À propos", href: "#" },
        { label: "Partenaires", href: "#" },
        { label: "Nous rejoindre", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Centre d'aide", href: "#" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    {
      title: "Légal",
      links: [
        { label: "Mentions légales", href: "/mentions-legales" },
        { label: "Confidentialité", href: "/confidentialite" },
        { label: "CGU", href: "/cgu" },
      ],
    },
  ];

  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">AE</span>
              </div>
              <span className="font-bold text-white text-lg">
                Auto École <span className="text-orange-500">App</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              La plateforme tout-en-un pour gérer votre auto-école intelligemment.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-500">Tous les services opérationnels</span>
            </div>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {year} Auto École App. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-600">
            Conçu avec ❤️ pour les professionnels de la conduite
          </p>
        </div>
      </div>
    </footer>
  );
}
