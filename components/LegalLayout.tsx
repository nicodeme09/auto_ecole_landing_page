import Nav from "./Nav";
import Footer from "./Footer";

interface Props {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated = "Juin 2026", children }: Props) {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-20 min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-orange-500 hover:text-orange-600 font-medium mb-8 transition-colors"
          >
            ← Retour à l&apos;accueil
          </a>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">{title}</h1>
          <p className="text-sm text-gray-400 mb-12">Dernière mise à jour : {lastUpdated}</p>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-8">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
