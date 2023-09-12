import React, { Component } from 'react'

class Pcompo extends Component {
    constructor(){
        super();
        this.state={
            count : 0
        }
    }
  render() {
    return (
      <div  style={{background:'orange'}}>
        <h1>This is Pure Component</h1>
        <h3>{this.state.count}</h3>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increase</button>
        <button onClick={()=>this.setState({count:this.state.count-1})}>Increase</button>
        
      </div>
    )
  }
}

export default Pcompo
