import './App.css';
import NavBar from './components/Home/navbar/NavBar';
import FIrstSection from './components/Home/section/FIrstSection';
import SmallerCarousel from './components/Home/section/SmallerCarousel';

function App() {
  return (
    <div>
      <NavBar />
      <SmallerCarousel />
      <FIrstSection />
    </div>
  );
}

export default App;
