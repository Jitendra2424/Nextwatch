import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import VideoCardTwo from '../VideoCardTwo'
import CartContext from '../../context/CartContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  SearchVideoContainer,
  NotFoundContainer,
  TrendingHeadContainer,
  TrendingLogo,
  TrendingHead,
  VideosContainer,
  Image,
  Heading,
  Desc,
  HomeSideContainer,
  HomeStickyContainer,
  HomeContainer,
} from './styledComponents'

class SavedVideos extends Component {
  rendersavedvideos = () => (
    <CartContext.Consumer>
      {value => {
        const {isdarktheme, savedvideos} = value
        const bgcolor = isdarktheme ? '#f0f0f0' : '#f9f9f9'
        const textcolor = isdarktheme ? '#f9f9f9' : '#181818'
        const isvideosavailable = savedvideos.length === 0
        return isvideosavailable ? (
          <NotFoundContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading>No saved videos found</Heading>
            <Desc>You can save your videos while watching them</Desc>
          </NotFoundContainer>
        ) : (
          <SearchVideoContainer bgcolor={bgcolor}>
            <TrendingHeadContainer bgcolor={bgcolor}>
              <TrendingLogo>
                <AiFillFire />
              </TrendingLogo>
              <TrendingHead color={textcolor}>Saved Videos</TrendingHead>
            </TrendingHeadContainer>
            <VideosContainer>
              {savedvideos.map(each => (
                <VideoCardTwo key={each.id} details={each} />
              ))}
            </VideosContainer>
          </SearchVideoContainer>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isdarktheme} = value
          const bgcolor = isdarktheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <div data-testid="savedVideos">
              <Header />
              <HomeContainer data-testid="home" bgcolor={bgcolor}>
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                <HomeSideContainer bgcolor={bgcolor}>
                  {this.rendersavedvideos()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default SavedVideos
