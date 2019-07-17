import React, { Component } from 'react';

class CreateNotebookForm extends Component{
  constructor(props){
    super(props);
    this.state={
      title:""
    }
  }

  closeForm = ()=>{
    this.props.openForm(false);
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.addNotebook(this.state.title);
    this.props.openForm(false);
  }

  handleChange = (e)=>{
    this.setState({
      title:e.target.value
    })
  }
  
  render(){
      return(
        <div>
        <form onSubmit={this.handleSubmit}>
        <h5>NotebookForm</h5>
        <label>Title</label>
        <input type="text" onChange={this.handleChange} value={this.state.title}></input>
        <br/>
        <button>Submit</button>
        <button onClick={this.closeForm}>Cancel</button>
        </form>
        </div>
      )
  }

}

export default CreateNotebookForm;
