// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onRandom = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const random = this.onRandom()
    this.setState((prevstate = () => ({count: prevstate.count + random})))
  }

  render() {
    const {count} = this.state

    const str = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="con">
        <h1 className="hh">Count {count}</h1>
        <p className="p">Count is {str}</p>
        <button className="bt" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="ppp">* Increment By Random Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
