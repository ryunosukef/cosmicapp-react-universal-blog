// TitleList.js
import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class TitleList extends Component {

  scrollTop(){
    $('html, body').animate({
      scrollTop: $("#main-content").offset().top
    }, 500)
  }

  render(){

    let data = this.props.data
    let item_num = data.item_num
    let title_items = data.title_items

    let load_more
    let show_more_text = 'Show More...'

    if(data.loading){
      show_more_text = 'Loading...'
    }

    if(title_items && item_num <= title_items.length){
      load_more = (
        <div>
          <button className="btn btn-default center-block" onClick={ this.props.getMoreItems.bind(this) }>
            { show_more_text }
          </button>
        </div>
      )
    }

    title_items = _.take(title_items, item_num)

    let articles_html = title_items.map(( item ) => {
      let date_obj = new Date(item.created)
      let created = date_obj.getFullYear() + '/' + (date_obj.getMonth()+1) + '/' + date_obj.getDate()
      return (
        <div key={ 'key-' + item.slug }>
          <div className="post-preview">
            <h2 className="post-title pointer">
              <Link to={ '/title/' + item.slug } onClick={ this.scrollTop }>{ item.title }</Link>
            </h2>
            <div dangerouslySetInnerHTML={ {__html: item.content } }></div>
            <p className="post-meta">{ created }</p>
          </div>
          <hr/>
        </div>
      )
    })

    return (
      <div>
        <div>{ articles_html }</div>
        { load_more }
      </div>
    )
  }
}
