import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  position: sticky;
  height: 50px;
  background-color: ${props => props.bgcolor};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  margin-left: 10px;
`
export const ContentContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`
export const ContentListItem = styled.li`
  display: flex;
`
export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  padding: 8px;
  color: #ffffff;
  background-color: #0967d2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px none;
  cursor: pointer;
  color: ${props => props.color};
`
export const WebsiteLogo = styled.img`
  width: 160px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  background-color: #cbd5e1;
  border-radius: 10px;
`
export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 1px solid grey;
  padding: 10px;
  color: grey;
  outline: none;
  font-size: 15px;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  margin: 10px;
  color: black;
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  border: 1px solid grey;
  padding: 10px;
  color: white;
  outline: none;
  font-size: 15px;
`
