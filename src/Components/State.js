import React, { Component } from 'react'

export class State extends Component {
    constructor (){
        super();
        this.state={
            name:"Madhav",Age:21
        }
    }
    fun(){
        this.setState({name:"ASndkjna"});
    }
  render() {
    // const a=this.state.name;

    const {name,Age}=this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{Age}</h2>
        {/* <p>{this.state.Age}</p> */}
        <input type="button" value="Button" onClick={()=>this.fun()}/>
      </div>
    )
  }
}

export default State
