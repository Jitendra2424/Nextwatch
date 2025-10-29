import {Link} from 'react-router-dom'
import {
  NavLink,
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottomContainer,
  VideosDetailsText,
  VideoDetailsContainer,
} from './styledComponents'

const VideoCardTwoG = props => {
  const {details} = props
  const {title, id, thumbnailUrl, viewCount} = details

  return (
    <NavLink to={`videos/${id}`}>
      <VideoCardContainer>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoCardBottomContainer>
          <VideoDetailsContainer>
            <VideosDetailsText>{title}</VideosDetailsText>

            <VideosDetailsText>{viewCount} views</VideosDetailsText>
          </VideoDetailsContainer>
        </VideoCardBottomContainer>
      </VideoCardContainer>
    </NavLink>
  )
}
export default VideoCardTwoG
