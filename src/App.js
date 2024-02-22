import './App.css';
import Footer from './Components/footer';
import Navbar from './Components/navbar';
import Home from './Pages/home';
import Welcome from './Components/welcome';
import { useEffect, useState } from 'react';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous action (e.g., fetching data)
    const fetchData = async () => {
      // Replace this with your actual asynchronous action
      await new Promise((resolve) => setTimeout(resolve, 7500));
      setLoading(false); // Set loading to false when your action is done
    };

    fetchData();
  }, []);
  
  return (
    <div className="App">
     {loading ? <Welcome /> : (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
