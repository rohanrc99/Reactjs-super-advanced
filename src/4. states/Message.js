import React, { Component } from 'react'

export class Message extends Component {
    constructor() {
        super()
    
        this.state = {
             name: 'Rohan',
             message: 'Welcome  Rohan'
        }
    }

    subscribe()
    {
        this.setState({
            message: 'Thank You for subscribing'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick= {() => this.subscribe()}>Subscribe</button>
            </div>
        )
    }
}

export default Message
