import React, { Component } from 'react'

export class Person extends Component {

    constructor() {
        super()
    
        this.state = {
             name: 'Rohan',
             city: 'Ghaziabad',
             isActive: true
        }
    }
    

    render() {
        const {name, city} = this.state
        return (
            <div>
                <h1>Nmae is {name}</h1>
                <h1>He is from {city}</h1>
            </div>
        )
    }
}

export default Person