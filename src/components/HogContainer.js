import React, { Component } from "react";
import HogTile from './HogTile'

class HogContainer extends Component {
  
  render() {
    return (
      <div className='ui grid container'>
        {
          this.props.hogs.map(hog => {
            return <HogTile key={hog.name} hogInfo={hog} />
          })
        }
      </div>
    );
  }
}

export default HogContainer;
