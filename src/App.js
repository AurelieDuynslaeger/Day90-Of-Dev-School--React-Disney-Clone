import { Component } from "react";
import NewMovie from "./components/NewMovie.js";
import "./routes/App.css";

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

  componentDidMount() {
    this.getNewMovies();
  }
  render() {
    const listNewMovies = this.state.newMovies.map((movie, index) => {
      return (
        <NewMovie key={movie.id} img={movie.poster}/>
      )
    })
    return (
      <div className="container">
        <header><img src="logo.png" alt="" srcset=""/></header>
        <div className="new">{listNewMovies}</div>
      </div>
    )
  }
}