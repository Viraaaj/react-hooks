import React, { Component } from 'react'

export class ClassIntervalCounter extends Component {

  constructor(props) {
    super(props)
    this.state = {
       count: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval( this.counter, 1000 )
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  counter = () => {
    this.setState({ count: this.state.count + 1 })
  }
  

  render() {
    return (
      <div>
        <h3> Class interval counter: {this.state.count} </h3>
      </div>
    )
  }
}

export default ClassIntervalCounter
