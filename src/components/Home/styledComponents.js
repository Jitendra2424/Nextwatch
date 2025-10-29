import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${props => props.bgcolor};
`
export const HomeStickyContainer = styled.div`
  position: sticky;
`
export const BannerImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => props.display};
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
  height: 40vh;
  padding: 50pr;
`
export const GetButton = styled.button`
  color: #181818;
  background-color: transparent;
  height: 30px;
  width: 100px;
  border-color: #181818;
  border-style: solid;
  text-align: center;
`
export const BannerImage = styled.img`
  object-fit: fill;
  width: 250px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  align-self: flex-start;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`
