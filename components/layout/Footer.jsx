import FooterCompanyInfo from './footer/FooterCompanyInfo';
import FooterNav from './footer/FooterNav';
import FooterLegal from './footer/FooterLegal';
import FooterNewsletter from './footer/FooterNewsletter';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4"><FooterCompanyInfo /></div>
          <div className="lg:col-span-5"><FooterNav /></div>
          <div className="lg:col-span-3"><FooterNewsletter /></div>
        </div>
        <FooterLegal />
      </div>
    </footer>
  );
}
