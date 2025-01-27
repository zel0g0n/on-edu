import { Link } from 'react-router-dom'
import './modal-menu.scss'
import PropTypes from 'prop-types'

const ModalMenu = ({modalMenu, liveModal, setFilterModal}) => {
  const catData = [
    {name: 25,value: 'Aniq fanlar'},
    {name: 26,value: 'Tabiiy fanlar'},
    {name: 27,value: 'Xorijiy tillar'},
    {name: 51,value: 'Pisa'},
    {name: 71,value: 'Ijtimoiy fanlar'},
    {name: 87,value: "Milliy o'quv dasturi"},
    {name: 118,value: "Talimda liderlik"},
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
            <p onClick={() => setFilterModal(item.name,index+1)} key={index} className="modal__category-item">{item.value}</p>
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
  setFilterModal: PropTypes.func,
}
export default ModalMenu