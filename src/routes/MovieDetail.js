import React, { Component } from 'react'

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
        <div className="movie-detail">
            <div className="movie-cover">
                <img src={this.state.movie.poster} alt="" />
            </div>
            <div className="movie-description">
                <h2>{this.state.movie.title}</h2>
                <span>{this.state.movie.company}</span>
                <p>{this.state.movie.description}</p>
            </div>
        </div>
      </div>
    )
  }
}
