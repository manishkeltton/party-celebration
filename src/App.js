import './App.css';
import Footer from './components/Home/footer/Footer';
import NavBar from './components/Home/navbar/NavBar';
import FIrstSection from './components/Home/section/FIrstSection';
import SmallerCarousel from './components/Home/section/SmallerCarousel';

function App() {
  return (
    <div>
      <NavBar />
      <SmallerCarousel />
      <FIrstSection />
      <Footer />
    </div>
  );
}

export default App;
