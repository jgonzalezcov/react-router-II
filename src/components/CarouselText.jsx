import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const CarouselText = (props) => {
  return (
    <Carousel
      className="carousel-container"
      controls={false}
      indicators={false}
      pause={false}
      keyboard={false}
    >
      {props.specie ? (
        props.specie.map((z, index) => (
          <Carousel.Item className="carousel-item" interval={5000} key={index}>
            <p className="text-carousel">{z.flavor_text} </p>
          </Carousel.Item>
        ))
      ) : (
        <Carousel.Item className="carousel-item" interval={5000}>
          <p className="text-carousel">
            Sin Información disponible para este Pokémon
          </p>
        </Carousel.Item>
      )}
    </Carousel>
  )
}

export default CarouselText
