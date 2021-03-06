import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'

import DefaultImage from '../assets/images/house.jpeg'

interface PropertyType {
    property: { 
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
    }
}

const Property: React.FC<PropertyType> = ({ 
  property: { 
    coverPhoto,
    price, 
    rentFrequency, 
    rooms, 
    title, 
    baths, 
    area, 
    agency, 
    isVerified, 
    externalID  
  } 
}) => {

  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link to={`/property/${externalID}`}>
      <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
        <Box>
          <img
            loading='lazy'
            src={coverPhoto ? coverPhoto.url : DefaultImage} 
            style={
              {
                width: "400px",
                height: "260px",
                // visibility: imageLoaded ? 'visible' : 'hidden',
                filter: imageLoaded ? 'blur(0)' : 'blur(4px)'
              }
            }
            onLoad={() => setImageLoaded(true)}
          />
        </Box>
        <Box w='full'>
          <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center'>
              <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
              <Text fontWeight='bold' fontSize='lg'>PHP {price}{rentFrequency && `/${rentFrequency}`}</Text>
            </Flex>
            <Box>
              <Avatar size='sm' src={agency?.logo?.url}></Avatar>
            </Box>
          </Flex>
          <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
          <Text fontSize='lg'>
            {title.length > 30 ? title.substring(0, 30) + '...' : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  )
}

export default Property