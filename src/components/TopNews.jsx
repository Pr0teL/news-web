import React from "react"

export default function TopNews(topCard) {
    return(
    <>
        <h1>Hot Topics</h1>
        <div className="top-card">
            <div className="photo" style={{ 
      backgroundImage: `url(./img/sportsmen.png)`}}>
        <div className="info-top">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad suscipit nobis. Dolores soluta iure natus iusto error quibusdam quasi quos sit adipisci! Nam asperiores beatae reprehenderit, in laborum quaerat!</h2>
                <div className="date-country">
                    <p>{2022}</p>
                    <p>{"Google"}</p>
                </div>
                </div>
            </div>
            <div className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nesciunt voluptates exercitationem, soluta tempore voluptatem pariatur autem illo enim dignissimos temporibus ratione ducimus. Rem architecto non ipsum recusandae rerum repellendus!
            </div>
        </div>
        </>
    )
}