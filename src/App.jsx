import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Header from './navbar/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App
