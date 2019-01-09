import React, { Component,Fragment } from 'react'
import { Button, Form, Message,  Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment,
  Sidebar, Visibility, } from 'semantic-ui-react'


class LoginContainer extends Component {
  render() {
    return (
      <Form className="login-form"
        // onSubmit={this.handleLoginSubmit}
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
            name="Email"
            // onChange={this.handleChange}
            // value={this.state.username}
          />
        </Form.Field>
        <Form.Field>
        <Form.Input
          type="password"
          placeholder="password"
          name="password"
          // onChange={this.handleChange}
          // value={this.state.password}
        />
        </Form.Field>
        
        <Button size="big" className="login-btn" fluid type="submit">Get Started</Button>
      </Form>
    )
  }
}

export default LoginContainer;