import React, { Component } from 'react'

export class UserThree extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedIn: true
        }
    }
    
    render() {
        return (
        this.state.isloggedIn ? 

        <div> <h1>Welcome Rohan</h1></div> : <div> <h1>Welcome Guest</h1></div>
    )
}
}

export default UserThree
