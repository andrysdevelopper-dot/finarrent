import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogCard = ({ article }) => {
  return (
    <Link 
      to={`/blog/${article.id}`}
      className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-secondary overflow-hidden group"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Category & Read Time */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-gray-500">
            <i className="fa-solid fa-clock mr-1"></i>
            {article.readTime}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <i className="fa-solid fa-user-circle"></i>
            <span>{article.author}</span>
          </div>
          <div className="text-sm text-gray-500">
            {new Date(article.date).toLocaleDateString('fr-FR', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}
          </div>
        </div>
        
        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

BlogCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default BlogCard;
