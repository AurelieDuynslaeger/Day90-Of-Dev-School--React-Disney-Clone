import React from 'react';
import { Carousel } from 'antd';
import '../routes/App.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const contentStyle = {
  margin: 0,
  height: '350px',
  textAlign: 'center',
};
const CarouselHero = ({ heroMovies }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    
    <Carousel afterChange={onChange}>
      {heroMovies.map((movie) => (

        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <img src={movie.cover} alt={movie.title} style={contentStyle} className='carousel-item'/>
        </Link>
      ))}
    </Carousel>

  );
};
export default CarouselHero;