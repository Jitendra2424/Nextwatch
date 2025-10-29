import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  @media screen and (min-width: 992px) {
    width: 350px;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
    padding: 40px;
  }
`
export const WebsiteLogo = styled.img`
  width: 185px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const InputLabel = styled.label`
  color: #475569;
  margin-bottom: 0px;
  font-size: 12px;
  font-family: Roboto;
  font-weight: bold;
  line-height: 16px;
`
export const InputUser = styled.input`
  font-size: 14px;
  height: 40px;
  color: #64748b;
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px;
  otline: none;
`
export const InputPassword = styled.input`
  font-size: 14px;
  height: 40px;
  color: #64748b;
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px;
  outline: none;
`
export const ShowContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
export const InputCheckbox = styled.input`
  margin-right: 4px;
`
export const LoginButton = styled.button`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  align-self: flex-start;
  font-size: 12px;
  color: #ff0b37;
`
