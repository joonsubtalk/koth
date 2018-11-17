import React, { Component } from 'react'

export default class Territory extends Component {
  render() {
    const {val} = this.props;
    return (
      <div className="o-territory">
        <div className="o-territory__text">
          {val}
        </div>
      </div>
    )
  }
}
