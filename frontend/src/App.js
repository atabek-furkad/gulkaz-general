import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Products from './components/Products'
import ProductPage from './components/ProductPage'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Products />} path="/products" />
        <Route element={<ProductPage />} path="/products/:id" />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
