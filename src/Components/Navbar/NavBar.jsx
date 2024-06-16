import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const NavBar = () => {

  const [navBg, setNavBg] =useState(false);
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 700 ? setNavBg(true) : setNavBg(false);
    })
  }, []);

  const [menu, setMenu] = useState(false);

  const toggle =()=>{
    menu ? setMenu(false) : setMenu(true);
  }

  return (
    <nav className={`container ${navBg ? 'darknav' : ''}`}>
      <img src={logo} alt="logo" className='logo' />
      <ul className={menu ? '' : 'hide-menu'}>
        <li> <Link to='hero' offset={-120} smooth={true} duration={500} >Home</Link></li>
        <li><Link to='programs' offset={-280} smooth={true} duration={500} >Program</Link></li>
        <li><Link to='about' offset={-120} smooth={true} duration={500} >About</Link></li>
        <li><Link to='campus' offset={-290} smooth={true} duration={500} >campus</Link></li>
        <li><Link to='testimonial' offset={-260} smooth={true} duration={500} >Testimony</Link></li>
        <li><Link to='contact' offset={-280} smooth={true} duration={500} ><button className='btn'>Contact</button></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggle} />
    </nav>
  )
}

export default NavBar
