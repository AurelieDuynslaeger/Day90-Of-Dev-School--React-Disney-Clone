import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoDisney from '../assets/companies/logo-disney.png';
import logoMarvel from '../assets/companies/logo-marvel.png';
import logoPixar from '../assets/companies/logo-pixar.png';
import logoStarwars from '../assets/companies/logo-starwars.png';

class Studios extends Component {
  render() {
    return (
      <div className="studios">
        <Link to="/company/disney" className="studio">
          <img src={logoDisney} alt="" srcSet="" className='studio-logo' />
        </Link>
        <Link to="/company/marvel" className="studio">
          <img src={logoMarvel} alt="" srcSet="" className='studio-logo' />
        </Link>
        <Link to="/company/pixar" className="studio">
          <img src={logoPixar} alt="" srcSet="" className='studio-logo' />
        </Link>
        <Link to="/company/starwars" className="studio">
          <img src={logoStarwars} alt="" srcSet="" className='studio-logo' />
        </Link>
        {/* <Link to="/company/nationalgeographic" className="studio">
          <img src="img/companies/logo-nationalgeographic.png" alt="" srcSet="" className='studio-logo' />
        </Link> */}
      </div>
    );
  }
}

export default Studios;
