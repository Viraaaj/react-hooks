import React, { Component } from 'react'

export default class ClassCounterTwo extends Component {  

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  incrementCount(){
    this.setState( prevCount => {
      return{
        count: prevCount.count + 5
      }
    } )
  }

  render() {
    return (
      <div>
        <button onClick = {() => this.incrementCount()} > count: {this.state.count} </button>
      </div>
    )
  }
}

