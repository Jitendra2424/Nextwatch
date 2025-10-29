import {Component} from 'react'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import CartContext from '../../context/CartContext'
import {
  SideBarContainer,
  NavItemsContainer,
  ItemText,
  TextItemContainer,
  BottomContainer,
  BottomText,
  IconsContainer,
  IconImg,
  NavLink,
} from './styledComponents'

class SideBar extends Component {
  renderstatusitems = () => (
    <CartContext.Consumer>
      {value => {
        const {activetabitem, activetab, isdarktheme} = value
        const onClickHome = () => {
          activetabitem('HOME')
        }
        const onclicktrending = () => {
          activetabitem('TRENDING')
        }
        const onclickgameing = () => {
          activetabitem('GAMING')
        }
        const onclicksaved = () => {
          activetabitem('SAVED VIDEOS')
        }
        const bgcolor = isdarktheme ? '#ffffff' : '#000000'
        const textcolor = isdarktheme ? '#f9f9f9' : '#181818'
        return (
          <SideBarContainer>
            <NavItemsContainer>
              <TextItemContainer
                isactive={activetab === 'HOME' ? '#f1f5f9' : 'transparent'}
                isactivebg={bgcolor}
                onClick={onClickHome}
              >
                <NavLink
                  to="/"
                  color={activetab === 'HOME' ? '#ff0000' : {bgcolor}}
                >
                  <AiFillHome />
                  <ItemText
                    color={activetab === 'HOME' ? '#ff0000' : {textcolor}}
                  >
                    Home
                  </ItemText>
                </NavLink>
              </TextItemContainer>
              <TextItemContainer
                isactive={activetab === 'TRENDING' ? '#f1f5f9' : 'transparent'}
                isactivebg={bgcolor}
                onClick={onclicktrending}
              >
                <NavLink
                  to="/trending"
                  color={activetab === 'TRENDING' ? '#ff0000' : {bgcolor}}
                >
                  <AiFillFire />
                  <ItemText
                    color={activetab === 'TRENDING' ? '#ff0000' : {textcolor}}
                  >
                    Trending
                  </ItemText>
                </NavLink>
              </TextItemContainer>
              <TextItemContainer
                isactive={activetab === 'GAMING' ? '#f1f5f9' : 'transparent'}
                isactivebg={bgcolor}
                onClick={onclickgameing}
              >
                <NavLink
                  to="/gaming"
                  color={activetab === 'GAMING' ? '#ff0000' : {bgcolor}}
                >
                  <SiYoutubegaming />
                  <ItemText
                    color={activetab === 'GAMING' ? '#ff0000' : {textcolor}}
                  >
                    Gaming
                  </ItemText>
                </NavLink>
              </TextItemContainer>
              <TextItemContainer
                isactive={
                  activetab === 'SAVED VIDEOS' ? '#f1f5f9' : 'transparent'
                }
                isactivebg={bgcolor}
                onClick={onclicksaved}
              >
                <NavLink
                  to="/saved-videos"
                  color={activetab === 'SAVED VIDEOS' ? '#ff0000' : {bgcolor}}
                >
                  <MdPlaylistAdd />
                  <ItemText
                    color={
                      activetab === 'SAVED VIDEOS' ? '#ff0000' : {textcolor}
                    }
                  >
                    Saved videos
                  </ItemText>
                </NavLink>
              </TextItemContainer>
            </NavItemsContainer>
            <BottomContainer>
              <BottomText>CONTACT US</BottomText>
              <IconsContainer>
                <IconImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <IconImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <IconImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </IconsContainer>
              <ItemText color={textcolor}>
                Enjoy! Now to see your channels and recommendations!
              </ItemText>
            </BottomContainer>
          </SideBarContainer>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <>{this.renderstatusitems()}</>
  }
}
export default SideBar
