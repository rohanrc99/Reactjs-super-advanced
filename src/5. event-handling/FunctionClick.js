import React from 'react'

function callMe(){
    console.log("Function was invoked")
}


function FunctionClick() {
    return (
        <div className="container">
            <h1>Event Handling</h1>
            <button onClick={callMe} className="btn btn-primary ">Click</button>
        </div>
    )
}

export default FunctionClick
