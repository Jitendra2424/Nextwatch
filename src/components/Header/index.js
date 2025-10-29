import {Link, withRouter} from 'react-router-dom'
import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'
import {
  NavHeader,
  WebsiteLogo,
  ContentContainer,
  ContentListItem,
  ProfileImage,
  ThemeButton,
  LogoutButton,
  ModalContainer,
  AlignColumn,
  AlignRow,
  ModalDesc,
  CloseButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => {
  const onlogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <CartContext.Consumer>
      {value => {
        const {isdarktheme, onchangetheme} = value
        const imgurl = isdarktheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const bgcolor = isdarktheme ? '#181818' : '#f9f9f9'
        const textcolor = isdarktheme ? '#f9f9f9' : '#181818'

        const changetheme = () => {
          onchangetheme()
        }
        return (
          <NavHeader bgcolor={bgcolor}>
            <Link to="/">
              <WebsiteLogo src={imgurl} alt="website logo" />
            </Link>
            <ContentContainer>
              <ContentListItem>
                <ThemeButton
                  data-testid="theme"
                  color={textcolor}
                  onClick={changetheme}
                >
                  {isdarktheme ? <FiSun /> : <BsMoon />}
                </ThemeButton>
              </ContentListItem>
              <ContentListItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ContentListItem>
              <ContentListItem>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" data-testid="iconButton">
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <ModalContainer>
                      <AlignColumn>
                        <ModalDesc>Are you sure,you want to logout</ModalDesc>
                        <AlignRow>
                          <CloseButton onClick={() => close()}>
                            Cancel
                          </CloseButton>
                          <ConfirmButton onClick={onlogout}>
                            Confirm
                          </ConfirmButton>
                        </AlignRow>
                      </AlignColumn>
                    </ModalContainer>
                  )}
                </Popup>
              </ContentListItem>
            </ContentContainer>
          </NavHeader>
        )
      }}
    </CartContext.Consumer>
  )
}
export default withRouter(Header)
