import React, { Component } from 'react'

class Notebook extends Component{
  render(){
    return(
      <div className="Notebook">
        <h2>{this.props.title}</h2>
        <p>Last Edited: {this.props.lastEdited}</p>
        <hr/>
        <a href="#">Delete</a>
        <a href="#">Edit</a>
      </div>
    )
  }
}

export default Notebook;
