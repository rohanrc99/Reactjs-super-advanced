import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
        super()
    
        this.state = {
             count: 0   
        }
    }
    
increment(){
    this.setState({
        count: this.state.count +1
    })
}

reset(){
    this.setState({
        count: 0
    })
}

    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={()=> this.increment() }>Click</button>
                <button onClick={()=> this.reset() }>Reset Counter</button>
            </div>
        )
    }
}

export default Counter
