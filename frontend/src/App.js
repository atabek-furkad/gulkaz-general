import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'
import AuthorizePage from './pages/AuthorizePage'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProductsPage />} path="/products" />
          <Route element={<ProductPage />} path="/products/:id" />
          <Route element={<AuthorizePage />} path="/authorize" />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
