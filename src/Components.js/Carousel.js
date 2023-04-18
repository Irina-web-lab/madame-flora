import { useState } from 'react';
import { dataCarousel } from '../dataCarousel';
import leftArrow from '../images.js/car-images.js/arrow-left.png';
import rightArrow from '../images.js/car-images.js/arrow-right.png';

function Carousel() {
    const [slide, setSlide] = useState(0);

    const prevSlide = () => {
        setSlide(slide => {
            slide--;
            if (slide < 0) {
                slide = dataCarousel.length - 1;
            }
            return slide;
        })
    }

    const nextSlide = () => {
        setSlide(slide => {
            slide++;
            if (slide > dataCarousel.length - 1) {
                slide = 0;
            }
            return slide;
        });
    }

    const moveDot = (index) => {
        setSlide(index);
    }

    return (
        <div className='Carousel-container'>
            <div className='Carousel-main'>
            {dataCarousel.map((object, index) => {
                const {image} = object;
                return (
                    <div key={index} >
                        <div className={slide === index ? 'active-anim' : 'Carousel-main-cont'}> 
                        <div className='Carousel-flower-cont'> 
                            <img className='Carousel-pic' src={image}  width="900px" alt='carousel pic'/>
                        </div>
                        </div>
                    </div>
                )
            })}
            </div>
            <div className='Carousel-arrow-container'>
                <button className='Carousel-arrowBtn arrow-leftBtn' onClick={prevSlide}>
                    <img src={leftArrow} width="40px" height="40px" alt='arrowLeft'/></button>
                    <div className='Carousel-dot-container'>
                        {dataCarousel.map((obj, index) => {
                            const {dotPic} = obj;
                            return (
                                <div key={index}>
                                    <img src={dotPic} alt='dot'
                                    onClick={() => moveDot(index)}
                                    className={`${slide === index ? 'Carousel-dotActive' : 'Carousel-dot'}`}/>
                                </div>
                            )
                        })}
                    </div>
                <button className='Carousel-arrowBtn arrow-rightBtn' onClick={nextSlide}>
                    <img src={rightArrow} width="40px" height="40px" alt='arrowRight'/></button>
            </div>
        </div>
    )
}

export default Carousel;



