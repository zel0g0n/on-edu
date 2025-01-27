import { useHttp } from "../../own-hook/own-hook";

const service = () => {
  const {request} = useHttp()
  const getCategoryList = async (URL) => {
    return request(URL)
  }


  const getAllData = async (pageNumber) => {
    const res = await  getCategoryList(`https://api.onlinedu.uz/api/v1/courses-home?per_page=6&type=demo&page=${pageNumber}&`)
    return res
  }
  const filterAllData = async (category_id="",min="",max="",language_id="") => {
    const category = `category_id=${category_id}&`
    const min_d = `hours_min=${min}&`
    const lang = `language_id=${language_id}&`
    const max_d = `hours_max=${max}&`
    const filterFullAPI = `https://api.onlinedu.uz/api/v1/courses-home?per_page=6&type=demo&page=1&${(language_id!=='')?lang:'' + ((category_id!=='')?category:'') + ((min!=='')?min_d:'') + ((max!=='')?max_d:'')}`
    const res = await getCategoryList(filterFullAPI)
    return res
  }
  const searchAllData = async (key) => {
    const searchedWord = `search=${key}&`
    const res = await getCategoryList(`https://api.onlinedu.uz/api/v1/courses-home?per_page=6&type=demo&page=1&${key?searchedWord:''}`)
    return res
  }
  
  return {getAllData, filterAllData, searchAllData}
}

export {service}