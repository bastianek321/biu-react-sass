import React from "react"
import Nav from "./Nav"

import './Header.scss'

export default function Header({text, items}){
    return (
        <header className="Header">
            <Nav items={items}/>
            <h1>{text}</h1>
        </header>
    )
}