import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Movie from "../components/Movie";
import About from "../Pages/About";
import Navigation from "../components/Navigation";
import Detail from "../Pages/Detail";





const App = () => (
  <Routes>
      <Route exact path="/" element={<Home />} /> 
      <Route path="/movie" element={< Movie/>} /> 
      <Route path="/about" element={<About />} />
      <Route path="/narve" element={<Navigation/>} />
      <Route path="/movie-detail" element={<Detail />} />
      {/* <Route path="/movie-detail" component={Detail} /> */}
      
  </Routes>
);

export default App;
