import React, { useState } from 'react';
import './Header.css';
import homeImg from '../../assets/images/home_img.jpg';
import homeImgMulti from '../../assets/images/hero_bg_multi-removebg.png';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import { BiUserCircle } from "react-icons/bi";
import { motion } from 'framer-motion';
import images from '../../assets/logo.png';
import '../../components/Navbar/Navbar';
function Header() {
  const [Toggle, setToggle] = useState(false);
  return (
    <>
      <div className='container-fluid px-0'>
        <div className='home-image-div'>
          <nav className='app__navbar'>
            <div className='app__navbar-logo'>
              <img src={images} alt='logo' />
            </div>

            <ul className='app__navbar-links'>
              {['home', 'products', 'explore', 'contact'].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                  <a href={`#${item}`}>{item}</a>
                  <div />
                </li>
              ))}
            </ul>

            <div className='app__navbar-sign'>
              <button type='button btn btn-primary'>Sign Up</button>
              {/* <BiUserCircle /> */}
            </div>

            <div className='app__navbar-menu'>
              <HiMenuAlt4 onClick={() => setToggle(true)} />

              {Toggle && (
                <motion.div
                  whileInView={{ x: [300, 0] }}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                  <HiX onClick={() => setToggle(false)} />
                  <ul>
                    {['home', 'products', 'explore', 'contact'].map((item) => (
                      <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </nav>
          <img src={homeImg} alt='Home' />
          <div className='home-title'>Welcome to Kaniya kumari</div>

          <div className='home-multi-img'>
            <img src={homeImgMulti} alt='home-multi-img' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
