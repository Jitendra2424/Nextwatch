import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
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

const VideoCardTwo = props => {
  const {details} = props
  const {channel, title, id, thumbnailUrl, publishedAt, viewCount} = details
  const {name, profileImageUrl} = channel
  const parsaddate = new Date(publishedAt)
  const publishedtime = formatDistanceToNow(parsaddate)
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
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <VideoCardBottomContainer>
                <VideoDetailsContainer>
                  <VideosDetailsText color={color}>{title}</VideosDetailsText>
                  <VideosDetailsText color={color}>{name}</VideosDetailsText>

                  <div>
                    <VideosDetailsText color={color}>
                      <p>{viewCount}</p>
                    </VideosDetailsText>
                    <VideosDetailsText color={color}>
                      <p>{publishedtime} ago</p>
                    </VideosDetailsText>
                  </div>
                </VideoDetailsContainer>
              </VideoCardBottomContainer>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </CartContext.Consumer>
  )
}
export default VideoCardTwo
