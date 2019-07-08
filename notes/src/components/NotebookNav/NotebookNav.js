import React,{ Component } from 'react';
import NotebookList from './NotebookList';
import CreateNotebookToggle from './CreateNotebookToggle';
import SearchComponent from './SearchComponent';

class NotebookNav extends Component{
  render(){
    return(
      <div>
        <SearchComponent/>
        <NotebookList/>
        <CreateNotebookToggle/>
      </div>
    )
  }
}

export default NotebookNav;
