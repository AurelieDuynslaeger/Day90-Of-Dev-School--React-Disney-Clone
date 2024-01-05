import React from 'react';
import { Carousel } from 'antd';
import '../routes/App.css'
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

        <div to={`/movie/${movie.id}`} key={movie.id}>
          <img src={movie.cover} alt={movie.title} style={contentStyle} className='carousel-item'/>
        </div>
      ))}
    </Carousel>

  );
};
export default CarouselHero;