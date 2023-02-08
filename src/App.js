import './App.css';
//import Carousel from './components/Carousel';
import Courses from './components/Courses';
import Featured from './components/Featured';
import Freecourses from './components/Freecourses';
import Getaccess from './components/Getaccess';
import Header from './components/Header';
import Home from './components/Home';
import Learn from './components/Learn';
import Navbar from './components/Navbar';
import Padded from './components/Padded';
import Top from './components/Top';
import Total from './components/Total';

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

    </>
  );
}

export default App;
