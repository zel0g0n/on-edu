import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import './pagination.scss'



const Pagination = ({pagLinks, pageHandler, filteredData, pageNum}) => {
  const [pageCount,setPageCount] = useState(1)
  const [pagCounter,setPagCounter] = useState([])

  useEffect(() => {
    const pl = filteredData.length
    if(pl%6 == 0) {
      setPageCount(pl/6)
    }else {
      setPageCount(Math.ceil(pl/6))
    }
    
  },[filteredData])
  useEffect(() => {
    setPagCounter(pagLinks.slice(1,pageCount+1))

  },[pageCount])
  const prevHandler = () => {
    if(pageNum > 1) {
      pageHandler(pageNum-1)
    }
  }

  const nextHandler = () => {

    if(pageNum < pagCounter.length) {
      pageHandler(pageNum+1)
    }
  }
  
  

  
  return (
    <div className='pagination'>
      <button onClick={()=>prevHandler()} className={`pagination__btn prev ${pageNum==1?'no-active':''}`}>
        <img src="https://onlinedu.uz/images/icons/custom-select-arrow.svg" alt="" />
      </button>
      {pagCounter.map((item,index)=>(
        <button onClick={()=>pageHandler(index+1)} className={`pagination__btn ${pageNum==(index+1)?'active-pag':''}`} key={index}>
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
  filteredData: PropTypes.array,
  manualList: PropTypes.array,
  pageHandler: PropTypes.func,
  pageNum: PropTypes.number,
}
export default Pagination