// TitleSingle.js
import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

export default class TitleSingle extends Component {

  render(){

    const title_item = this.props.title_item

    const style = {
      marginBottom: 20
    }

    return (
      <div>
        <Link to="/title" className="btn btn-default" style={ style }>&lt;&lt; Back to Title List</Link>
        <h2>{ title_item.title }</h2>
        <div dangerouslySetInnerHTML={ {__html: title_item.content } }></div>
      </div>
    )
  }
}
