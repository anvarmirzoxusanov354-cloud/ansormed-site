import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Reception from './components/Reception';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Services />
      <Reception />
      <Footer />
    </div>
  );
}

export default App;