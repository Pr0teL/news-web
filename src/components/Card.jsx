import React from "react"

export default function Card(card) {
    return (
        <a href={card.cardData.url} className="card">
            <div className="alt-text">
                <h1>NewsPortal</h1>
            </div>
            <img width={268} src={card.cardData.urlToImage} alt="" />
            <h4>{card.cardData.title.length <= 80 ? card.cardData.title : card.cardData.title.substr(0, 77) + '...'}</h4>
            <div className="date-country">
                <p>{card.cardData.publishedAt.replace(/[T, Z]/ig, " ")}</p>
                <p>{card.cardData.source.name}</p>
            </div>
        </a>
    )
}