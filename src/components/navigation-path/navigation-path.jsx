import { Link } from 'react-router-dom'
import './navigation-path.scss'
const NavigationPath = () => {
  return (
    <div className='navigation'>
      <Link className='navigation__main-path' to="https://onlinedu.uz/">Asosiy</Link>
      
      <p className="navigation__current-path">
        <i className="fa-solid fa-angle-right"></i>
        Kurs kategoriyalari
      </p>
    </div>
  )
}

export default NavigationPath