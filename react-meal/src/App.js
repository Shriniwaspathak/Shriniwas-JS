import react from 'react';
import NavBAr from './Components/NavBar/NavBAr';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catogeries from './Components/Categories/Catogeries';
import HomePage from './Components/HomePage/HomePage';
import RandomMeal from './Components/RandomMeal/RandomMeal';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBAr />
        <Routes>
          <Route exact path='/' Component={<HomePage />} />
          <Route exact path='/catogeries' Component={<Catogeries />} />
          <Route exact path='/random' Component={<RandomMeal />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
