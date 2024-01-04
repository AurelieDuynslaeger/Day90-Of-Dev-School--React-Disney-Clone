import React, { Component } from 'react';
import "../routes/Details.css";
import "../routes/App.css";
import { Tag } from 'antd';
import { Header } from '../components/Header.js';

export default class MovieDetail extends Component {
    state = {
        movie: {}
    }

async getMovie(id){
    const dataMovie = await fetch(`https://elorri.fr/api/disney-plus/movie/${id}`).then(response => response.json());

    this.setState({
        movie: dataMovie
    })
}

componentDidMount(){
    this.getMovie(this.props.match.params.id);
}

  render() {
    return (
      <div className="container">

        <Header/>
    
        <div className="movie-detail">
            <div className="movie-cover">
                <img src={this.state.movie.poster} alt="" />
            </div>
            <div className="movie-description">
                <h2>{this.state.movie.title}</h2>
                <Tag color="#00b9dc">{this.state.movie.company}</Tag>
                <p>{this.state.movie.description}</p>
            </div>
        </div>
      </div>
    )
  }
}
