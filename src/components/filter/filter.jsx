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
            <option className='cat-item' value="">Barcha kategoriyalar</option>
            <option className='cat-item' value={25}>Aniq fanlar</option>
            <option className='cat-item' value={26}>Tabiiy fanlar</option>
            <option className='cat-item' value={27}>Xorijiy tillar</option>
            <option className='cat-item' value={51}>Pisa</option>
            <option className='cat-item' value={71}>Ijtimoiy fanlar</option>
            <option className='cat-item' value={87}>Milliy o'quv dasturi</option>
            <option className='cat-item' value={118}>Talimda liderlik</option>
          </select>
        </div>
          <div className="min-duration duration__item">
            <label htmlFor="">Minimal davomiyligi</label>
            <input name='min' placeholder='Min. davomiyligi' type="number" />
          </div>
          <div className="max-duration duration__item">
            <label htmlFor="">Maximal davomiyligi</label>
            <input name='max' placeholder='Max. davomiyligi' type="number" />
          </div>
        <div className="filter__lang">
          <label htmlFor="" className="category__type-text">Kategoriyalar</label>
          <select name="language" id="languages">
            <option value="">Barcha tillar</option>
            <option value={1}>O'zbekcha</option>
            <option value={2}>Ruscha</option>
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