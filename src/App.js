import './App.css';
//import MyCarousel from './components/MyCarousel';
import Courses from './components/Courses';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Freecourses from './components/Freecourses';
import Getaccess from './components/Getaccess';
import Header from './components/Header';
import Home from './components/Home';
import Learn from './components/Learn';
import Navbar from './components/Navbar';
import Padded from './components/Padded';
import Preview from './components/Preview';
import Top from './components/Top';
import Total from './components/Total';
import Validate from './components/Validate';

function App() {
  return (
    <>
    <Top />
    <Navbar />
    <Header />
    
    <Home />
    <Courses />
    <Freecourses />
    <Padded />
    <Getaccess />
    <Learn />
    <Total />
    <Featured />
    <Validate />
    <Preview />
    <Footer />
   
    
    </>
  );
}

export default App;
