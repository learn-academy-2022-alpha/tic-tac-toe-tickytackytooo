import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      mark: ["❌"]
     
    }
  }

ticTac = (index) => {
  const {squares, mark} = this.state
  squares[index] = mark
  this.setState({squares: squares})
}
  render(){
    return(
      <>

        <h1>Tic Tac Toe</h1>
          <div id = "layout">
          {this.state.squares.map((value, index) => {
            return (
              <Square
                index = {index}
                value = {value}
                ticTac = {this.ticTac}
              />
            )
          })}


          </div>
      </>
    )
  }
}
export default App