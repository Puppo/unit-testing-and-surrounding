import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ExampleOne from './pages/01-examples'
import ExampleTwo from './pages/02-examples'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/example-one" element={<ExampleOne />} />
        <Route path="/example-two" element={<ExampleTwo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
