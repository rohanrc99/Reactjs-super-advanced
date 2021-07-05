import React, { Component } from 'react'

export class ClassClick extends Component {


callMe(){
    console.log("button is clicked")
}


    render() {
        return (
            <div>
                <h1>Event Handling</h1>
                <button className="btn btn-primary" onClick={this.callMe}>Click Me!!</button>
            </div>
        )
    }
}

export default ClassClick
