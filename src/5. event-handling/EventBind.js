import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler(){
        console.log(this)
        this.setState({
            message: 'Thank You'
        })
    }



/*  
there are Four methods for event binding

! using call bind and apply method
? <button className="btn btn-primary"
                  ? onClick={this.clickHandler.bind(this)}
              ?  >Click Me</button>


! using fat arrow function ---->>> Used when we need to pass the parameters to the function
 ? <button className="btn btn-primary"
                   ?onClick={() =>this.clickHandler()}
               ? >Click Me</button>


! binding the event inside the constructor -->> same is done in this file
?   this.clickHandler = this.clickHandler.bind(this)  --->> Inside the constructor
?   onClick={this.clickHandler}  --->> Inside the render section


! Instead of using clickhandler as a regular function we can use it as a fat arrow function 
! ----->>> Used when there is no need to pass the parameter
?    clickHandler= (e) =>{
?     // console.log(e)
?        this.setState({
?             message: 'Thank You'
?        })
?    }

*/
    render() {
        return (
            <div className="container">
                <h1> Event Handling</h1>
                <button className="btn btn-primary"
                   onClick={this.clickHandler}
                >Click Me</button>
            </div>
        )
    }
}

export default EventBind
