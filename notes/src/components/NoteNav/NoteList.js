import React, {Component} from 'react';
import Note from './Note'
import noteData from '../Notes.json'

class NoteList extends Component{
  constructor(props){
    super(props);
    this.state = {
      notes:noteData.notes
    }
  }
  render(){
    const styles =
    {
      height: "400px",
      overflow : "auto",
      maxWidth: "100%",
      overflowX: "hidden"
    };
    const notes = this.state.notes.map((x) => {
      if(x.notebookId === this.props.selected){
        return (
          <Note title={x.title} content={x.content} key={x.id}/>
        )
      }
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
