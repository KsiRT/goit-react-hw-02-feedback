import { Component } from 'react';
import { Container, Heading } from './Section.styled';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <Container>
        <Heading>{title}</Heading>
        {children}
      </Container>
    );
  }
}
