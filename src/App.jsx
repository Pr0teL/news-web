import React from "react"
import axios from "axios"
import Header from "./components/Header"
import TopNews from "./components/TopNews"
import Card from "./components/Card"
import Categories from './components/Categories'
function App() {
   const [cardInfo, setCardInfo] = React.useState([])
   const [vals , setVals] = React.useState([])
   const [load, setLoad] = React.useState(false)
   const [categories, setCategories] = React.useState(false)

   const opnCategories = () => {
    setCategories(!categories)
   }
 
   React.useEffect(() => {
      setLoad(true)
       axios.get('https://newsapi.org/v2/top-headlines?country=ru&apiKey=cb1945fd9f8247729ea6667794d9cfa8').then(res => {
      
       setCardInfo(res.data.articles);
       console.log(res.data.articles)
     }).catch((error) => {
      alert('Не удалось загрузить статьи :( ')
     }).finally(()=> setLoad(false))

     setLoad(true)
       axios.get('https://cdn.cur.su/api/cbr.json').then(res => { //Не работает
      
       setVals(res.data);
       console.log(res.data)
     }).catch((error) => {
      alert('Не удалось загрузить Курс валют :( ')
     }).finally(()=> setLoad(false))
   
   }, [])

  console.log(vals)
  return (
    <div className="wrapper">
        <Header opnCategories={opnCategories}/>
         {categories && <Categories/>}
        {!load && <TopNews valutes={vals} topCard={cardInfo[3]}/>}
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

