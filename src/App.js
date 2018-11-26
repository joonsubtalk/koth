import React, { Component } from 'react';
import './App.scss';
import TerritoryMap from './components/TerritoryMap/TerritoryMap';

const TileMapContext = React.createContext({});
export const TileMapProvider = TileMapContext.Provider;
export const TileMapConsumer = TileMapContext.Consumer;

const TILE_TYPE = {
  RED : 'red',
  BLUE : 'blue',
  NONE : 'none'
}

class App extends Component {

  state = {
    tileMap : [],
    players : 2,
    turn: 1,
    turns: 0,
  }

  componentDidMount() {
    this.generateMap();
  }

  generateMap = () => {
    const { RED, BLUE, NONE } = TILE_TYPE;
    const tileMap = [
      {id: '0', type: BLUE, atk: 0},{id: '1', type: BLUE, atk: 0 },{id: '2', type: NONE },{id: '3', type: RED },{id: '4', type: RED },{id: '5', type: RED },
      {id: '6', type: BLUE, atk: 0 },{id: '7', type: BLUE, atk: 0 },{id: '8', type: NONE },{id: '9', type: RED },{id: '10', type: RED },{id: '11', type: RED },
      {id: '12', type: NONE },{id: '13', type: RED },{id: '14', type: NONE },{id: '15', type: RED },{id: '16', type: RED },{id: '17', type: RED },
      {id: '18', type: NONE },{id: '19', type: NONE },{id: '20', type: RED },{id: '21', type: RED },{id: '22', type: NONE },{id: '23', type: RED },
      {id: '24', type: RED },{id: '25', type: RED },{id: '26', type: RED },{id: '27', type: RED },{id: '28', type: NONE },{id: '29', type: RED },
      {id: '30', type: RED },{id: '31', type: RED },{id: '32', type: NONE },{id: '33', type: RED },{id: '34', type: RED },{id: '35', type: BLUE, atk: 0 },
      {id: '36', type: RED },{id: '37', type: RED },{id: '38', type: NONE },{id: '39', type: RED },{id: '40', type: RED },{id: '41', type: BLUE, atk: 0 },
      {id: '42', type: NONE },{id: '43', type: RED },{id: '44', type: RED }
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
