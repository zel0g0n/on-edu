import PropTypes from 'prop-types'
import './patent.scss'

const Patent = ({openModal,changeModal}) => {
  const closePatent = (e) => {
    changeModal()
    stopPropagation(e)
    document.body.style.overflow = ''
  }
  const stopPropagation = e => e.stopPropagation()
  return (
    <div onClick={changeModal}  className={`patent ${openModal?'':'hidden'}`}>
      <div onClick={e => closePatent(e)} className="close-btn">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <img onClick={e => stopPropagation(e)} src="https://onlinedu.uz/images/patent.jpg" alt="patent" className="patent-img" />
    </div>
  )
}
Patent.propTypes = {
  openModal: PropTypes.bool,
  changeModal: PropTypes.func,
}
export default Patent