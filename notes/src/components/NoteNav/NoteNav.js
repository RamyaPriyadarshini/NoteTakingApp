import React,{ Component } from 'react';
import NoteList from './NoteList';
import CreateNoteToggle from './CreateNoteToggle';
import SearchComponent from './SearchComponent';

class NoteNav extends Component{
  render(){
    return(
      <div>
        <SearchComponent/>
        <NoteList/>
        <CreateNoteToggle/>
      </div>
    )
  }
}

export default NoteNav;
