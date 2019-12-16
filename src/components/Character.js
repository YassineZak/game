import React, { Component } from 'react'


export default class Character extends Component {


    handleCharacterType = () => {
        const path = `/img/${this.props.type}.png`
        return path
    }
    render() {
        return (
        <>
        <span className="col-md-4">
                <img 
                src= {this.handleCharacterType()}
                style={{width: "215px"}}
                alt="archer"
                />
            </span>
        </>
        )
    } 
}
