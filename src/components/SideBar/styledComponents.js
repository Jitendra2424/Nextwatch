import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 80vh;
  position: sticky;
`
export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`
export const TextItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.isactive};
  width: 100%;
  cursor: pointer;
`
export const ItemText = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  width: 150px;
  margin-right: 20px;
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
`
export const BottomText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  width: 140px;
  font-size: 20px;
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const IconImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
  cursor: pointer;
`
export const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  color: ${props => props.color};
`
