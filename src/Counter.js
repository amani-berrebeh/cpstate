import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0,
        memory:null
      }
      console.log('constructor()')
    }
componentDidMount=()=>{this.setState({memory:setInterval(() => {this.setState({count:this.state.count +1})
        
}, 1000)})
    ;
    console.log('componentDidMount()')
}
componentDidUpdate=()=>{ console.log('componentDidUpdate()')}
componentWillUnmount=()=>{console.log('componentWillUnmount()')
 clearInterval(this.state.memory)}
  render()
   {
       console.log('render()')
    return (
      <div>Counter:{this.state.count}</div>
    )
  }
}

export default Counter