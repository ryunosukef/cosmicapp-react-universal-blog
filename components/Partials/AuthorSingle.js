// AuthorSingle.js
import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

export default class AuthorSingle extends Component {

  render(){

    const author_item = this.props.author_item

    const style = {
      marginBottom: 20
    }

    return (
      <div>
        <Link to="/author" className="btn btn-default" style={ style }>&lt;&lt; Back to Author List</Link>
        <h2>{ author_item.title }</h2>
        <div dangerouslySetInnerHTML={ {__html: author_item.content } }></div>
        <div><img src="{ author_item.imageUrl }" /> { author_item.metadatafields.imageUrl }</div>
      </div>
    )
  }
}
