import React from 'react';
import ZipInput from './ZipInput'
import ErrorBox from './ErrorBox'

class ZipForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      zipOne: '',
      zipTwo: '',
      errors: []
    }
    this.handleChange = this.handleChange.bind(this);

  }


  handleChange(event){
    let field = event.target.name
    let newValue = event.target.value
    this.setState({[field]: newValue})
  }

  validateSubmit(event){
    event.preventDefault();
    if (this.validateContent() === false) {
      return false;
    }
    this.ZipFormSubmit(event)
  }

  validateContent(selection) {
    let errors = []
    if (this.state.zipOne.length != 5 ||
      this.state.zipTwo.length != 5 ||
      isNaN(this.state.zipOne) == true ||
      isNaN(this.state.zipTwo) == true){
        errors.push("zip code must be 5 numerical digits")
      }

      this.setState({errors: errors})

      if (errors.length){
        return false;
      } else {
        return true;
      }
    }

    ZipFormSubmit(event){
      event.preventDefault();
      let payload = {
        zipOne: this.state.zipOne,
        zipTwo: this.state.zipTwo,
      }
      this.props.findDistance(payload)
    }

    render() {
      let handleSubmit = (event) => this.validateSubmit(event)
      let errors;
      if(this.state.errors.length) {
        errors = <ErrorBox errors={this.state.errors} />
      }

      return(
        <form id="contact_form">
          <ZipInput
            name="zipOne"
            content={this.state.zipOne}
            handler={this.handleChange}
            formText="Zip One:"
          />

          <ZipInput
            name="zipTwo"
            content={this.state.zipTwo}
            handler={this.handleChange}
            formText="Zip Two:"
          />

          <div>
            <h4>{errors}</h4>
          </div>

          <input type="submit" className="button" value="Submit" id="form_button" onClick={handleSubmit} />
        </form>
      )
    }
  }

  export default ZipForm;
