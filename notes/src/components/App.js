import React, { Component } from 'react';
import NotebookNav from './NotebookNav/NotebookNav';
import NoteNav from './NoteNav/NoteNav';
import Editor from './Editor/Editor';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NotebookNav/>
        <br/>
        <NoteNav/>
        <br/>
        <Editor/>
      </div>
    );
  }
}

export default App;
