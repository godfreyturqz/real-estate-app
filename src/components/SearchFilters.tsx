import { useEffect, useState } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { MdCancel } from 'react-icons/md'

import { filterOptions } from '../utils/filterOptions'
// import { baseUrl, fetchApi } from '../utils/fetchApi'
// import noresult from '../assets/images/noresult.svg'
import { ApiData, FilterValues } from '../types'

const SearchFilters: React.FC = () => {

  const [searchProperties, setSearchProperties] = useState<Partial<FilterValues>>({});
  const [searchTerm, setSearchTerm] = useState('')
  // const [locationData, setLocationData] = useState<ApiData | null>(null)
  const [showLocations, setShowLocations] = useState(false)
  // const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    navigate(`/search?locationExternalIDs=${searchProperties.locationExternalIDs || ''}&purpose=${searchProperties.purpose || ''}&categoryExternalID=${searchProperties.categoryExternalID || ''}&bathsMin=${searchProperties.bathsMin || ''}&rentFrequency=${searchProperties.rentFrequency || ''}&priceMin=${searchProperties.minPrice || ''}&priceMax=${searchProperties.maxPrice || ''}&roomsMin=${searchProperties.roomsMin || ''}&sort=${searchProperties.sort || ''}&areaMax=${searchProperties.areaMax || ''}`)
    
    // try {
    //   if (searchTerm !== '') {
    //     const fetchData = async () => {
    //       setLoading(true)
    //       const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
    //       setLoading(false)
    //       setLocationData(data?.hits)
    //     }
  
    //     fetchData()
    //   }
    // } catch (error) {
    //   console.log(error)
    // }

  // }, [searchTerm, searchProperties])
  }, [searchProperties])

  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filterOptions?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            onChange={(e) => setSearchProperties((prev) => ({ ...prev, [filter.queryName]: e.target.value }))}
            placeholder={filter.placeholder}
            w='fit-content' p='2' 
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
      <Flex flexDir='column'>
        <Button onClick={() => setShowLocations(!showLocations)} border='1px' borderColor='gray.200' marginTop='2' >
          Search Location
        </Button>
        {showLocations && (
          <Flex flexDir='column' pos='relative' paddingTop='2'>
            <Input
              placeholder='Type Here'
              value={searchTerm}
              w='300px'
              focusBorderColor='gray.300'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm !== '' && (
              <Icon
                as={MdCancel}
                pos='absolute'
                cursor='pointer'
                right='5'
                top='5'
                zIndex='100'
                onClick={() => setSearchTerm('')}
              />
            )}
            {/* {loading && <Spinner margin='auto' marginTop='3' />} */}
            {/* {showLocations && (
              <Box height='300px' overflow='auto'>
                {locationData?.map((location) => (
                  <Box
                    key={location.id}
                    onClick={() => {
                      setSearchProperties(prev => ({...prev, locationExternalIDs: location.externalID }))
                      setShowLocations(false);
                      setSearchTerm(location.name);
                    }}
                  >
                    <Text cursor='pointer' bg='gray.200' p='2' borderBottom='1px' borderColor='gray.100' >
                      {location.name}
                    </Text>
                  </Box>
                ))}
                {!loading && !locationData?.length && (
                  <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5' >
                    <img src={noresult} loading='lazy'/>
                    <Text fontSize='xl' marginTop='3'>
                      Waiting to search!
                    </Text>
                  </Flex>
                )}
              </Box>
            )} */}
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}

export default SearchFilters
