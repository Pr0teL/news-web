import React from "react"

export default function TopNews() {
    return(<>
        <h1>Hot Topics</h1>
        <div className="top-card">
            <div className="photo" style={{ 
      backgroundImage: `url("./img/sportsmen.png")`}}>
        <div className="info-top">
                <h2>Massa tortor nibh nulla condimentum imperdiet scelerisque...</h2>
                <div className="date-country">
                    <p>2 Hours Ago</p>
                    <p>CNN Indonesia</p>
                </div>
                </div>
            </div>
            <div className="description">
           <span>Nisi,</span> sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more
            </div>
        </div>
        </>
    )
}