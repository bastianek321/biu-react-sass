import React from "react"

import './Nav.scss'

export default function Nav({items}){
    return (
        <nav className="Nav">
            <h3>Navigation bar</h3>
            <ul>{items.map((item, i) =>
                <li key={i}> {item} </li>
            )}</ul>
        </nav>
    )
}