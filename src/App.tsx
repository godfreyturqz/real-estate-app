import { HashRouter, Routes, Route} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import NProgress from 'nprogress'
// COMPONENTS
import Layout from './components/Layout'
import Home from './pages/Home'
import Search from './pages/Search'

import './styles/globals.css'
import { testBlockchain } from './utils/blockchain/main'

testBlockchain()

const App = () => {

  return (
    <ChakraProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
          </Routes>
          </Layout>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App
