import React from 'react'
import "./Cat.css"
import CountUp from "react-countup";
const Cat = () => {
    return (
        <section className='text-white'>
            <div className="paddings py-5 innerWidth flexCenter cat-container">
                {/* left container */}
                <div className="flexColStart cat-left">
                    <div className="cat-title">
                        <div className="orange-circle" />
                        <h1 className='z-1'>Discover <br /> Most Suitable <br /> Property</h1>
                    </div>

                    <div className="flexColStart cat-dis text-secondary">
                        <span>
                            Find a variety of properties that suit you very easilty
                        </span>
                        <span>
                            Forget all difficulties in finding a residence for you
                        </span>
                    </div>
                    <div className="search-bar">
                        <i className="bi bi-geo-alt-fill text-primary fs-5" />
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>
                    <div className='flexCenter stats gap-5'>
                        <div className="flexColStart stat">
                            <span className='fs-3'>
                                <CountUp start={5000} end={8000} duration={4} />
                                <span className='text-warning'>+</span>
                            </span>
                            <span className='text-secondary'>
                                Premium Product
                            </span>
                        </div>
                        {/* second count */}
                        <div className="flexColStart stat">
                            <span className='fs-3'>
                                <CountUp start={2000} end={3688} duration={4} />
                                <span className='text-warning'>+</span>
                            </span>
                            <span className='text-secondary'>
                            Happy Customer
                            </span>
                        </div>
                        {/* third count */}
                        <div className="flexColStart stat">
                            <span className='fs-3'>
                                <CountUp end={28}/>
                                <span className='text-warning'>+</span>
                            </span>
                            <span className='text-secondary'>Award Winnings</span>
                        </div>
                    </div>
                </div>

                        {/* right category */}
                <div className="ms-auto flexCenter cat-right">
                    <div className="image-container">
                        <img src="src/assets/hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cat