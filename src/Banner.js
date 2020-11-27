import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import Search from './Search.js'
import './Banner.css'


function Banner() {
 
  const [showSearch,setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                
                {showSearch && <Search/>}

                <Button onClick={()=>
                   setShowSearch( !showSearch )}className='banner__searchbar'
                variant='outlined'>{showSearch ? 'hide' : 'Search Dates'}</Button>

            </div>
            <div className='banner__info'>
                 <h1>
                     lets get out and enjoy the holidays
                 </h1>
                 <h5>
                     the best plcae to choose is this place!! Enjoy!!
                 </h5>
                 <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
