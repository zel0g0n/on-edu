import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './login.scss'
const Login = ({logModal,logModHandler}) => {
  const formHandler = (e) => {
    e.preventDefault()
    e.target.reset()
    logModHandler()

  }
  const [lgs,setLgs] = useState([1,false,false])
  useEffect(() => {
    const handleLog = (e) => {
      const clsName = e.target.className
      if(clsName == 'login visible' || clsName == 'close__m-b') {
        logModHandler()
      }
    };
    if (logModal) {
      document.addEventListener("click", handleLog);


    }
    return () => {
      document.removeEventListener("click", handleLog);

    };
      
  },[logModal, logModHandler])
  

  return (
    <div className={`login ${logModal ? 'visible' : ''}`}>
      <div className="login__container">
      <div className="close__m-b">✕</div>

        {
          lgs[0] ? (
            <div className="login__item">

              <h3 className="login__title">Kirish</h3>
              
              <form onSubmit = {e => formHandler(e)}  action="" className="login__form">
                <label htmlFor="" className="login__form-phone">Telefon raqam</label>
                <input required type="number" className="login__form-phone-inp" />
                <label htmlFor="" className="login__form-password">Parol</label>
                <input  type="password" className="login__form-password-inp" />
                <button  type='submit' className="login__form-btn">
                  Kirish
                </button>
              </form>
              
              
            </div>
          ):''
        }
        
        {
          lgs[1] ? (
            <div className="login__item">
              <h3 className="login__title">Parolni tiklash</h3>
              
              <form onSubmit={e => formHandler(e)} action="" className="login__form">
                <label htmlFor="" className="login__form-phone">Telefon raqam</label>
                <input required type="number" className="login__form-phone-inp" />
                <button type='submit' className="login__form-btn">
                  Kirish
                </button>
              </form>
            </div>
          ):''
        }
        {
          lgs[2] ? (
            <div className="login__item">
              <h3 className="login__title">Ro'yxatdan o'tish</h3>
              <form onSubmit={e => formHandler(e)} action="" className="login__form">
                <label htmlFor="" className="login__form-phone">Telefon raqam</label>
                <input required type="number" className="login__form-phone-inp" />
                <label htmlFor="login__form-emp">Foydalanuvchini tanlang</label>
                <select name="job" id="">
                  <option value="scholl">Maktab xodimlari</option>
                  <option value="mtt">MTT xodimlari</option>
                </select>
                <button type='submit' className="login__form-btn">
                  Ro'yxatdan o'tish
                </button>
              </form>
            </div>
          ):''
        }
        {
          !lgs[1] ? (<p onClick={() => setLgs([false,true,false])} className="login__restore">Parolni tiklash</p>) : ''
        }
        {
          !lgs[2] ? (<p onClick={() => setLgs([false,false,true])} className="login__sign">Ro'yxatdan o'tish</p>) : ''
        }
        {
          !lgs[0] ? (<p onClick={() => setLgs([true,false,false])} className="login__restore">Kirish</p>) : (
            <div className="login__block">
              <p className="login__or">---------------- yoki ----------------</p>
              <a href="" className="onid">
                <img src="https://onlinedu.uz/images/one_id.png" alt="one-id" />
              </a>
            </div>
          )
        }
        
        
      </div>
      
      
    </div>
  )
}
Login.propTypes = {
  logModal: PropTypes.bool,
  logModHandler: PropTypes.func
}
export default Login

