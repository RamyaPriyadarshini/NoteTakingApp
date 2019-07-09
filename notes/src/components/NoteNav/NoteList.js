import React, {Component} from 'react';
import Note from './Note'
import sample from '../sample.json'

class NoteList extends Component{
    state = {
        current_notebook:"OpenCV"
    }
  render(){
    const styles =
    {
      height: "400px",
      overflow : "auto",
      maxWidth: "100%",
      overflowX: "hidden"
    };
    const notes = sample.notes[this.state.current_notebook].map(x => {
    return (
        <Note title={x.title} content={x.note} key={x.key}/>
    )
    })
    return(
      <div style={styles}>
        <div className="row">
            {notes}
        </div>
    </div>
    )
  }
}

export default NoteList;
