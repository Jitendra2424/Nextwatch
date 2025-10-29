import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import VideoCardTwoG from '../GameingVideo'
import Header from '../Header'
import SideBar from '../SideBar'
import CartContext from '../../context/CartContext'
import {
  SearchVideoContainer,
  VideosContainer,
  HomeStickyContainer,
  HomeSideContainer,
  HomeContainer,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  Retry,
} from './styledComponents'

const apistatusconstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}
class Gaming extends Component {
  state = {
    apistatus: apistatusconstants.initial,
    searchedvideos: [],
  }

  componentDidMount() {
    this.getvideos()
  }

  getvideos = async () => {
    this.setState({apistatus: apistatusconstants.inprogress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedata = data.videos.map(eachv => ({
        id: eachv.id,
        thumbnailUrl: eachv.thumbnail_url,
        viewCount: eachv.view_count,
        title: eachv.title,
      }))
      this.setState({
        searchedvideos: updatedata,
        apistatus: apistatusconstants.success,
      })
    } else {
      this.setState({apistatus: apistatusconstants.failure})
    }
  }

  rendergamingvideos = () => (
    <CartContext.Consumer>
      {value => {
        const {isdarktheme} = value
        const {searchedvideos} = this.state
        const bgcolor = isdarktheme ? '#231f20' : '#0f0f0f'

        return (
          <SearchVideoContainer data-testid="gaming" bgcolor={bgcolor}>
            <h1>Gaming</h1>
            <VideosContainer>
              {searchedvideos.map(each => (
                <VideoCardTwoG key={each.id} details={each} />
              ))}
            </VideosContainer>
          </SearchVideoContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderloading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="3b82f6" height="50" width="50" />
    </div>
  )

  renderfailure = () => (
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Desc>
        We are having some trouble to complete your request.Please try again.
      </Desc>
      <Retry onClick={this.getvideos} type="button">
        Retry
      </Retry>
    </NotFoundContainer>
  )

  renderallvideos = () => {
    const {apistatus} = this.state
    switch (apistatus) {
      case apistatusconstants.success:
        return this.rendergamingvideos()
      case apistatusconstants.inprogress:
        return this.renderloading()
      case apistatusconstants.failure:
        return this.renderfailure()
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isdarktheme} = value
          const bgcolor = isdarktheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <div>
              <Header />
              <HomeContainer data-testid="gaming" bgcolor={bgcolor}>
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                <HomeSideContainer bgcolor={bgcolor}>
                  {this.renderallvideos()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default Gaming
