import React from "react"

export default function Header() {
    return(
        <div className="header">
            <div className="logo">
                <h2><span>News</span>Portal</h2>
            </div>
            <div className="nav">
                <img width={22} height={22} src="./img/search.svg" alt="" />
                <img width={22} height={22} src="./img/open-drawer.svg" alt="" />
            </div>
        </div>
    )
}