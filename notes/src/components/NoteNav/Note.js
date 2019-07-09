import React, {Component} from 'react';

class Note extends Component{
  render(){
    return(
      <div className="col s11 m11">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.title}</span>
              <p>{this.props.content.substring(0,75)}{this.props.content.length>75?"...":null}</p>
            </div>
          </div>
        </div>
    )
  }
}

export default Note;
