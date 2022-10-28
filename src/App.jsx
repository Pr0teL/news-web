import React from "react"
import axios from "axios"
import Header from "./components/Header"
import TopNews from "./components/TopNews"
import Card from "./components/Card"
function App() {
   const [cardInfo, setCardInfo] = React.useState([])
   const [load, setLoad] = React.useState(false)
 
   React.useEffect(() => {
      setLoad(true)
       axios.get('https://newsapi.org/v2/top-headlines?country=ru&apiKey=cb1945fd9f8247729ea6667794d9cfa8').then(res => {
      setLoad(false)
       setCardInfo(res.data.articles);
       console.log(res.data.articles)
       
      
     
     }).catch((error) => {
      alert('Превышено колличество запросов на сервер | Нужно подождать :( ')
     })
   
   }, [])
  return (
    <div className="wrapper">
        <Header/>
        <TopNews topCard={cardInfo[5]}/>
        <h1>Lastes News</h1>
        <div className="cards-container">
         {
           !load ? cardInfo.map((card)=> <Card cardData={card}/>) : 
           <h3>Загрузка...</h3>
         }
         
        </div>
     </div>
  );
}

export default App;

