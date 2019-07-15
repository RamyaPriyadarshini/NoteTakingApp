import React, {Component} from 'react';
import Notebook from "./Notebook"
import notebookData from "../Notebook.json"

class NotebookList extends Component{

  constructor(props){
    super(props);
    this.state = {
      notebooks:notebookData.notebooks
    }
  }

  render(){
    const notebooks = this.state.notebooks.map((x)=>{
      return (
        <Notebook title={x.title} lastEdited={x.lastEdited} key={x.id} selectNotebook={this.props.selectNotebook} id={x.id}/>
      )
    });
    return(
      <div> {notebooks} </div>
    )
  }
}

export default NotebookList;
