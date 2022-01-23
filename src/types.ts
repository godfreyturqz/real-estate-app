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

export type FilterValues = {
  purpose: string
  rentFrequency: string
  categoryExternalID: string | number
  minPrice: number
  maxPrice: number
  areaMax: number
  roomsMin: number
  bathsMin: number
  sort: string
  locationExternalIDs: string | number
}