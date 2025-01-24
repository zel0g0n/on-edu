import { Link } from 'react-router-dom'
import './footer-item.scss'

const FooterItemList = ({title,navList,filterItemList}) => {
  return (
    <div className='footer__item-list'>
      <p className="footer__item-list--title">{title}</p>
      <ul className="footer__item-list--child">
        {navList.map((item,index) => (
          <li key={index} className="child__item">
            <Link className="child__item-text" to={item.path}>{item.name}</Link>
          </li>
        ))}
        {filterItemList.map((item,index) => (
          <li key={index} className="child__item">
            <p className="child__item-text">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterItemList