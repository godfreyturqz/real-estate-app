import React from 'react'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


interface BannerType {
    purpose: string
    title1: string
    title2: string
    desc1: string
    desc2: string
    buttonText: string
    linkName: string
    imageUrl: string
}

const Banner: React.FC<BannerType> = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => {
    return (
        <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
            <img src={imageUrl} style={{width: "500px", height: "300px"}} alt='banner'/>
            <Box p='5'>
            <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
            <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
            <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
            <Button fontSize='xl' bg="blue.300" color="white">
                {/* <Link to={linkName}><a>{buttonText}</a></Link> */}
                <Link to={linkName}>{buttonText}</Link>
            </Button>
            </Box>
        </Flex>
    )
}

export default Banner
