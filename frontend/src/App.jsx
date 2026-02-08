import './App.css'
import Home from './pages/Home'
import Header from './components/Home/header'
import Footer from './components/Home/Footer'
import ProductDetails from './pages/ProductDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
