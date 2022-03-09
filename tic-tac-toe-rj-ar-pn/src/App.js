import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 5, 0, 0, 0, 0]
    }
  }

handleChange = (index) => {
  
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
                handleChange = {this.handleChange}
              />
            )
          })}


          </div>
      </>
    )
  }
}
export default App