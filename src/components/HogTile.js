import React, { Component, Fragment } from 'react'

class HogTile extends React.Component {
    
    constructor(){
        super()
        this.state = {
            display: false
        }
    }

    handleClick = () => {
        this.setState({
            display: !this.state.display
        })
    }
    
    render(){
        
        const { name, specialty, greased, weight, ['highest medal achieved']: honors} = this.props.hogInfo
        const image_name = name.toLowerCase().split(' ').join('_')
        const image = require(`../hog-imgs/${image_name}.jpg`)

        return(
            <div onClick={this.handleClick} className='ui eight wide column'>
                <p>{name}</p>
                {
                    this.state.display ?
                    <div> 
                        <p>Specialty: {specialty}</p>
                        <p>{greased ? 'Greased' : 'Not Greased'}</p>
                        <p>Weight: {weight} lbs.</p>
                        <p>Honors: {[honors]}</p>
                    </div>
                    :
                    <img src={image} height='250px' width='300px' />
                }
            </div>
        )
    }

}

export default HogTile