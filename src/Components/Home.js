import React from "react";
import './home.css'
import {Link} from 'react-router-dom'

export default function Home(){
    const setTitle = () => {
        document.title = "React Exercises"
    }
    setTitle()
    return(
        <div className="flexDiv">
            <h3>React/Vue exercises</h3>
            <a href="/exercise-1">Exercise 1</a>
            <a href="/exercise-2">Exercise 2</a>
        </div>
    )
}