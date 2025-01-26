import './filter.scss'
import PropTypes from 'prop-types'

const Filter = ({filterHandler,data}) => {
  const showFilterData = (e) => {
    const form = document.querySelector('.filter__form')
    e.preventDefault()
    filterHandler(form,data)
  }
  return (
    <div className='filter'>
      <form onSubmit={e => showFilterData(e)} action="" className="filter__form">
        <div className="category__type">
          <label htmlFor="" className="category__type-text">Kategoriyalar</label>
          <select name="category" id="categories">
            <option className='cat-item' value="categories">Barcha kategoriyalar</option>
            <option className='cat-item' value="aniq-fanlar">Aniq fanlar</option>
            <option className='cat-item' value="tabiiy-fanlar">Tabiiy fanlar</option>
            <option className='cat-item' value="xorojiy-tillar">Xorijiy tillar</option>
            <option className='cat-item' value="pisa">Pisa</option>
            <option className='cat-item' value="ijtimoiy-fanlar">Ijtimoiy fanlar</option>
            <option className='cat-item' value="milliy-o'quv-dasturi">Milliy o'quv dasturi</option>
            <option className='cat-item' value="ta-limda-liderlik">Talimda liderlik</option>
          </select>
        </div>
          <div className="min-duration duration__item">
            <label htmlFor="">Minimal davomiyligi</label>
            <input name='min-duration' placeholder='Min. davomiyligi' type="number" />
          </div>
          <div className="max-duration duration__item">
            <label htmlFor="">Maximal davomiyligi</label>
            <input name='max-duration' placeholder='Max. davomiyligi' type="number" />
          </div>
        <div className="filter__lang">
          <label htmlFor="" className="category__type-text">Kategoriyalar</label>
          <select name="language" id="languages">
            <option value="languages">Barcha tillar</option>
            <option value="O'zbek">O'zbekcha</option>
            <option value="Русский">Ruscha</option>
          </select>
        </div>
        <button className="filter__btn btn btn-primary">
          Qidiruvni boshlash
        </button>
      </form>
    </div>
  )
}
Filter.propTypes = {
  data: PropTypes.array,
  filterHandler: PropTypes.func,
}
export default Filter