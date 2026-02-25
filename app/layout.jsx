import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata = {
  title: 'Finassur | Financement & Leasing Professionnel',
  description: 'Finassur accompagne les entreprises : crédit-bail, LOA, solutions de financement. De 3 000€ à 500 000€, réponse en 48h.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <div id="site-header">
            <Header />
          </div>
          <main className="flex-grow">{children}</main>
          <footer id="site-footer">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
