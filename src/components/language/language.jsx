import { useState } from 'react'
import './language.scss'

const Language = () => {
  const langList = ["O'zbekcha",'Русский']
  const [langModal, setLangModal] = useState(false)
  const [choosenLang,setChoosenLang] = useState("O'zbekcha")
  const openLangModal = () => {
    setLangModal(prev => !prev)
  }
  const changeLang = (lang) => {
    setChoosenLang(lang)
    openLangModal()
  }
  return (
    <div className='language'>
      <button onClick={openLangModal} className="language-btn">
        <span>{choosenLang}</span>
        <img src="https://onlinedu.uz/images/icons/custom-select-arrow.svg" alt="angle-icon" />
      </button>
      <div className={langModal ? ('language__modal'): ('language__modal hidden__modal')}>
        
        {langList.map((item,index) => (
          <p onClick={() => changeLang(item)} key={index} className="language__modal-l1">{item}</p>
        ))}
      </div>
    </div>
  )
}

export default Language