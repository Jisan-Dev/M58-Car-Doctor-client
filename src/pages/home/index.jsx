import About from './components/About';
import Banner from './components/Banner';
import Services from './components/services/Services';

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Home;
