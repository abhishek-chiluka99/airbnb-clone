import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <div className = "header">
             <div className="icon"> 
             <Link to='/'>
             <img alt='logo' src='https://seeklogo.com/images/A/airbnb-logo-7F4086530F-seeklogo.com.png' height="60px" widrth = "100px"/>
             </Link>
            </div>
            
             <div className='header__center'>
                 <input type = 'search'></input>
                 <SearchIcon/>
             </div>
             <div className ='header__right'>
                 <p>Become a host</p>
                 <LanguageIcon/>
                 <ExpandMoreIcon/>
                 <Avatar/>
             </div>
           
        </div>
    )
}

export default Header