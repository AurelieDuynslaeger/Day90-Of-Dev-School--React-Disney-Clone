import { Component } from "react";
import "../routes/App.css";
import { Header } from "../components/Header.js";
import Studios from "../components/Studios.js";
import CarouselHero from "../components/CarouselHero.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";



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

    const highlightMovies = carouselMovies.filter(movie => movie.highlighted ===true).slice(0,3);
    console.log("heroMovies:", highlightMovies);
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
        <Link to={`/movie/${movie.id}`}><li><img src={movie.poster} alt="" srcset="" /></li></Link>
      )
    });

    const listSuggest = this.state.suggestMovies.slice(0,3).map((movie, index) => {
      return (
        <Link to={`/movie/${movie.id}`}><li><img src={movie.cover} alt="" srcset="" /></li></Link>
      )
    });

    
    return (
      <div className="container">
        <Header/>

        <CarouselHero heroMovies={this.state.heroMovies}/>
        
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