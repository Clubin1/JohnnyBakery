import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './Components/Home/HomePage';
import OrderPage from './Components/Orders/OrderPage';
import Navbar from './Components/UI/Navbar';
import Footer from './Components/UI/Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/order" component={OrderPage}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
