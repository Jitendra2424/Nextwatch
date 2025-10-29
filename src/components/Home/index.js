import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import Header from '../Header'
import {
  HomeContainer,
  HomeStickyContainer,
  BannerImageContainer,
  ModalContainer,
  BannerImage,
  CloseButton,
  GetButton,
} from './styledComponents'
import SideBar from '../SideBar'
import CartContext from '../../context/CartContext'
import SearchVideos from '../SearchVideos'

class Home extends Component {
  state = {display: 'flex'}

  onclose = () => {
    this.setState({display: 'none'}, this.renderhomevideos)
  }

  renderhomevideos = () => {
    const {display} = this.state
    return (
      <>
        <div className="cont">
          <BannerImageContainer data-testid="banner" display={display}>
            <ModalContainer>
              <BannerImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <p>Buy Nxt Watch Premium</p>
              <GetButton>GET IT NOW</GetButton>
            </ModalContainer>
            <CloseButton data-testid="close" onClick={this.onclose}>
              <IoMdClose size={20} color="#231f20" />
            </CloseButton>
          </BannerImageContainer>
          <SearchVideos />
        </div>
      </>
    )
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isdarktheme} = value
          const bgcolor = isdarktheme ? '#181818' : '#f9f9f9'
          return (
            <div data-testid="home">
              <Header />
              <HomeContainer bgcolor={bgcolor}>
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                {this.renderhomevideos()}
              </HomeContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default Home
