import PropTypes from 'prop-types'

import CategoryListItem from '../category-list-item/category-list-item'
import './category-list.scss'

const CategoryList = ({manualList}) => {
  return (
    <div className='category__list'>
      {manualList.map((item) => (
        <CategoryListItem key={item.id} manualData={item}/>
      ))}
        
      
    </div>
  )
}
CategoryList.propTypes = {
  manualList: PropTypes.array,
}
export default CategoryList