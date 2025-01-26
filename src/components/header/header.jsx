import Search from '../search/search'
import Language from '../language/language'
import './header.scss'
import '../button/button.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const Header = ({liveModal,logModHandler,searchCourse}) => {


  return (
    <header className='header'>
      <div className="header__container">
        <Link to={'https://onlinedu.uz/'} className="header__container-logo">
          <img src="https://onlinedu.uz/images/assets/logo.png" alt="logo" />
        </Link>
        <div className={`header__container-item`}>
          <Link className='btn btn-secondary' to={'https://onlinedu.uz/faq/1'}>Yoriqnoma</Link> 
          <Search searchCourse={searchCourse}></Search>
          <Language></Language>
        </div>

        <div className="btns-gr">
          <div onClick={logModHandler} className="header__login-btn btn btn-primary">
            <span className='log-icon'>
              <i className="fa-regular fa-user"></i>
            </span>
            <span className="log-info">Kirish</span>
          </div>
          <div onClick={liveModal} className="bars-btn btn btn-primary">
            <i className="fa-solid fa-bars"></i>
          </div>
          </div>
      </div>
      <div className="knowledge">
        <img src="/v_logo.svg" alt="" className="knowledge_img" />
      </div>
    </header>
  )
}
Header.propTypes = {
  liveModal: PropTypes.func,
  searchCourse: PropTypes.func,
  logModHandler: PropTypes.func,
}
export default Header