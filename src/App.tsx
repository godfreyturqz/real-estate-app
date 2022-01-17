import { HashRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import NProgress from 'nprogress'
import Home from './pages/Home'

import './styles/globals.css'


const App = () => {

  return (
    <ChakraProvider>
      <HashRouter>
        <Home/>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App
