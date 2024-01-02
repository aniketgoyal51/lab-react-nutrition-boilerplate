import React from 'react'
// import reset from './reset'

const TotalCallory = (props) => {
    // console.log(props.count);

    return (
        <div className='outsideBox'>
            <div>{props.count} {props.name} = {props.cal * props.count} callory</div>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
}

export default TotalCallory