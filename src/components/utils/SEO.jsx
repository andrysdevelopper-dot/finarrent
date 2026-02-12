import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, type = 'website' }) => {
  const siteTitle = 'Finassur - Courtier en financement professionnel';
  const defaultDescription = 'Finassur accompagne les entreprises dans leurs recherches de financement : crédit-bail, LOA, affacturage. Solutions sur-mesure pour tous secteurs.';
  const siteUrl = 'https://finassur.fr'; // Replace with actual URL when deployed
  
  const fullTitle = title ? `${title} | Finassur` : siteTitle;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      {image && <meta property="og:image" content={image} />}
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};

export default SEO;
