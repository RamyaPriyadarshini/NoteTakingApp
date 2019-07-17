import React, {Component} from 'react';
import CreateNotebookForm from './CreateNotebook/CreateNotebookForm';
import CreateFormButton from './CreateNotebook/CreateFormButton';

class CreateNotebookToggle extends Component{
  constructor(props){
    super(props);
    this.state={
      createFormOpen:false
    }
  }

  openForm = (choice)=>{
    this.setState({
      createFormOpen:choice
    })
  }

  render(){
    let createRenderer;
    if(this.state.createFormOpen){
       createRenderer = <CreateNotebookForm addNotebook={this.props.addNotebook} openForm={this.openForm}/>;
    }else{
       createRenderer = <CreateFormButton openForm={this.openForm}/>;
    }
    return(
      <div> {createRenderer} </div>
    )
  }
}

export default CreateNotebookToggle;
