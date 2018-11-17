import React, { Component } from 'react';
import './App.scss';
import TerritoryMap from './components/TerritoryMap/TerritoryMap';

const TileMapContext = React.createContext({});
export const TileMapProvider = TileMapContext.Provider;
export const TileMapConsumer = TileMapContext.Consumer;
const LAND = 'LAND';

class App extends Component {

  state = {
    tileMap : [],
    players : 2
  }

  componentDidMount() {
    this.generateMap();
  }

  generateMap = () => {
    const tileMap = [
      {id: '0', tile: LAND},{id: '1', tile: LAND},{id: '2', tile: LAND},{id: '3', tile: LAND},{id: '4', tile: LAND},{id: '5', tile: LAND},
      {id: '6', tile: LAND},{id: '7', tile: LAND},{id: '8', tile: LAND},{id: '9', tile: LAND},{id: '10', tile: LAND},{id: '11', tile: LAND},
      {id: '12', tile: LAND},{id: '13', tile: LAND},{id: '14', tile: LAND},{id: '15', tile: LAND},{id: '16', tile: LAND},{id: '17', tile: LAND},
      {id: '18', tile: LAND},{id: '19', tile: LAND},{id: '20', tile: LAND},{id: '21', tile: LAND},{id: '22', tile: LAND},{id: '23', tile: LAND},
      {id: '24', tile: LAND},{id: '25', tile: LAND},{id: '26', tile: LAND},{id: '27', tile: LAND},{id: '28', tile: LAND},{id: '29', tile: LAND},
      {id: '30', tile: LAND},{id: '31', tile: LAND},{id: '32', tile: LAND},{id: '33', tile: LAND},{id: '34', tile: LAND},{id: '35', tile: LAND}
    ];
    this.setState({tileMap: tileMap });
  }

  render() {
    const {tileMap} = this.state;

    return (
      <div className="App">
        <TerritoryMap territories={tileMap} />
      </div>
    );
  }
}

export default App;
