import axios from "axios"
import { ApiData } from '../types'


export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url: string) => {

  try {

    const { data } = await axios.get<Promise<ApiData>>((url), {
      headers: {
          'x-rapidapi-host': 'bayut.p.rapidapi.com',
          'x-rapidapi-key': '276a363cbemsh827128e574a0551p18b4afjsnf9788902b30c'
      },
    })
      
    return data

  } catch (error) {
    console.log(error)
  }
}