import FooterCompanyInfo from './footer/FooterCompanyInfo';
import FooterNav from './footer/FooterNav';
import FooterBadges from './footer/FooterBadges';
import FooterLegal from './footer/FooterLegal';
import FooterNewsletter from './footer/FooterNewsletter';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Company, Nav, Newsletter combined */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Col 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4">
             <FooterCompanyInfo />
          </div>

          {/* Col 2: Navigation (5 cols) */}
          <div className="lg:col-span-5">
            <FooterNav />
          </div>

          {/* Col 3: Newsletter (3 cols) - Compact version */}
          <div className="lg:col-span-3">
             <FooterNewsletter />
          </div>
        </div>

        {/* Middle Section: Trust Badges (Removed) */}
        {/* <FooterBadges /> */}

        {/* Bottom Section: Legal */}
        <FooterLegal />
      </div>
    </footer>
  );
};

export default Footer;
