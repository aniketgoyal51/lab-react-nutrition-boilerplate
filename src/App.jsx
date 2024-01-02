import './App.css'
import Food from '../resources/FoodData.js'
import Count from './components/count.jsx'
import { useState } from 'react'

function App() {
    const[search,setsearch]=useState("")

    function searchitem(e){
      setsearch(e.target.value)
    }

  return (
    <>
    <div className='searchbox'>
      <h3>Search</h3>
      <input type="text" placeholder='Search here' onChange={(e)=>searchitem(e)}/>
    </div>
      {Food.filter(item => item.name.toLowerCase().includes (search.toLowerCase())).map((item)=>{
        return <div key={item.id} className='container'>
          <img src={item.img} alt="" />
          <div>
            <p><strong>{item.name}</strong></p>
            <p>{item.cal}</p>
          </div>
            <Count name={item.name} cal={item.cal}/>
        </div>
      })}
    </>
  )
}

export default App
