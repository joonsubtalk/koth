import React, { Component } from 'react'
import Territory from '../Territory/Territory';

export default class TerritoryMap extends Component {
  
    renderTerritoryMap = () => {
        const { territories } = this.props;

        return territories.map((tile, idx) => {
            return <Territory key={tile.id} val={idx} type={tile.type}/>
        });
    }

    render() {
        return (
        <div className="o-territoryMap">
            { this.renderTerritoryMap() }
        </div>
        )
    }
}
