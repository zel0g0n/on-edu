import Search from '../search/search'
import Language from '../language/language'
import './header.scss'
import '../button/button.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className="header__container">
        <Link to={'https://onlinedu.uz/'} className="header__container-logo">
          <img src="https://onlinedu.uz/images/assets/logo.png" alt="logo" />
        </Link>
        <div className="header__container-item">
          <Link className='btn btn-secondary' to={'https://onlinedu.uz/faq/1'}>Yoriqnoma</Link> 
          <Search></Search>
          <Language></Language>
        </div>
        <div className="header__login-btn btn btn-primary">
          <span>
            <i className="fa-regular fa-user"></i>
            Kirish
          </span>
        </div>
      </div>
      <div className="knowledge">
        <img src="/v_logo.svg" alt="" className="knowledge_img" />
      </div>
    </header>
  )
}

export default Header