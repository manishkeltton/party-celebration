import './App.css';
import Footer from './components/Home/footer/Footer';
import RouteComponent from './components/Home/navbar/RouteComponent/RouteComponent';
import CarouselSection from './components/Home/section/CarouselComponent/CarouselSection';
import MiddleSection from './components/Home/section/MiddleSection';

function App() {
  return (
    <div>
      <RouteComponent />
      <CarouselSection />
      <MiddleSection />
    </div>
  );
}

export default App;
