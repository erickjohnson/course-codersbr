import React, { Component } from 'react'

export default class Grid extends Component {
  classesBootstrap (mobile, tablet, desktop) {          
    let classes = mobile ? `col-xs-${mobile}` : ``
    classes += tablet ? ` col-sm-${tablet}` : ``
    classes += desktop ? ` col-md-${desktop}` : ``
    return classes
  }

  render() {
    const gridClasses = this.classesBootstrap(this.props.mobile, this.props.tablet, this.props.desktop) 
    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }

}