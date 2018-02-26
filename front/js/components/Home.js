import React from 'react';
import ZipForm from './ZipForm'
import Distance from './Distance'

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      distance: "",
      loc_a: [],
      loc_b: []
    }
    this.findDistance = this.findDistance.bind(this)
  }

  findDistance(payload){
    console.log(payload)
    fetch(`/api/v1/locations`, {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(responseData =>{
      this.setState({ distance: responseData.distance.toFixed(2), loc_a: responseData.loca, loc_b: responseData.locb })
      console.log(this.state)
    })
  }
  render(){
    let findDistance = (payload) => this.findDistance(payload)

    if(this.state.distance !== ""){
      return(
        <div className="container">
          <Distance
            distance={this.state.distance}
            loc_a={this.state.loc_a}
            loc_b={this.state.loc_b}
          />
          <form id="contact_form">
            <input type="submit" className="button" value="GO AGAIN?" id="form_button"  />
          </form>
        </div>
      )
    }else{
      return(
        <div className="container">
          <ZipForm
            findDistance={this.findDistance}
          />
        </div>
      )
    }
  }
}

export default Home;
