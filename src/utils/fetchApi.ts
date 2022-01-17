import axios from "axios"

type Data = {
    hits: {
      id: number
      coverPhoto: {
        url: string
      }
      price: number
      rentFrequency: string
      rooms: number
      title: string
      baths: number
      area: number
      agency: {
          logo: {
              url: string
          }
      }
      isVerified: boolean
      externalID  : string
    }[]
}

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url: string) => {

  const { data } = await axios.get<Promise<Data>>((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '276a363cbemsh827128e574a0551p18b4afjsnf9788902b30c'
    },
  })
    
  return data
}