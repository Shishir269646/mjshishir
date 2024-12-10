import { useState } from 'react'
import logoimg from '../../assets/img/m.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function navbar() {


  const [navstky, setNavstky] = useState("");

  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      setNavstky("sticky");
    }
    else {
      setNavstky("")
    }
  })



  return (
    <div className={`navbar bg-[#f3f0ea] top-0 z-50 ${navstky} text-black`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#service'>Service</a></li>
            <li><a href='#project'>Project</a></li>
            <li><a href='#timeline'>Timeline</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        <img className="h-16 w-28" src={logoimg}></img>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#service'>Service</a></li>
          <li><a href='#project'>Project</a></li>
          <li><a href='#timeline'>Timeline</a></li>
          <li><a href='#contact'>Contact</a></li>

        </ul>
      </div>
      <div className="navbar-end space-x-3">
        <FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faXTwitter}/>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faLinkedin}/>
      </div>
    </div>
  )
}

export default navbar
