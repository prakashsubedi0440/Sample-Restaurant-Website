import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import carouselLists from "./carouselLists";


function createCarousel(carouselList) {
    return(
        
            <Carousel.Item>
                <img
                className="d-block carouselImg"
                src={carouselList.imgURL}
                alt={carouselList.altImgTxt}
                />
                <Carousel.Caption>
                <h3>{carouselList.heading}</h3>
                <p>{carouselList.content}</p>
                </Carousel.Caption>
            </Carousel.Item>
        
    );
}

function ImageSlides() {
    return (
        <Carousel className="carouselContainer">
            {carouselLists.map(createCarousel)};
        </Carousel> 
    );
}


export default ImageSlides;
