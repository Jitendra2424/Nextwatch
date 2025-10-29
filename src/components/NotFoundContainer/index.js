import CartContext from '../../context/CartContext'
import {NotFoundContainer, Image, Heading, Desc} from './styledComponents'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {isdarktheme} = value
      const image = isdarktheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const isdarkdesc = isdarktheme ? 'white' : 'black'
      const isdarkhead = isdarktheme ? 'white' : 'black'
      const cont = isdarktheme ? 'black' : 'white'
      return (
        <>
          <NotFoundContainer isdark={cont}>
            <Image src={image} alt="not found" />
            <Heading isdark={isdarkhead}>Page Not Found</Heading>
            <Desc isdark={isdarkdesc}>
              we are sorry, the page you requested could not be found.
            </Desc>
          </NotFoundContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default NotFound
