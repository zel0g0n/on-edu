import { Route , Routes } from 'react-router-dom'
import Header from '../header/header'
import NavigationPath from '../navigation-path/navigation-path'
import Footer from '../footer/footer'
import Patent from '../modal/patent'
import ModalMenu from '../modal-menu/modal-menu'
import Login from '../login/login'
import './app.scss'
import Category from '../category/category'
import { useEffect, useState } from 'react'
import { service } from '../service/service'



const App = () => {
  const [data, setData] = useState([])
  const [pageOrder,setPageOrder] = useState(1)
  const [logModal,setLogModal] = useState(false)
  const [pagLinks,setPagLinks] = useState([])
  const [openModal,setOpenModal] = useState(false)
  const [pageNum,setPageNum] = useState(1)
  const {getAllData, filterAllData, searchAllData} = service()
  const [modalMenu,setModalMenu] = useState(false)

  const liveModal = () => {
    setModalMenu(prev => !prev)
  }

  const logModHandler = () => {
    setLogModal(prev => !prev)
  }

  const changeModal = () => {
    setOpenModal(prev => !prev)
  }

  const setFilterModal = (category,index) => {

    const options = document.querySelectorAll('.cat-item')
    options.forEach((item,ind) => {
      if(ind == (index)) {
        item.setAttribute('selected',true)
      }
    })
    filterAllData(category).then(res => {
      setData(res.data)
      setPagLinks(res.links)
    })
  }

  const pageHandler = (pn) => {
    setPageNum(pn)
    getAllData(pn).then(res => {
      setData(res.data)
      setPagLinks(res.links)
    })
  }

  const searchCourse = (key) => {
    searchAllData(key).then(res => {
      setData(res.data)
      setPagLinks(res.links)
    })
  }



  const filterHandler = (selector) => {
    const formData = new FormData(selector)
    const updatedFilters = {}
    formData.forEach((value,key) => {
      updatedFilters[key] = value
    })
    const {category,min,max,language} = updatedFilters
    filterAllData(category,min,max,language).
      then(res => {
        setData(res.data)
        setPagLinks(res.links)
      })

  }
  useEffect( ()=>{
    getAllData(pageOrder)
    .then(response => {
      setData(response.data)
      setPagLinks(response.links)

    })
    
    
    if(openModal) {
      document.body.style.overflow = 'hidden'
    }else {
      document.body.style.overflow = ''
      
    }
  },[])
  

  return (
    <div className="app">
      <Header searchCourse={searchCourse} logModHandler={logModHandler}   liveModal={liveModal} />
      <Login logModal={logModal} logModHandler={logModHandler}></Login>
      <NavigationPath/>
      <ModalMenu setFilterModal={setFilterModal} modalMenu={modalMenu} liveModal={liveModal} ></ModalMenu>
      <Routes>
        <Route path='/'  element={<Category filterHandler={filterHandler} pageNum={pageNum} pagLinks={pagLinks} pageHandler={pageHandler} data={data}/>} />
      </Routes>
      <Patent changeModal={changeModal} openModal={openModal}/>
      <Footer changeModal={changeModal} />
    </div>
  )
}

export default App