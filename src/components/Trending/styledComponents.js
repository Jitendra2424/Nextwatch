import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SearchVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgcolor};
  overflow-y: scroll;
  padding: 30px;
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`
export const TrendingVideoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  margin-left: 50px;
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  width: 100%;
`
export const TrendingLogo = styled.div`
  background-color: 394a3b8;
  border: 0px none;
  height: 50px;
  margin: 10px;
  width: 50px;
  justify-content: center;
  align-items: center;
`
export const TrendingHead = styled.h1`
  color: ${props => props.color};
`
export const HomeStickyContainer = styled.div`
  position: sticky;
`
export const HomeSideContainer = styled.div``
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: ${props => props.bgcolor};
`
export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`
export const Image = styled.img`
  width: 300px;
  margin: 20px;
`
export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
`
export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 20px;
`
export const Retry = styled.button`
  padding: 15px;
  color: blue;
  cursor: pointer;
`
