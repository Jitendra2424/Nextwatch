import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SearchVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgcolor};
  overflow-y: scroll;
  padding: 30px;
`
export const SearchInput = styled.input`
  width: 250px;
  border: 1px solid #64748b;
  border-radius: 2px;
  margin-left: 60px;
  padding: 3px;
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
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
