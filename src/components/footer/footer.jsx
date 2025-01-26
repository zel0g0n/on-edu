import { Link } from 'react-router-dom'
import { footerDataList } from '../../constants/constants'
import FooterItemList from '../footer-item/footer-item'
import './footer.scss'
import PropTypes from 'prop-types'

const Footer = ({changeModal}) => {
  return (
    <div className='footer'>
      <div className="footer__item">
        <Link  to={'https://onlinedu.uz/'} className="header__container-logo">
          <img src="https://onlinedu.uz/images/assets/logo.png" alt="logo" />
        </Link>
        <div className='footer__item-child'>
          {footerDataList.map((item,index) => (
            <FooterItemList 
              key={index}
              title={item.title}
              navList={item.navList}
              filterItemList={item.filterItemList}
            />
          ))}
        </div>
      </div>
      <div className="line"></div>
      <div className="footer__end">
        <p className="footer__end-info">
          © 2020-2023 Copyright. <span onClick={changeModal} className='footer__end-info--doc'>Barcha huquqlar himoyalangan.</span>
        </p>
        <div className="footer__end-dev">
          <p  className="footer__end-dev--text">developed by</p>
          <Link to={'https://nazirov.co/'}>
            <img src="https://onlinedu.uz/images/nazirov.png" alt="author" className="footer__end-dev--auth" />
          </Link>
        </div>
      </div>
    </div>
  ) 
}
Footer.propTypes = {
  changeModal: PropTypes.func
}
export default Footer