import React from "react"
import {render} from "react-dom"
import Section from "./components/Section"
import Header from "./components/Header"
import Footer from "./components/Footer"
import data from "./data/articles.json"

render(
    <>
        <Header text={data.header.text} items={data.header.items} />
        <Section items={data.section.articles} />
        <Footer content={data.footer} />
    </>,
     document.getElementById("root")
)