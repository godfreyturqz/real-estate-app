import { HashRouter, Routes, Route} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import NProgress from 'nprogress'
import Home from './pages/Home'

import './styles/globals.css'

import { testBlockchain } from './utils/blockchain/main'

testBlockchain()

const App = () => {

  return (
    <ChakraProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App
