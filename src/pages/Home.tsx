import React, { useState, useEffect } from 'react'
import { Flex, Box } from '@chakra-ui/react'

import Banner from '../components/Banner'
import Property from '../components/Property'

import { baseUrl, fetchApi } from '../utils/fetchApi'
import { ApiData } from '../types'


const Home: React.FC = () => {

    const [propertiesForRent, setPropertiesForRent] = useState<ApiData | null>(null)
    const [propertiesForSale, setpropertiesForSale] = useState<ApiData | null>(null)
    

    useEffect(() => {
        try {
            const fetchProperties = async () => {
                const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
                const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
    
                setPropertiesForRent(propertyForRent || null)
                setpropertiesForSale(propertyForSale || null)
    
            }
            fetchProperties()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <Box>
            <Banner
                purpose='RENT A HOME'
                title1='Rental Homes for'
                title2='Everyone'
                desc1='Explore from Apartments, builder floors, villas'
                desc2='and more'
                buttonText='Explore Renting'
                linkName='/search?purpose=for-rent'
                imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
            />
            <Flex flexWrap='wrap'>
                {propertiesForRent?.hits.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
            <Banner
                purpose='BUY A HOME'
                title1='Find, Buy & Own Your'
                title2='Dream Home'
                desc1='Explore from Apartments, land, builder floors,'
                desc2='villas and more'
                buttonText='Explore Buying'
                linkName='/search?purpose=for-sale'
                imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
            />
            <Flex flexWrap='wrap'>
                {propertiesForSale?.hits.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
        </Box>
    )
}

export default Home
