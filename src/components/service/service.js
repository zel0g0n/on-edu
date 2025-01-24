import { useHttp } from "../../own-hook/own-hook";

const service = () => {
  const {request} = useHttp()
  const getCatogoryList = async (URL) => {
    return request(URL)
  }


  const getAllData = async (arr) => {
    const data = []
    for(let i=0; i<arr.length; i++) {
      const res = await  getCatogoryList(`https://api.onlinedu.uz/api/v1/courses-home?per_page=6&type=demo&page=${i+1}&`)
      data.push(...res.data)
    }
    return data
  }
  
  return {getCatogoryList, getAllData}
}

export {service}