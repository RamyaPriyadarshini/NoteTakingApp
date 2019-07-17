import React,{ Component } from 'react';
import NotebookList from './NotebookList';
import CreateNotebookToggle from './CreateNotebookToggle';
import SearchComponent from './SearchComponent';
import notebookData from "../Notebook.json"

class NotebookNav extends Component{
  constructor(props){
    super(props);
    this.state = {
      notebooks:notebookData.notebooks
    }
  }

  addNotebook = (Title)=>{
    var notebook = {
      id:3,
      title:Title,
      lastEdited:"12 June, 2019",
      noteList:[]
    }
    var notebookList = this.state.notebooks;
    notebookList.push(notebook);
    this.setState({
      notebooks:notebookList
    })
  }

  deleteNotebook = (id)=>{
    var notebookList = this.state.notebooks.filter((notebook)=>{ return notebook.id !== id})
    this.setState({
      notebooks:notebookList
    });
  }

  render(){
    return(
      <div>
        <SearchComponent/>
        <NotebookList selectNotebook={this.props.selectNotebook} notebooks={this.state.notebooks} deleteNotebook={this.deleteNotebook}/>
        <CreateNotebookToggle addNotebook={this.addNotebook}/>
      </div>
    )
  }
}

export default NotebookNav;
