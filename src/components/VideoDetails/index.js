import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'
import {formatDistanceToNow} from 'date-fns'
import CartContext from '../../context/CartContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  HomeContainer,
  ProductsLoaderContainer,
  ViewsDetailsContainer,
  VideoDetailsSideContainer,
  VideoDetailsTitle,
  VideoDetailsTextContainer,
  LikesContainer,
  ViewText,
  IconContainer,
  HorizontalLine,
  ChannelLogo,
  ChannelContainer,
  ChannelDetailsContainer,
  LogoContainer,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  NavLink,
  Retry,
} from './styledComponents'

const apistatusconstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}
class VideoItemDetails extends Component {
  state = {
    videodetails: [],
    apistatus: apistatusconstants.initial,
    isvideosaved: false,
    isliked: false,
    isdisliked: false,
  }

  componentDidMount() {
    this.getvideodetails()
  }

  getvideodetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apistatus: apistatusconstants.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedata = {
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriberCount,
        },
      }
      this.setState({
        videodetails: updatedata,
        apistatus: apistatusconstants.success,
      })
    } else {
      this.setState({apistatus: apistatusconstants.failure})
    }
  }

  renderspecificvideo = () => (
    <CartContext.Consumer>
      {value => {
        const {videodetails, isvideosaved, isliked, isdisliked} = this.state
        const {
          id,
          channel,
          description,
          viewCount,
          videoUrl,
          title,
          publishedAt,
          videoSaved,
        } = videodetails
        const {name, profileImageUrl, subscriberCount} = channel
        const {addtosavevideos, removesavedvideos} = value

        const addorremoveitem = () => {
          if (isvideosaved === true) {
            removesavedvideos(id)
          } else {
            addtosavevideos({...videodetails, videoSaved: true})
          }
        }
        const savevideostolist = () => {
          this.setState(
            prev => ({isvideosaved: !prev.isvideosaved}),
            addorremoveitem,
          )
        }
        const parsaddate = new Date(publishedAt)
        const publishedtime = formatDistanceToNow(parsaddate)

        const onclicklikebutton = () => {
          this.setState(prev => ({isliked: !prev.isliked, isdisliked: false}))
        }
        const onclickdislikebutton = () => {
          this.setState(prev => ({
            isdisliked: !prev.isdisliked,
            isliked: false,
          }))
        }
        const likeclass = isliked ? '#2563eb' : '#64748b'
        const dislikeclass = isdisliked ? '#2563eb' : '#64748b'
        const likeicon = isliked ? <AiFillLike /> : <AiOutlineLike />
        const dislikeicon = isdisliked ? (
          <AiFillDislike />
        ) : (
          <AiOutlineDislike />
        )
        return (
          <div data-testid="videoItemDetails">
            <Header />
            <HomeContainer>
              <SideBar />
              <VideoDetailsSideContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="90%"
                  height="500px"
                />
                <VideoDetailsTextContainer>
                  <VideoDetailsTitle>{title}</VideoDetailsTitle>
                  <ViewsDetailsContainer>
                    <ViewText>{viewCount} views</ViewText>
                    <ViewText>{publishedtime} ago</ViewText>
                    <LikesContainer>
                      <IconContainer
                        type="button"
                        color={likeclass}
                        onClick={onclicklikebutton}
                      >
                        {likeicon} <ViewText color={likeclass}>Like</ViewText>
                      </IconContainer>
                      <IconContainer
                        type="button"
                        color={dislikeclass}
                        onClick={onclickdislikebutton}
                      >
                        {dislikeicon}
                        <ViewText color={dislikeclass}>Dislike</ViewText>
                      </IconContainer>
                      <IconContainer
                        type="button"
                        color={videoSaved ? '#4f46e5' : '#181818'}
                        onClick={savevideostolist}
                      >
                        <RiPlayListAddFill />
                        <ViewText color={videoSaved ? '#4f46e5' : '#181818'}>
                          {isvideosaved ? 'Saved' : 'Save'}
                        </ViewText>
                      </IconContainer>
                    </LikesContainer>
                  </ViewsDetailsContainer>
                  <HorizontalLine />
                  <ChannelContainer>
                    <LogoContainer>
                      <ChannelLogo src={profileImageUrl} alt="channel logo" />
                    </LogoContainer>
                    <ChannelDetailsContainer>
                      <ViewText>{name}</ViewText>
                      <ViewText>{subscriberCount} subscribers</ViewText>
                      <ViewText>{description}</ViewText>
                    </ChannelDetailsContainer>
                  </ChannelContainer>
                </VideoDetailsTextContainer>
              </VideoDetailsSideContainer>
            </HomeContainer>
          </div>
        )
      }}
    </CartContext.Consumer>
  )

  renderloading = () => (
    <ProductsLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  renderfailure = () => (
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alit="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Desc>
        We are having some trouble to complete your request.please try again.
      </Desc>
      <NavLink>
        <Retry onClick={this.getvideodetails}>Retry</Retry>
      </NavLink>
    </NotFoundContainer>
  )

  renderallvideos = () => {
    const {apistatus} = this.state
    switch (apistatus) {
      case apistatusconstants.success:
        return this.renderspecificvideo()
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
export default VideoItemDetails
