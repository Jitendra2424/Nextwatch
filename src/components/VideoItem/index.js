import CartContext from '../../context/CartContext'
import {
  NavLink,
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottomContainer,
  ProfileImage,
  VideosDetailsText,
  VideoDetailsContainer,
} from './styledComponents'

const VideoCard = props => {
  const {details} = props
  const {channel, title, id, thumbnailUrl, publishedAt, viewCount} = details
  const {name, profileImageUrl} = channel
  return (
    <CartContext.Consumer>
      {value => {
        const {isdarktheme} = value
        const bgcolor = isdarktheme ? '#181818' : '#f9f9f9'
        const color = isdarktheme ? '#f9f9f9' : '#181818'
        return (
          <NavLink to={`videos/${id}`}>
            <VideoCardContainer bgcolor={bgcolor}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardBottomContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoDetailsContainer>
                  <VideosDetailsText color={color}>{title}</VideosDetailsText>
                  <VideosDetailsText color={color}>{name}</VideosDetailsText>
                  <VideosDetailsText color={color}>
                    <p>{viewCount} views</p>
                  </VideosDetailsText>
                  <VideosDetailsText color={color}>
                    <p>{publishedAt}</p>
                  </VideosDetailsText>
                </VideoDetailsContainer>
              </VideoCardBottomContainer>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </CartContext.Consumer>
  )
}
export default VideoCard
