import React from "react"

export default function TopNews(topCard) {
    const {title, urlToImage, publishedAt = "", source ="", url = ""} = topCard.topCard || {};
    const {RUB = 0, EUR = 0, KZT = 0, CNY = 0} = topCard.valutes.rates || {}
    
    return(
    <>
        <h1 className="gl-title">Hot Topics</h1>
        <div className="top-card">
            <a href={url} className="photo" style={{ 
      backgroundImage: `url(${urlToImage})` || `url(./img/sportsmen.png)`}}>
        <div className="info-top">
                <h2>{title}</h2>
                <div className="date-country">
                    <p>{publishedAt.replace(/[T, Z]/ig," ")}</p>
                    <p>{source.name}</p>
                </div>
                </div>
            </a>
            <div className="valutes">
              <ul>
                <li><img width={50} height={50} src="./img/valutes/usd.png" alt="" /><p>{RUB.toFixed(2)}</p><span>RUB</span></li>
                <li><img width={50} height={50} src="./img/valutes/eur.png" alt="" /><p>{(RUB / EUR).toFixed(2)}</p><span>RUB</span></li>
                <li><img width={50} height={50} src="./img/valutes/kzt.png" alt="" /><p>{(RUB / KZT).toFixed(2)}</p><span>RUB</span></li>
                <li><img width={50} height={50} src="./img/valutes/cny.png" alt="" /><p>{(RUB / CNY).toFixed(2)}</p><span>RUB</span></li>
              </ul>
            </div>
        </div>
        </>
    )
}