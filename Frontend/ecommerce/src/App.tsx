import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ProductDetail from './pages/ProductDetail'
import ProductList from './pages/ProductList'

function App() {
  return (
    <>  
    <Navbar/>
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
    </Routes>
    </>
  )
}

export default App
