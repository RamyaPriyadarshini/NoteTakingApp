import React, { Component } from 'react'

class Notebook extends Component{

  selectNotebook = ()=>{
    this.props.selectNotebook(this.props.id);
  }
  render(){
    return(
      <div className="Notebook">
        <h2>{this.props.title}</h2>
        <p>Last Edited: {this.props.lastEdited}</p>
        <hr/>
        <a href="#">Delete</a>
        <a href="#">Edit</a>
        <a onClick={this.selectNotebook}>Select</a>
      </div>
    )
  }
}

export default Notebook;
