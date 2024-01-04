import { Component } from "react";
import NewMovie from "../components/NewMovie.js";
import "../routes/App.css";
import { Image } from "antd";
import SuggestMovie from "../components/SuggestMovie.js";

export default class App extends Component {

  state = {
    heroMovies : [],
    newMovies : [],
    suggestMovies : []
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

  componentDidMount() {
    this.getNewMovies();
    this.getSuggestMovies();
  }

  //Trouver tout les animaux provenant d'Afrique
// const findAfrique = zoo.filter(item => {
//   return item.continent === "Afrique";
// });

// const listNewMovies = this.state.newMovies.filter(index => index<7 {
//   return (
//     <NewMovie key={movie.id} img={movie.poster}/>
//   )
// });


  render() {
    const listNewMovies = this.state.newMovies.map((movie, index) => {
      return (
        <NewMovie key={movie.id} id={movie.id} img={movie.poster}/>
      )
    });

    // const listNewMovies = this.state.newMovies.filter(index => index<7 {
//   return (
//     <NewMovie key={movie.id} img={movie.poster}/>
//   )
// });

    const listSuggest = this.state.suggestMovies.map((movie, index) => {
      return (
        <SuggestMovie key={movie.id} id={movie.id} img={movie.poster}/>
      )
    });
    return (
      <div className="container">
        <header>
          <img src="img\logo.png" alt="" srcset=""/>
        </header>
        <div className="carousel">
          {/* <Carousel></Carousel> */}
        </div>
        <div className="studios">
          <div className="studio">
            <Image
              width={150}
              src="img\companies\logo-disney.png"
            />
          </div>
          <div className="studio">
            <Image
              width={150}
              src="img\companies\logo-pixar.png"
            />
          </div>
          <div className="studio">
            <Image
              width={150}
              src="img\companies\logo-marvel.png"
            />
          </div>
          <div className="studio">
            <Image
              width={150}
              src="img\companies\logo-starwars.png"
            />
          </div>
          <div className="studio">
            <Image
              width={150}
              src="img\companies\logo-nationalgeographic.png"
            />
          </div>
        </div>
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
            {listSuggest}
          </div>
        </div>
      </div>
    )
  }
}