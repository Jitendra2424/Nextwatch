import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  FormContainer,
  WebsiteLogo,
  InputContainer,
  InputPassword,
  InputLabel,
  InputUser,
  ShowContainer,
  InputCheckbox,
  ErrorMsg,
  LoginButton,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showpassword: false,
    showerror: false,
    errormsg: '',
  }

  onchangeusername = event => {
    this.setState({username: event.target.value})
  }

  onchangepassword = event => {
    this.setState({password: event.target.value})
  }

  onsubmitsuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onsubmitfailure = err => {
    this.setState({showerror: true, errormsg: err})
  }

  onsubmitform = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userdetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onsubmitsuccess(data.jwt_token)
    } else {
      this.onsubmitfailure(data.error_msg)
    }
  }

  renderusername = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="name">USERNAME</InputLabel>
        <InputUser
          type="text"
          value={username}
          id="name"
          onChange={this.onchangeusername}
          placeholder="Username"
         />
      </>
    )
  }

  oncheckpass = () => {
    this.setState(prevstate => ({showpassword: !prevstate.showpassword}))
  }

  renderpassword = () => {
    const {password, showpassword} = this.state
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <InputPassword
          type={showpassword ? 'text' : 'password'}
          value={password}
          onChange={this.onchangepassword}
          placeholder="Password"
          id="password"
         />
        <ShowContainer>
          <InputCheckbox
            type="checkbox"
            id="check"
            checked={showpassword}
            onChange={this.oncheckpass}
           />
          <InputLabel htmlFor="check">Show Password</InputLabel>
        </ShowContainer>
      </>
    )
  }

  render() {
    const {errormsg, showerror} = this.state
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <FormContainer onSubmit={this.onsubmitform}>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderusername()}</InputContainer>
          <InputContainer>{this.renderpassword()}</InputContainer>
          {showerror && <ErrorMsg>*{errormsg}</ErrorMsg>}
          <LoginButton type="submit">Login</LoginButton>
        </FormContainer>
      </LoginContainer>
    )
  }
}
export default Login
