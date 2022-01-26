import { useContext } from 'react'
import { Box, Icon, Flex } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
      />
    </Flex>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
    />
    </Flex>
  )
}

interface ImageSrollbarType {
  data: {
    id: number
    url: string
  }[]
}

const ImageSrollbar: React.FC<ImageSrollbarType> = ({ data }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data?.map((item) => (
        <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
          <img placeholder="blur" loading='lazy' src={item.url} style={{width:"1000px", height:"500px"}} />
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default ImageSrollbar
