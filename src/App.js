import './App.css';
import Footer from './components/Home/footer/Footer';
import NavBar from './components/Home/navbar/NavBar';
import FirstSection from './components/Home/section/CarouselSection';
import MiddleSection from './components/Home/section/MiddleSection';

function App() {
  return (
    <div>
      <NavBar />
      <FirstSection />
      <MiddleSection />
    </div>
  );
}

export default App;
