import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import StarRating from '../star-rating/star-rating'
import { useState } from 'react'
import './category-list-item.scss'


const CategoryListItem = ({manualData}) => {
  const [typeCategory,setTypeCategory] = useState(manualData.category.translations)
  const initialURL = 'https://api.onlinedu.uz/storage/'
  return (
    <div className='category__list-item'>
      <div className="list__item-properties">
        <p className="type-properties">
          {typeCategory.length>1?typeCategory[1].value:typeCategory[0].value}
        </p>
        <StarRating rating={manualData.rating ? manualData.rating : ''} ></StarRating>
      </div>
      <img src={initialURL + manualData.image} alt="img" className="category__list-item--img" />
      <div className="list__item-data">
        <p className="category__list-item--name">
          {manualData.name}
        </p>
        <div className="category__list-item-info">
          <p className="item__info-text">
            <span>{manualData.price ? (manualData.price+" so'm") : 'Bepul'}</span> | <span>{manualData.hours}</span> kredit
          </p>
          <Link to={''} className="item__info-btn btn btn-primary">
            Tanlash
          </Link>
        </div>
      </div>
    </div>
  )
}
CategoryListItem.propTypes = {
  manualData: PropTypes.object 
}
export default CategoryListItem