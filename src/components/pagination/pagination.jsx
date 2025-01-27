import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import './pagination.scss'



const Pagination = ({pagLinks, data, pageHandler, pageNum}) => {
  const [pagCounter,setPagCounter] = useState([])

  const [activNum,setActivNum] = useState(1)
  useEffect(() => {

    setPagCounter(pagLinks.slice(1,pagLinks.length-1))

  },[pagLinks])
  const prevHandler = () => {
    if(pageNum > 1) {
      pageHandler(pageNum-1)
      setActivNum(pageNum - 1)
    }
  }

  const currentHandler = (numPage) => {
    pageHandler(numPage)
    setActivNum(numPage)
  }
  const nextHandler = () => {

    if(pageNum < pagCounter.length) {
      pageHandler(pageNum+1)
      setActivNum(pageNum + 1)
    }
  }
  
  

  
  return (
    <div className='pagination'>
      <button onClick={()=>prevHandler()} className={`pagination__btn prev ${pageNum==1?'no-active':''}`}>
        <img src="https://onlinedu.uz/images/icons/custom-select-arrow.svg" alt="" />
      </button>
      {pagCounter.map((item,index)=>(
        <button onClick={()=>currentHandler(index+1)} className={`pagination__btn ${activNum==(index+1)?'active-pag':''}`} key={index}>
          {Number(item.label)&&item.label}
        </button>
      ))}
      <button onClick={()=>nextHandler()} className={`pagination__btn next ${pageNum==pagCounter.length?'no-active':''}`}>
        <img src="https://onlinedu.uz/images/icons/custom-select-arrow.svg" alt="" />
      </button>
    </div>  
  )
}
Pagination.propTypes = {
  pagLinks: PropTypes.array,
  data: PropTypes.array,
  manualList: PropTypes.array,
  pageHandler: PropTypes.func,
  pageNum: PropTypes.number,
}
export default Pagination