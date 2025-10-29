import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import VideoCard from '../VideoItem'
import {
  SearchVideoContainer,
  SearchInput,
  VideosContainer,
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
class SearchVideos extends Component {
  state = {
    searchinput: '',
    searchvalue: '',
    apistatus: apistatusconstants.initial,
    searchedvideos: [],
  }

  componentDidMount() {
    this.getvideos()
  }

  onchangesearchinp = event => {
    this.setState({searchinput: event.target.value})
  }

  onclicksearchbutton = () => {
    const {searchinput} = this.state
    this.setState({searchvalue: searchinput}, this.getvideos)
  }

  onenter = event => {
    if (event.key === 'Enter') {
      const {searchinput} = this.state
      this.setState({searchvalue: searchinput}, this.getvideos)
    }
  }

  getvideos = async () => {
    const {searchvalue} = this.state
    this.setState({apistatus: apistatusconstants.inprogress})
    const url = `https://apis.ccbp.in/videos/all?search=${searchvalue}`
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
        channel: {
          name: eachv.channel.name,
          profileImageUrl: eachv.channel.profile_image_url,
        },
        publishedAt: eachv.published_at,
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

  renderloading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  rendervideos = () => (
    <CartContext.Consumer>
      {value => {
        const {isdarktheme} = value
        const {searchinput, searchedvideos} = this.state
        const bgcolor = isdarktheme ? '#231f20' : '#f9f9f9'
        const isvideosavailable = searchedvideos.length === 0
        return isvideosavailable ? (
          <div>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading>No Search results found</Heading>
            <Desc>Try different key words or remove search filter</Desc>
            <Retry onClick={this.getvideos}>Retry</Retry>
          </div>
        ) : (
          <SearchVideoContainer bgcolor={bgcolor}>
            <div>
              <SearchInput
                type="search"
                placeholder="Search"
                value={searchinput}
                onChange={this.onchangesearchinp}
                onKeyDown={this.onenter}
              />
              <button
                data-testid="searchButton"
                onClick={this.onclicksearchbutton}
                type="search"
              >
                <AiOutlineSearch />
              </button>
            </div>
            <VideosContainer>
              {searchedvideos.map(each => (
                <VideoCard key={each.id} details={each} />
              ))}
            </VideosContainer>
          </SearchVideoContainer>
        )
      }}
    </CartContext.Consumer>
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
      <Retry onClick={this.getvideos}>Retry</Retry>
    </NotFoundContainer>
  )

  renderallvideos = () => {
    const {apistatus} = this.state
    switch (apistatus) {
      case apistatusconstants.success:
        return this.rendervideos()
      case apistatusconstants.inprogress:
        return this.renderloading()
      case apistatusconstants.failure:
        return this.renderfailure()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderallvideos()}</>
  }
}
export default SearchVideos
