import axios from "axios"
import { ApiData, ApiDataDetails } from '../types'


export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = (url: string): Promise<ApiData | null> => {

  // try {
  //   const { data } = await axios.get<Promise<ApiData>>((url), {
  //     headers: {
  //         'x-rapidapi-host': 'bayut.p.rapidapi.com',
  //         'x-rapidapi-key': '276a363cbemsh827128e574a0551p18b4afjsnf9788902b30c'
  //     },
  //   })
  //   return data
  // } catch (error) {
  //   console.log(error)
  // }

  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '276a363cbemsh827128e574a0551p18b4afjsnf9788902b30c'
        },
      })
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export const fetchApiDetails = async (url: string) => {

  try {

    const { data } = await axios.get<Promise<ApiDataDetails | null>>((url), {
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