import React, { Component } from 'react'
import CSS from '../App.css'

const Filter = (props) => {

    const show = props.greased ? 'Show Clean Pigs' : 'Show Greasy Pigs'

    return(
    <div>
        <button onClick={props.handleClick}>{show}</button>
        <button onClick={props.handleSortName}>Sort by Name</button>
        <button onClick={props.handleSortName}>Sort by Weight</button>
        <button onClick={props.handleHidden}>Hide Me!</button>
    </div>        
    )
}

export default Filter
