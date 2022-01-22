import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'

import Property from '../components/Property'
// import SearchFilters from '../components/SearchFilters'
import { baseUrl, fetchApi } from '../utils/fetchApi'
import noresult from '../assets/images/noresult.svg'

import { ApiData } from '../types'


const Search: React.FC = () => {

    const [properties, setProperties] = useState<ApiData | null>(null)
    const [searchFilters, setSearchFilters] = useState(false)
    const { search } = useLocation()
    const query = new URLSearchParams(search)

    const purpose = query.get('purpose') || 'for-rent'
    const rentFrequency = query.get('rentFrequency') || 'yearly'
    const minPrice = query.get('minPrice') || '0'
    const maxPrice = query.get('maxPrice') || '1000000'
    const roomsMin = query.get('roomsMin') || '0'
    const bathsMin = query.get('bathsMin') || '0'
    const sort = query.get('sort') || 'price-desc'
    const areaMax = query.get('areaMax') || '35000'
    const locationExternalIDs = query.get('locationExternalIDs') || '5002'
    const categoryExternalID = query.get('categoryExternalID') || '4'

    useEffect(() => {
        try {
            const fetchProperties = async () => {
                const properties = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`)
                setProperties(properties || null)
            }
            fetchProperties()
            console.log(properties)
        } catch (error) {
            console.log(error)
        }
    }, [search])

    return (
        <Box>
            <Flex
                onClick={() => setSearchFilters(!searchFilters)}
                cursor='pointer'
                bg='gray.100'
                borderBottom='1px'
                borderColor='gray.200'
                p='2'
                fontWeight='black'
                fontSize='lg'
                justifyContent='center'
                alignItems='center'
            >
                <Text>Search Property By Filters</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>
            {/* {searchFilters && <SearchFilters />} */}
            <Text fontSize='2xl' p='4' fontWeight='bold'>
                Properties {query.get('purpose')}
            </Text>
            <Flex flexWrap='wrap'>
                {properties?.hits.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
            {properties?.hits.length === 0 && (
                <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
                    <img src={noresult} loading='lazy'/>
                    <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
                </Flex>
            )}
        </Box>
    )
}

export default Search
