import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from './Filter'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs,
      greased: false,
      display: true
    }
  }

  handleHidden = () => {
    this.setState({
      display: !this.state.display
    })
  }

  handleClick = () => {
    this.setState({
      greased: !this.state.greased
    })
    console.log(this.state.greased)
  }

  handleSort = (event) => {
    
    let updatedHogs
    if (event.target.innerText === 'Sort by Name'){
      updatedHogs = this.state.hogs.sort((hogA, hogB) => {
      return hogA.name > hogB.name ? 1 : -1
      })
    } else {
      updatedHogs = this.state.hogs.sort((hogA, hogB) => {
      return hogA.weight - hogB.weight
      })
    }
    this.setState({
      hogs: updatedHogs
    })

  }

  render() {
  
    const { hogs, greased } = this.state
    const greasedHogs = hogs.filter(hog => hog.greased)
    const displayHogs = greased ? greasedHogs : hogs

    return (
      <div className="App">
        <Nav />
        <Filter 
          handleClick={this.handleClick} 
          greased={this.state.greased} 
          handleSortName={this.handleSort} 
          handleHidden={this.handleHidden}
        />
        <br/>
        <br/>
        {this.state.display ? <HogContainer hogs={displayHogs} /> : 'Nothing To See Here!'}
        
      </div>
    );
  }
}

export default App;
