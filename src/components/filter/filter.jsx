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
            <option value="categories">Barcha kategoriyalar</option>
            <option value="aniq-fanlar">Aniq fanlar</option>
            <option value="tabiiy-fanlar">Tabiiy fanlar</option>
            <option value="xorojiy-tillar">Xorijiy tillar</option>
            <option value="pisa">Pisa</option>
            <option value="ijtimoiy-fanlar">Ijtimoiy fanlar</option>
            <option value="milliy-o'quv-dasturi">Milliy o'quv dasturi</option>
            <option value="ta-limda-liderlik">Talimda liderlik</option>
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
          Qidiruvni <br /> boshlash
        </button>
      </form>
    </div>
  )
}
Filter.propTypes = {
  data: PropTypes.array,
  filterHandler: PropTypes.array,
}
export default Filter