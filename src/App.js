import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

function App() {
  return (
   <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Blog/>
      <Contact/>
      <Footer/>
   </div>
  );
}

export default App;
