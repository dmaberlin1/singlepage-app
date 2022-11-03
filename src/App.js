import {Route, Routes} from "react-router-dom";
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Movie} from "./pages/Movie";
import './App.css';

function App() {
  return (
    <>
    <Header></Header>
      <main className='container content'>
      <Routes>
        <Route  exact path='/home' element={<Home></Home>} >   </Route>
        <Route exact path='/about' element={<About></About>} >   </Route>
        <Route exact path='/contact' element={<Contact></Contact>} >   </Route>
        <Route exact path='/movies/:title' element={<Movie></Movie>} >   </Route>

      </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
