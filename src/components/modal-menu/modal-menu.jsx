import { Link } from 'react-router-dom'
import './modal-menu.scss'
import PropTypes from 'prop-types'

const ModalMenu = ({modalMenu, liveModal, setFilterModal}) => {
  const catData = [
    {name: 'aniq-fanlar',value: 'Aniq fanlar'},
    {name: 'tabiiy-fanlar',value: 'Tabiiy fanlar'},
    {name: 'xorojiy-tillar',value: 'Xorijiy tillar'},
    {name: 'pisa',value: 'Pisa'},
    {name: 'ijtimoiy-fanlar',value: 'Ijtimoiy fanlar'},
    {name: "milliy-o'quv-dasturi",value: "Milliy o'quv dasturi"},
    {name: 'ta-limda-liderlik',value: "Talimda liderlik"},
  ]

  

  return (
    <div onClick={liveModal} className={`modal__menu ${modalMenu ? 'visible' : 'not-visible'}`}>
      <div className="modal__menu-item">
        <div className="language__choose-btns">
          <div  className="btn btn-secondary">Рус</div>
          <div className="btn btn-primary">O'z</div>
        </div>
        <div className="modal__category">
          {catData.map((item,index) => (
            <p onClick={() => setFilterModal(item.name,index)} key={index} className="modal__category-item">{item.value}</p>
          ))}
        </div>
        <Link to='https://onlinedu.uz/faq/1' className='btn btn-primary' >Yo'riqnoma</Link>
      </div>

    </div>
  )
}
ModalMenu.propTypes = {
  modalMenu: PropTypes.bool,
  liveModal: PropTypes.func,
}
export default ModalMenu