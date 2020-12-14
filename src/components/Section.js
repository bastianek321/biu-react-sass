import React from "react"
import Article from "./Article"

import './Section.scss'

export default function Section({items}){
    return (
        <section className="Section">
            {items.map((item, i) =>
                <Article key={i} {...item} />
            )}
        </section>
    )
}