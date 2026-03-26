import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import PostDetails from './pages/postDetailsPage'
import FavPage from './pages/FavPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/favorites" element={<FavPage />} />
      </Routes>

    </BrowserRouter>
  )
}