import { useState } from 'react'
import PropTypes from 'prop-types'
import './search.scss'

const Search = ({searchCourse}) => {
  const [keyword,setKeyword] = useState('')
  const [active,setActive] = useState(false)
  const searchHandler = (e) => {
    e.preventDefault()
    searchCourse(keyword)
    e.target.reset()

  }
  const getKeyWord = (e) => {
    setKeyword(e.target.value)
    setActive(true)
  }
  return (
    <div className='search'>
      <form onSubmit={e => searchHandler(e)} action="" className="search__form">
        <div className={`search__form-icon ${active ? 'no-active-btn' : ''}`}>
          <i  className="fa-solid fa-magnifying-glass "></i>
        </div>
        <input onChange={e => getKeyWord(e)} value={keyword} placeholder="Nimani o'rganishni hohlaysiz? Misol uchun:Menedjment" className='search__form-inp' type="text" />

        <button type='submit' className={`search__form-btn ${active ? 'active-btn' : ''}`}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

      </form>
    </div>
  )
}
Search.propTypes = {
  searchCourse: PropTypes.func
}
export default Search