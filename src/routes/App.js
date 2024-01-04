import { Component } from "react";
import NewMovie from "../components/NewMovie.js";
import "../routes/App.css";
import { Card, Image } from "antd";
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

  render() {
    const listNewMovies = this.state.newMovies.map((movie, index) => {
      return (
        <NewMovie key={movie.id} img={movie.poster}/>
      )
    });

    const listSuggest = this.state.suggestMovies.map((movie, index) => {
      return (
        <SuggestMovie key={movie.id} img={movie.poster}/>
      )
    });
    return (
      <div className="container">
        <header>
          <img src="logo.png" alt="" srcset=""/>
        </header>
        <div className="carousel">
          {/* <Carousel></Carousel> */}
        </div>
        <div className="studios">
          <Image
            width={250}
            src="logo-disney.png"
          />
          <Card style={{ 
            width:250,
            height: 150,}}
            cover={<img alt="logo " src="logo-disney.png" />} 
          ></Card>
          <Card style={{ 
            width:250,
            height: 150,
          }}>
            <img src="" alt="" srcset="" />
          </Card>
          <Card style={{ 
            width:250,
            height: 150,
          }}>
            <img src="" alt="" srcset="" />
          </Card>
          <Card style={{ 
            width:250,
            height: 150,
          }}>
            <img src="" alt="" srcset="" />
          </Card>
        </div>
        <div className="new">
          <h3>Nouveautés</h3>
          <div className="new-movies">
            {listNewMovies}
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