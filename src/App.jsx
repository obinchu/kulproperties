import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Header from './navbar/Header'

function App() {

  return (
    <div>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
