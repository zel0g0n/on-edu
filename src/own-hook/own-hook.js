import { useCallback } from "react";
import axios from "axios";

export const useHttp = () => {
  const request = useCallback( async (url) => {
    try {
      const response = await axios.get(url)

      const data = response.data
      return data
    }
    catch(err) {
      console.log(new Error(err))
    }
  },[])
  return {request}
}