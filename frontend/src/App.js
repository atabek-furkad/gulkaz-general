import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import ProductsList from './components/ProductsList'
import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import ErrorPage from './pages/ErrorPage'
import { UserDataProvider } from './context/UserContext'

const App = () => {
  return (
    <div className="App">
      <UserDataProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route element={<HomePage />} path="/" />
            {/* <Route element={<ProductsPage />} path="/products" /> */}
            <Route element={<ProductPage />} path="/products/:id" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<ProfilePage />} path="/profile" />
            <Route element={<ErrorPage />} path="/*" />
          </Routes>
          <Footer />
        </Router>
      </UserDataProvider>
    </div>
  )
}

export default App
