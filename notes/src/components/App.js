import React, { Component } from 'react';
import NotebookNav from './NotebookNav/NotebookNav';
import NoteNav from './NoteNav/NoteNav';
import Editor from './Editor/Editor';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected:2
    }
  }

  changeSelected = (id)=>{
    this.setState({
      selected:id
    })
  }

  render() {
    const styles = {height: '100%',margin:"0px"};
    return (
      <div style={styles} className="App">
        <div className="row" style={styles}>
          <div style={styles} className="col s2 teal darken-2"><NotebookNav selectNotebook={this.changeSelected}/></div>
          <div style={styles} className="col s3 teal"><NoteNav selected={this.state.selected}/></div>
          <div style={styles} className="col s7 grey lighten-3"><Editor/></div>
        </div>
      </div>
    );
  }
}

export default App;
