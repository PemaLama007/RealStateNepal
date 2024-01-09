import React from 'react'
import "swiper/css"
import { useSwiper, Swiper, SwiperSlide} from 'swiper/react';
import './Residencies.css'
import data from '../../../slider.json'
import { sliderSettings } from './ResSlide';

const Residencies=() =>{
  return (
    <section className='r-wrapper'>
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart ">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButtons/>
                   {data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className='flexColStart r-card'>
                                <img src={card.image} alt="Home" />
                                <span className='secondaryText r-price'>
                                    <span className='text-warning'>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies
const SliderButtons = ()=>{
    const swiper = useSwiper();
    return (
        <div className='flexCenter r-button'>
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>

        </div>
    )
}