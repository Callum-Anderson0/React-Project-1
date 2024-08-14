import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Projects />  
    </div>
  );
}

export default App;
