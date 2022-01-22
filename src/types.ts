export type ApiData = {
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