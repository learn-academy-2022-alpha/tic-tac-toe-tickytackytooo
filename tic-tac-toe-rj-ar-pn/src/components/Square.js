import React, { Component } from 'react'

class Square extends Component{
    click = () => {
        this.props.ticTac(this.props.index)
    }
  render(){
    return(
      <>
        <button className="square" onClick={this.click}>{this.props.value}</button>
      </>
    )
  }
}
export default Square