import React, {Component} from 'react';
import Notebook from "./Notebook"


class NotebookList extends Component{

  render(){
    const notebooks = this.props.notebooks.map((x)=>{
      return (
        <Notebook title={x.title} lastEdited={x.lastEdited} key={x.id} selectNotebook={this.props.selectNotebook} id={x.id} deleteNotebook={this.props.deleteNotebook}/>
      )
    });
    return(
      <div> {notebooks} </div>
    )
  }
}

export default NotebookList;
