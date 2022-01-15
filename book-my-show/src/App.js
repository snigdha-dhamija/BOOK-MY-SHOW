import { Route } from 'react-router-dom';

//axios
import axios from "axios";

//HOC
import DefaultHOC from "./hoc/Default.HOC";
import MovieHOC from "./hoc/Movie.HOC";
//Component
import HomePage from "./pages/Home.page";
import Movie from "./pages/movie.page";
import Plays from "./pages/Plays.page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    //Fragment
    <>
      <DefaultHOC path="/" exact component={HomePage}/>
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays}/>
    </>
  );
}

export default App;
