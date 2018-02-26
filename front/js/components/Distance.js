import React from 'react';

const Distance = props => {
  return(
    <div className="container">
      <h4>
        {props.loc_a.city}, {props.loc_a.state} IS APPROXIMATELY {props.distance} MILES FROM {props.loc_b.city}, {props.loc_b.state}.
      </h4>
    </div>
  )
}

export default Distance;
