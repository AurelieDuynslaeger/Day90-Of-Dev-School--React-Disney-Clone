import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Studios extends Component {
  render() {
    return (
      <div className="studios">
        <Link to="/company/disney" className="studio">
          <img src="img/companies/logo-disney.png" alt="" srcSet="" className='studio-logo' />
        </Link>
        <Link to="/company/marvel" className="studio">
          <img src="img/companies/logo-marvel.png" alt="" srcSet="" className='studio-logo' />
        </Link>
        <Link to="/company/pixar" className="studio">
          <img src="img/companies/logo-pixar.png" alt="" srcSet="" className='studio-logo' />
        </Link>
        <Link to="/company/starwars" className="studio">
          <img src="img/companies/logo-starwars.png" alt="" srcSet="" className='studio-logo' />
        </Link>
        {/* <Link to="/company/nationalgeographic" className="studio">
          <img src="img/companies/logo-nationalgeographic.png" alt="" srcSet="" className='studio-logo' />
        </Link> */}
      </div>
    );
  }
}

export default Studios;
