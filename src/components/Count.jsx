import React from 'react'
import { useState } from 'react'
import TotalCallory from './totalCallory.jsx'

const Count = (props) => {
    const[count,setcount]=useState(0)

    function increasecount(e){
        setcount(count+1)
        console.log(e.target.value)
    }
    function reset(){
        setcount(count*0)
    }
    return (
        <>
        <div>
            <input type="number" className="valueInput" onChange={(e)=>increasecount(e)} defaultValue={0} value={count}/>
            <button onClick={(e)=>increasecount(e)}>+</button>
        </div>
        <TotalCallory count={count} name={props.name} cal={props.cal} reset={reset}/>
            
        </>
    )
}

export default Count