import React, {Component} from 'react'

class CreateFormButton extends Component{

  openForm = ()=>{
    this.props.openForm(true);
  }

  render(){
    return(
      <a onClick={this.openForm}>Create</a>
    )
  }
}

export default CreateFormButton;
