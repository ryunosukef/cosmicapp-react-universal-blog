// Title.js
import React, { Component } from 'react'
import _ from 'lodash'
import config from '../../config'

// Components
import Header from '../Partials/Header'
import TitleList from '../Partials/TitleList'
import TitleSingle from '../Partials/TitleSingle'

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class Title extends Component {

  componentWillMount(){
    this.getPageData()
  }

  componentDidMount(){
    const data = this.props.data
    document.title = config.site.title + ' | ' + data.page.title
  }

  getPageData(){
    console.log("slug: " + this.props.params.slug)

    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: 'title',
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

    console.log("slug: " + this.props.params.slug)

    if(!this.props.params.slug){

      main_content = <TitleList getMoreItems={ this.getMoreItems } data={ data }/>

    } else {

      const title_items = data.title_items

      // Get current page slug
      const slug = this.props.params.slug
      const title_items_object = _.indexBy(title_items, 'slug')
      const title_item = title_items_object[slug]

      main_content = <TitleSingle data={ data } title_item={ title_item }/>

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
