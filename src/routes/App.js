import { Component } from "react";
import "../routes/App.css";
import NewMovie from "../components/NewMovie.js";
import SuggestMovie from "../components/SuggestMovie.js";
import { Header } from "../components/Header.js";
import Studios from "../components/Studios.js";
import Carousel from "../components/Carousel.js";



export default class App extends Component {

  state = {
    heroMovies : [],
    newMovies : [],
    suggestMovies : [], 
  };

  async getNewMovies(){
    const newMovies = await fetch("https://elorri.fr/api/disney-plus/movies").then(response => response.json());

    this.setState({
      newMovies: newMovies
    });
  }

  async getSuggestMovies() {
    const suggestMovies = await fetch("https://elorri.fr/api/disney-plus/suggest").then(response => response.json());

    this.setState({
      suggestMovies:suggestMovies
    })
  }

  async getHeroMovies (){
    const carouselMovies = await fetch("https://elorri.fr/api/disney-plus/movies").then(response => response.json());

    const highlightMovies = carouselMovies.slice(0,3).filter(movie => movie.highlighted ===true);

    this.setState({
      heroMovies: highlightMovies
    })
  }

  componentDidMount() {
    this.getNewMovies();
    this.getSuggestMovies();
    this.getHeroMovies();
  }

  render() {
    const listNewMovies = this.state.newMovies.slice(0,6).map((movie, index) => {
      return (
        <NewMovie key={movie.id} id={movie.id} img={movie.poster}/>
      )
    });

    const listSuggest = this.state.suggestMovies.slice(0,3).map((movie, index) => {
      return (
        <SuggestMovie key={movie.id} id={movie.id} img={movie.cover}/>
      )
    });

    
    return (
      <div className="container">
        <Header/>

        <Carousel heroMovies={this.state.heroMovies}/>
        
       <Studios />
        <div className="new">
          <h3>Nouveautés</h3>
          <div className="new-movies">
            <div className="movie">
              {listNewMovies}
            </div>
          </div>
        </div>
        <div className="suggest">
          <h3>Suggestions</h3>
          <div className="suggest-movies">
            <div className="movie">
              {listSuggest}
            </div>
          </div>
        </div>
      </div>
    )
  }
}