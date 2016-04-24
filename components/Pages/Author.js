// Author.js
import React, { Component } from 'react'
import _ from 'lodash'
import config from '../../config'

// Components
import Header from '../Partials/Header'
import AuthorList from '../Partials/AuthorList'
import AuthorSingle from '../Partials/AuthorSingle'

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class Author extends Component {

  componentWillMount(){
    this.getPageData()
  }

  componentDidMount(){
    const data = this.props.data
    document.title = config.site.title + ' | ' + data.page.title
  }

  getPageData(){
    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: 'author',
      post_slug: this.props.params.slug
    })
  }

  getMoreItems(){
    AppDispatcher.dispatch({
      action: 'get-more-items'
    })
  }

  render(){

    const data = this.props.data
    const globals = data.globals
    const pages = data.pages
    let main_content

    if(!this.props.params.slug){

      main_content = <AuthorList getMoreItems={ this.getMoreItems } data={ data }/>

    } else {

      const author_items = data.author_items

      // Get current page slug
      const slug = this.props.params.slug
      const author_items_object = _.indexBy(author_items, 'slug')
      const author_item = author_items_object[slug]

      main_content = <AuthorSingle data={ data } author_item={ author_item }/>

    }

    return (
      <div>
        <Header data={ data }/>
        <div id="main-content" className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              { main_content }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
