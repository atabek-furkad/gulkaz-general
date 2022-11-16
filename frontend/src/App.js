import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage'

import Protected from './components/Protected'
import ProfilePage from './pages/ProfilePage'

import { UserDataProvider } from './context/UserContext'

const App = () => {
  return (
    <div className="App">
      <UserDataProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route element={<HomePage />} path="/" />

            <Route
              path="/profile"
              element={
                <Protected>
                  <ProfilePage />
                </Protected>
              }
            />
            <Route element={<ProductPage />} path="/products/:id" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<ErrorPage />} path="/*" />
          </Routes>
          <Footer />
        </Router>
      </UserDataProvider>
    </div>
  )
}

export default App
