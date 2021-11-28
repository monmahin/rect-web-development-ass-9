import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,Switch, Route} from "react-router-dom";
import About from './components/About/About';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CourseInfo from './components/CourseInfo/CourseInfo';
import HomeInfo from './components/HomeInfo/HomeInfo';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="Apps">
     <Router>
        <Header />
        
      
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/home-info">
            <HomeInfo/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
         
          <Route  path="/home-info/:homeId">
            <CourseInfo/>
          </Route>
          {/* <Route path="/person">
            <Person></Person>
          </Route> */}
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
