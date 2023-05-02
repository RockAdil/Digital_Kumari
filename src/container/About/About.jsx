import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-bootstrap';

import './About.css';
import { images } from '../../constants';

const About = () => {
  return (
    // <section className='container-fluid'>
    //   <div className='about-container'>
    //     <div className='container'>
    //       <div className='row'>
    //         <div className='col-6'></div>
    //         <div className='col-6'></div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <h2 className='head-text' style={{ padding: '2rem 0' }}>
        Trending Places
      </h2>
      <div className='app__about'>
        <div className='about__carousel-img'>
          <Carousel>
            <Carousel.Item className='caro-item'>
              <img
                className='d-block w-100'
                src={images.lemur}
                alt='First slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={images.Vivekananda}
                alt='Second slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={images.thiruvalluvar}
                alt='Third slide'
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='about__carousel-content'>
          <h2 className='head-text'>Lemur Beach</h2>
          <p className='p-text'>
            Lemur Beach also known as Ganapathipuram beach, located in
            Kanyiakumari, is one of the most popular tourist destinations in
            southern India. Known for its pristine beaches and breathtaking
            views, this beach offers visitors a chance to relax and unwind while
            enjoying the natural beauty of the area.
          </p>
          <p className='rating'>
            Rating
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star'></span>
            <span class='fa fa-star'></span>
          </p>
          <div className='trip-btn'>
            <button type='button' class='btn btn-primary btn-lg'>
              Start Trip
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
