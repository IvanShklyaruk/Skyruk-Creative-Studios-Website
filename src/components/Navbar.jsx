import React, { useState } from 'react';
import Logo from '../assets/SkyrukLogo.png'; // Ensure the logo path is correct
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'> 
        <div className='leftSide' id={openLinks ? 'open' : 'close'}>
            <img src={Logo} alt="Logo"/>
            <div className='hiddenLinks'>
              <Link to='/'> Home </Link>
              <Link to='/library'> Library </Link>
              <Link to='/about'> About </Link> 
            </div>
        </div>
        <div className='rightSide'>
          <Link to='/'> Home </Link>
          <Link to='/library'> Library </ Link>
          <Link to='/about'> About </Link> 
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>     
        </div>
    </div>
  );
}

export default Navbar