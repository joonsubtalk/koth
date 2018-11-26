import React, { Component } from 'react'

const TILE_TYPE = {
  RED : 'red',
  BLUE : 'blue',
  NONE : 'none'
}

export default class Territory extends Component {
  state = {
    selected : false,
    selectable : false
  }

  componentDidMount() {
    if (this.props.type !== TILE_TYPE.NONE) {
      this.setState({selectable : true});
    }
  }
  clickHandler = (e) => {
    if (!this.state.selectable) return;

    console.log(e.currentTarget);
    this.setState({selected: !this.state.selected});
  }

  render() {
    const {val, type, count} = this.props;
    const { selected } = this.state;
    const classNames = type
      ? `o-territory o-territory--${type}`
      : `o-territory`;
    const states = selected
      ? `selected`
      : '';
    return (
      <div className={`${classNames} ${states}`}>
        <div className="o-territory__hex"></div>
        <div className="o-territory__attack">{count}</div>
        <div className="o-territory__hit-area" onClick={this.clickHandler}></div>
      </div>
    )
  }
}
