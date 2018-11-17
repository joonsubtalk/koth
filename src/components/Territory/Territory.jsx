import React, { Component } from 'react'

export default class Territory extends Component {

  clickHandler = (e) => {
    console.log(e.currentTarget);
  }

  render() {
    const {val, type} = this.props;
    const classNames = type
      ? `o-territory o-territory--${type}`
      : `o-territory`;
    return (
      <div className={classNames} onClick={this.clickHandler}>
        <div className="o-territory__shape">
          <div className="o-territory__inner"></div>
        </div>
        <div className="o-territory__text">
          {val}
        </div>
        <div className="o-territory__backdrop">s</div>
      </div>
    )
  }
}
