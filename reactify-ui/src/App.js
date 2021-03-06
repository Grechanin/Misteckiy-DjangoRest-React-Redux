import React, { Component } from 'react'
import AboutUs from './aboutUs/aboutUs'
import Contacts from './contacts/contacts'
import Home from './home/home'
import Gallery from './gallery/gallery'
import Prices from './prices/prices'
import Projects from './projects/main/Projects'
import CategoryDetail from './projects/CategoryDetail/CategoryDetail'
import ProjectDetail from './projects/projectDetail/ProjectDetail'
import GypsumMainPage from './gypsum/main/GypsumMainPage'
import GypsumCategoryDetail from './gypsum/categoryDetail/CategoryDetail'
import GypsumDetail from './gypsum/gypsumDetail/GypsumDetail'
import Checkout from './gypsum/checkout/Checkout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/about_us' component={AboutUs} />
          <Route exact path='/prices' component={Prices} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/projects/:id' component={ProjectDetail} />
          <Route exact path='/category/:id' component={CategoryDetail} />
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/shop' component={GypsumMainPage} />
          <Route exact path='/shop-category/:id' component={GypsumCategoryDetail} />
          <Route exact path='/product/:id' component={GypsumDetail} />
          <Route exact path='/checkout' component={Checkout} />

          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
