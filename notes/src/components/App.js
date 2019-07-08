import React, { Component } from 'react';
import NotebookNav from './NotebookNav/NotebookNav';
import NoteNav from './NoteNav/NoteNav';
import Editor from './Editor/Editor';
class App extends Component {
  render() {
    const styles = {height: '100%',margin:"0px"};
    return (
      <div style={styles} className="App">
        <div className="row" style={styles}>
          <div style={styles} className="col s2 teal darken-2"><NotebookNav/></div>
          <div style={styles} className="col s2 teal"><NoteNav/></div>
          <div style={styles} className="col s8 grey lighten-3"><Editor/></div>
        </div>
      </div>
    );
  }
}

export default App;
