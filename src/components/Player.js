import React, { Component } from 'react'
import Character from './Character';

export default class Player extends Component {

    handlePlayerName = () => {
        if(this.props.player === undefined){
            return 'Joueur 1'
        }
        else{
            return this.props.player
        }
        
    }

    render() {
        return (
            <div className="col-md-3">
                <h2>{this.handlePlayerName()}</h2>
                <Character type="brute"/>
                <Character type="chevalier"/>
                <Character type="wizard"/>
                <Character type="archer"/>
            </div>
        )
    }
}
