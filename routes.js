// routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Store
import AppStore from './stores/AppStore'

// Main component
import App from './components/App'

// Pages
import Blog from './components/Pages/Blog'
import Default from './components/Pages/Default'
import Work from './components/Pages/Work'
import NoMatch from './components/Pages/NoMatch'
import Author from './components/Pages/Author'
import Title from './components/Pages/Title'

export default (
  <Route path="/" data={AppStore.data} component={App}>
    <IndexRoute component={Blog}/>
    <Route path="about" component={Default}/>
    <Route path="contact" component={Default}/>
    <Route path="author" component={Author}/>
    <Route path="/author/:slug" component={Author}/>
    <Route path="title" component={Title}/>
    <Route path="/title/:slug" component={Title}/>
    <Route path="work" component={Work}/>
    <Route path="/work/:slug" component={Work}/>
    <Route path="/blog/:slug" component={Blog}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
