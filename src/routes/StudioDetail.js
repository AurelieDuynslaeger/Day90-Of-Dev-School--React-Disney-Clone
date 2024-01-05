import React, { Component } from 'react'
import "../routes/Details.css";
import "../routes/App.css";
import { Header } from '../components/Header.js';
import { Link } from 'react-router-dom/cjs/react-router-dom.js';

export default class StudioDetail extends Component {
    state = {
        movies : [], 
        logoPath: ''
    }

async getCompanyMovies(company) {
    const dataCompany = await fetch (`https://elorri.fr/api/disney-plus/company/${company}`).then(response => response.json());

    this.setState({
        movies: dataCompany,
        logoPath: `../assets/companies/logo-${company.toLowerCase()}.png`
    })
}

componentDidMount(){
    this.getCompanyMovies(this.props.match.params.name)
}
  render() {
    const logoPath = this.state.logoPath;
    const listCompany = this.state.movies.map((movie, index) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
            <li><img src={movie.poster} alt="" className='movie-poster'/></li>
        </Link>
    ))
    return (
        <div className="container">
        <Header/>
          <div className="company-details">
            <div className="company-title">
            {logoPath && <img src={logoPath} alt="Studio Logo" className='studio-logo' />}
                <h6>vous présente tout son catalogue</h6>
            </div>
            <div className="company-list">
                    {listCompany}
            </div>
        </div>
    </div>
    )
  }
}
