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
  const [filteredData, setFilteredData] = useState([])
  const [logModal,setLogModal] = useState(false)
  const [pagLinks,setPagLinks] = useState([])
  const [openModal,setOpenModal] = useState(false)
  const [pageNum,setPageNum] = useState(1)
  const {getCatogoryList, getAllData} = service()
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
      if(ind == (index + 1)) {
        item.setAttribute('selected',true)
      }
    })
    let result = filterCategory(category,data)
    setFilteredData(result)
  }

  const pageHandler = (pn) => {
    setPageNum(pn)
  }

  const filterCategory = (key, dataList) => {
    if(key == 'categories') {
      return dataList
    } else {
      
      return (dataList.filter(item => item.category.slug == key))
    }
  }
  const searchCourse = (key) => {
    const newData = data.filter(item => item.name.includes(key))
    setFilteredData(newData)
  }

  const filterDuration = (min,max,dataList) => {
    if(min == '' && max == '') {
      return dataList
    } else {
      return dataList.filter(item => (item.hours > min && item.hours < max))
    }
  }


  const filterLanguage = (lang,dataList) => {
    if(lang == 'languages') {
      return dataList
    } else {
      return dataList.filter(item => item.language.name == lang)
    }
  }

  const filterHandler = (selector,allData) => {
    const formData = new FormData(selector)
    const updatedFilters = {}
    formData.forEach((value,key) => {
      updatedFilters[key] = value
    })
    let result = filterCategory(updatedFilters.category, allData);
    result = filterDuration(updatedFilters['min-duration'], updatedFilters['max-duration'], result);
    result = filterLanguage(updatedFilters.language, result);
    setFilteredData(result)
    return result
  }
  useEffect( ()=>{
    getCatogoryList(`https://api.onlinedu.uz/api/v1/courses-home?per_page=6&type=demo&page=1&`)
    .then(response => {
      setPagLinks(response.links)
    })
    
    
    if(openModal) {
      document.body.style.overflow = 'hidden'
    }else {
      document.body.style.overflow = ''
      
    }
  },[])
  
  useEffect(() => {
    getAllData(pagLinks.slice(1,pagLinks.length-1))
    .then(res => {
      setData(res)
      setFilteredData(res)

    })
  },[pagLinks])

  return (
    <div className="app">
      <Header searchCourse={searchCourse} logModHandler={logModHandler}   liveModal={liveModal} />
      <Login logModal={logModal} logModHandler={logModHandler}></Login>
      <NavigationPath/>
      <ModalMenu setFilterModal={setFilterModal} modalMenu={modalMenu} liveModal={liveModal} ></ModalMenu>
      <Routes>
        <Route path='/'  element={<Category filterHandler={filterHandler} pageNum={pageNum} pagLinks={pagLinks} pageHandler={pageHandler} data={data} filteredData={filteredData}/>} />
      </Routes>
      <Patent changeModal={changeModal} openModal={openModal}/>
      <Footer changeModal={changeModal} />
    </div>
  )
}

export default App