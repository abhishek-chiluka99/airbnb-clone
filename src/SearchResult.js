import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from "@material-ui/icons/Stars"

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
       
        <div className='searchresult'>
            <img src={img} alt="pic"/>
            <FavoriteBorderIcon 
            className='searchresult__heart'/>
            <div classNam='searchresult__info'>
                <div className='searchresult__infoTop'>
                    <p>{location}</p>
                    <h3>{title} </h3>
                    <p></p>
                    <p>{description}</p>
                </div>
                <div className='searchresult__bottom'>
                    <div className='searchresult__stars'>
                    <StarIcon className='searchresult__star'/>
                        <p>
                            <strong>{star}</strong>
                        </p>
                        </div>
                        <div className='searchresults__price'>
                            <h2>{price}</h2>
                            <p>{total}</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult