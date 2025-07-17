import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
const App = () => {
  return (
    <div className=' overflow-hidden'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
