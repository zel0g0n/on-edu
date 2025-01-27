import PropTypes from 'prop-types'
import Pagination from '../pagination/pagination'
import Filter from '../filter/filter'

import CategoryList from '../category-list/category-list'
import './category.scss'

const Category = ({pagLinks,data,pageHandler,pageNum,filterHandler}) => {

  return (
    <div className='category'>
      <h2 className="title">Kurs kategoriyalari</h2>
      <Filter data={data} filterHandler={filterHandler} ></Filter>
      <CategoryList data={data}/>
      {
        data.length ? (
          <Pagination data={data} pageHandler={pageHandler} pageNum={pageNum} pagLinks={pagLinks} />
        ): (
          setTimeout(() => {
            return (
              <div className='empty'>
                <img src="/empty.png" alt="" className="empty__img" />
                <p className="empty__info">Siz qidirayotgan kurs mavjud emas</p>
              </div>
            )
          }, 1000)
        )
      

      }
    </div>
  )
}
Category.propTypes = {
  data: PropTypes.array,
  filteredData: PropTypes.array,
  pagLinks: PropTypes.array,
  pageHandler: PropTypes.func,
  filterHandler: PropTypes.func,
  pageNum: PropTypes.number,
}
export default Category