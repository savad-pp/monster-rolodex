import React from 'react'
import './search-box.style.css'

export const Searchbox = ({placeholder,handleChange}) =>(
    <input type="search" placeholder={placeholder} className="search"
    onChange={handleChange}/>
)