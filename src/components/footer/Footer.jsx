import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container grid">
            <div className="footer__socials">

              <a href='https://www.instagram.com/jayanth_5513/' className='footer__social-link'>
                <FaInstagram/>
              </a>
              <a href='https://x.com/SrijayanthP' className='footer__social-link'>
                <FaXTwitter/>
              </a>
              <a href='https://www.linkedin.com/in/srijayanth-potluri-437519259/' className='footer__social-link'>
                <FaLinkedin/>
              </a>
              <a href='https://github.com/jayanthpotluri5513' className='footer__social-link'>
                <FaGithub/>
              </a>
              </div>
              <p className="footer__copyright text-cs">&copy; 2024 
                <span> All Rights Reserved.</span>
              </p>
              <p className="footer__copyright text-cs">Developed by
                <span> Srijayanth Potluri</span>
              </p>
        </div>
    </footer>
  )
}

export default Footer