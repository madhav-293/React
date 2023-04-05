import React, { Component } from 'react'

export default class EventHandlingBinding extends Component {
    constructor(){
        super();
        this.state={
            name:"SADASDASDASDASd"
        }
    }
    ChangeData(){
        this.setState({
            name:"Madhav"
        })
    }
    render() 
    {
    return (
      <div>
      <h1>{this.state.name}</h1>
        <input type="button" value="CLick me!" onClick={()=>this.ChangeData()}/>
      </div>
    )
}
}


//binding event inside constructor and binding event inside the render method(slower than constructor)
// this.ChangeData=this.ChangeData.bind(this)
//this cannot do event triggering directly
//life cycle methods of comp.
