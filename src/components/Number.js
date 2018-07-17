import React, {Component} from 'react'


export class Number extends Component {

    constructor(props) {
        super(props)

        this.state = {
            number: 0
        }
    }

    increment = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    decrement = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

  render() {
    return (
        <div>
            <button onClick={this.increment}>+</button>
            <h3>{this.state.number}</h3>
            <button onClick={this.decrement}>-</button>
        </div> 
    )
  }

}