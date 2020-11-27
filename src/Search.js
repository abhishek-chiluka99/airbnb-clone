import React, { useState } from 'react'
import './Search.css'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker}  from "react-date-range";
import PeopleIcon from '@material-ui/icons/People'
import { Button } from '@material-ui/core';


function Search() {

    const [startDate,setstartDate] = useState(new Date());
    const [endDate,setendDate] = useState(new Date());

    const selectionRange = {
        startDate : startDate,
        endDate : endDate,
        key : "selection",
    };

    function handleSelect(range){
        setstartDate(range.selection.startDate);
        setendDate(range.selection.endDate);
    }

    return (
        <div className='search'>
           <DateRangePicker ranges={[selectionRange]}
            onChange={handleSelect}/>
            <h2>
                number of guests
                <PeopleIcon/>
            </h2>
            <input min={0}
            defaultValue={2}/>
            <Button>Airbnb</Button>
           }  
        </div>
    )
}

export default Search
