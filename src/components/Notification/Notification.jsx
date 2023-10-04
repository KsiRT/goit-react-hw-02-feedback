import { Component } from 'react';
import { Container, Heading } from './NotificationStyled';

export class Notification extends Component {
  render() {
    const { message } = this.props;

    return (
      <Container>
        <Heading>{message}</Heading>
      </Container>
    );
  }
}
