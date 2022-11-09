import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import { UserDataProvider } from './context/UserContext'

const App = () => {
  return (
    <div className="App">
      <UserDataProvider>
        <Router>
          <Header />
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<ProductsPage />} path="/products" />
            <Route element={<ProductPage />} path="/products/:id" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<ProfilePage />} path="/profile" />
          </Routes>
          <Footer />
        </Router>
      </UserDataProvider>
    </div>
  )
}

export default App
