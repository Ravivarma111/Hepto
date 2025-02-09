
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {Route,Routes} from 'react-router-dom';
import Home  from './pages/home';
import Contact from './pages/contactUs';
import About from './pages/aboutUs';
import Login from './pages/login';
import SignUp from './pages/signup'

function App() {
  return (
    <div className="App">
      <div className="headerClass">
      <Header/>
      </div>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contactUs' element={<Contact/>}></Route>
        <Route path='/aboutUs' element={<About/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <div className="footerClass">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
