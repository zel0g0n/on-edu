import PropTypes from 'prop-types'

import CategoryListItem from '../category-list-item/category-list-item'
import './category-list.scss'

const CategoryList = ({data}) => {
  return (
    <div className='category__list'>
      {data.map((item) => (
        <CategoryListItem key={item.id} manualData={item}/>
      ))}
        
      
    </div>
  )
}
CategoryList.propTypes = {
  data: PropTypes.array,
}
export default CategoryList