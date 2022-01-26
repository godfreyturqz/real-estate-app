import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Box, Flex, Spacer, Text } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'

import { baseUrl, fetchApiDetails } from '../utils/fetchApi'
import ImageScrollbar from '../components/ImageScrollbar'

import { ApiDataDetails } from '../types'


const PropertyDetails: React.FC = () => {
    
    const [details, setDetails] = useState<ApiDataDetails | null>(null)
    const params = useParams()

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetchApiDetails(`${baseUrl}/properties/detail?externalID=${params.id}`)
            setDetails(data ? data : null)
        }
        fetchData()
    
    }, [])
    
    return (
        <Box maxWidth='1000px' margin='auto' p='4'>
            {details && <ImageScrollbar data={details?.photos} />}
            <Box w='full' p='6'>
            <Flex paddingTop='2' alignItems='center'>
                <Box paddingRight='3' color='green.400'>{details?.isVerified && <GoVerified />}</Box>
                <Text fontWeight='bold' fontSize='lg'>
                PHP {details?.price} {details && `/${details?.rentFrequency}`}
                </Text>
                <Spacer />
                <Avatar size='sm' src={details?.agency?.logo?.url}></Avatar>
            </Flex>
            <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                {details?.rooms}<FaBed /> | {details?.baths} <FaBath /> | {details && millify(details?.area)} sqft <BsGridFill />
            </Flex>
            </Box>
            <Box marginTop='2'>
            <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{details?.title}</Text>
            <Text lineHeight='2' color='gray.600'>{details?.description}</Text>
            </Box>
            <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
            <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                <Text>Type</Text>
                <Text fontWeight='bold'>{details?.type}</Text>
            </Flex>
            <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                <Text>Purpose</Text>
                <Text fontWeight='bold'>{details?.purpose}</Text>
            </Flex>
            {details && (
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
                <Text>Furnishing Status</Text>
                <Text fontWeight='bold'>{details?.furnishingStatus}</Text>
                </Flex>
            )}
            </Flex>
            <Box>
            {details?.amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
                <Flex flexWrap='wrap'>
                {details?.amenities?.map((item) => (
                    item?.amenities?.map((amenity) => (
                        <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                        {amenity.text}
                        </Text>
                    ))
                ))}
                </Flex>
            </Box>
        </Box>
    )
}

export default PropertyDetails
