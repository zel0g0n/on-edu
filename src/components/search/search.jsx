import './search.scss'

const Search = () => {
  return (
    <div className='search'>
      <form action="" className="search__form">
        <div className="search__form-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <input placeholder="Nimani o'rganishni hohlaysiz? Misol uchun:Menedjment" className='search__form-inp' type="text" />

        <button className="search__form-btn">
        <i className="fa-solid fa-magnifying-glass"></i>
        </button>

      </form>
    </div>
  )
}

export default Search