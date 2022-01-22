import { Box } from '@chakra-ui/react'
// COMPONENTS
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {

  return (
    <>
      <div>
        <title>Real Estate</title>
      </div>
      <Box maxWidth='1280px' m='auto'>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  )
}

export default Layout