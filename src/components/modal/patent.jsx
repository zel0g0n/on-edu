import './patent.scss'

const Patent = ({openModal,changeModal}) => {
  const stopPropagation = e => e.stopPropagation()
  return (
    <div onClick={changeModal}  className={`patent ${openModal?'':'hidden'}`}>
      <div onClick={e => {
        changeModal()
        stopPropagation(e)
      }} className="close-btn">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <img onClick={e => stopPropagation(e)} src="https://onlinedu.uz/images/patent.jpg" alt="patent" className="patent-img" />
    </div>
  )
}

export default Patent