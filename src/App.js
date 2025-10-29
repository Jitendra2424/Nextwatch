import './App.css'

import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoDetails'
import Trending from './components/Trending'
import Gaming from './components/Gameing'
import ProtectedRoute from './components/protectedRoute'
import SavedVideos from './components/SavedVideos'
import CartContext from './context/CartContext'
import NotFound from './components/NotFoundContainer'

// Replace your code here
class App extends Component {
  state = {
    isdarktheme: false,
    savedvideos: [],
    activetab: 'HOME',
  }

  onchangetheme = () => {
    this.setState(prev => ({isdarktheme: !prev.isdarktheme}))
  }

  addtosavevideos = vdetails => {
    const {savedvideos} = this.state
    const videoobject = savedvideos.find(each => each.id === vdetails.id)
    if (videoobject) {
      this.setState(prev => ({
        savedvideos: [...prev.savedvideos],
      }))
    } else {
      this.setState({savedvideos: [...savedvideos, vdetails]})
    }
  }

  activetabitem = item => {
    this.setState({activetab: item})
  }

  removesavedvideos = id => {
    const {savedvideos} = this.state
    const update = savedvideos.filter(each => each.id !== id)
    this.setState({savedvideos: update})
  }

  render() {
    const {isdarktheme, savedvideos, activetab} = this.state
    return (
      <CartContext.Provider
        value={{
          isdarktheme,
          savedvideos,
          addtosavevideos: this.addtosavevideos,
          removesavedvideos: this.removesavedvideos,
          activetab,
          onchangetheme: this.onchangetheme,
          activetabitem: this.activetabitem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
