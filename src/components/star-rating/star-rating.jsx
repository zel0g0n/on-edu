import PropTypes from 'prop-types'
import "./star-rating.scss";
const StarRating = ({rating}) => {
  return (
    <div className="star-rating">
      <span className="star"
        style={{
          background: `linear-gradient(90deg, #ffc107 ${rating / 5 * 100}%, #ddd ${rating / 5 * 100}%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {[1,2,3,4,5].map((_,index) => (
          <i key={index} className="fa-solid fa-star"></i>
        ))} 
      </span>
      <span className="rate">{rating? Number(rating).toFixed(1) :''}</span>
    </div>
  );
};
StarRating.propTypes = {
  rating: PropTypes.object
}
export default StarRating;
