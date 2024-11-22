import React from 'react'
import profileImg from '../../assets/profile-img.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import CV from '../../assets/jay-resume.pdf';
import { FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import './home.css';
const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
        <div className='home__container container'>
            <p className='home__subtitle text-cs'>
                Hello, <span>I AM</span>    
            </p>
            <h1 className='home__title text-cs'>
                <span>SRIJAYANTH</span> POTLURI
            </h1>

            <p className="home__job">
                <span className='text-cs'>I Am A</span> <b>Software Engineer</b>
            </p>
            <div className="home__img-wrapper">
                <div className="home__banner">
                  <img src={profileImg} alt="" className='home__profile'/>
                </div>
                <p className='home__data home__data-one'>
                    <span className="text-lg">
                      1<b> +</b>
                    </span>

                    <span className='text-sm text-cs'>
                        Years of <span> Experience</span> 
                    </span>
                </p>
                <p className='home__data home__data-two'>
                    <span className="text-lg">
                        10 
                    </span>

                    <span className='text-sm text-cs'>
                        Completed <span> Projects</span> 
                    </span>
                </p>

                <img src={shapeOne} alt="" className="shape shape__1" />
                <img src={shapeTwo} alt="" className="shape shape__2" />
                <img src={shapeTwo} alt="" className="shape shape__3" />
            </div>

            <p className="home__text">
            Based in Hyderabad, India, with a solid background in Full Stack Development and expertise in Machine Learning, Deep Learning, and Natural Language Processing (NLP).
            </p>
            <div className="home__socials">

              <a href='https://www.instagram.com/jayanth_5513/' className='home__social-link'>
                <FaInstagram/>
              </a>
              <a href='https://x.com/SrijayanthP' className='home__social-link'>
                <FaXTwitter/>
              </a>
              <a href='https://www.linkedin.com/in/srijayanth-potluri-437519259/' className='home__social-link'>
                <FaLinkedin/>
              </a>
              <a href='https://github.com/jayanthpotluri5513' className='home__social-link'>
                <FaGithub/>
              </a>
              <a href='https://leetcode.com/u/srijayanthpotluri/' className='home__social-link'>
                <SiLeetcode/>
              </a>
              </div>

              <div className="home__btns">
                 <a download=''href={CV} className='btn text-cs'>
                    Download CV
                </a>
                <a href="#skills" className='hero__link text-cs'>
                    My skills
                </a>
              </div>

        </div>
         <div className="section__deco deco__left">
           <img src={shapeOne} alt='' className='shape' />
         </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Developer</span>
      </div>
    </section>
  )
}

export default Home