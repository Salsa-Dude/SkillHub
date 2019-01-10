import React, { Component,Fragment } from 'react'
import { Button, Form, Message,  Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment,
  Sidebar, Visibility, } from 'semantic-ui-react'


class LoginContainer extends Component {
  constructor() {
    super() 
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleLoginSubmit = () => {
    fetch(`http://localhost:3000/api/v1/login`, {
      method:"POST",
      headers: {
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.error){
        alert('Incorrect username or password')
      }else{
        console.log(data)
        this.props.setCurrentUser(data.user_info)
        localStorage.setItem('token', data.token)
      }
    })
  }

  render() {
    return (
      <Form className="login-form"
        onSubmit={this.handleLoginSubmit}
        size="big"
        key="big"
        // loading={this.props.authenticatingUser}
        error={this.props.failedLogin}
      >
        <Message
          error
          header={this.props.failedLogin ? this.props.error : null}
        />
        <Form.Field>
        <Form.Input
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </Form.Field>
        <Form.Field>
        <Form.Input
          type="password"
          placeholder="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        </Form.Field>
        
        <Button size="big" className="login-btn" fluid type="submit">Get Started</Button>
      </Form>
    )
  }
}

export default LoginContainer;