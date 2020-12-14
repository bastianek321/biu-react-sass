import React from "react"

import './Article.scss'

export default function Article({title, photoURL, description}){
    return (
        <article className="Article">
            <h2>{title}</h2>
            <img src={photoURL} alt="prop"></img>
            <p>{description}</p>
        </article>
    )
}