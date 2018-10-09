import React, { Component } from 'react'

class Copyright extends Component {
  getYear() {
    return new Date().getFullYear()
  }
  render() {
    return <div>Globo.com {this.getYear()}</div>
  }
}
export default Copyright
