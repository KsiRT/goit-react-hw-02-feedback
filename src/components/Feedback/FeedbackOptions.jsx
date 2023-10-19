import React from 'react';
import { Button, Item, List } from './FeedbackOptionsStyled';

export class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    const buttons = options.map(option => (
      <Item key={option}>
        <Button type="button" onClick={onLeaveFeedback} name={option}>
          {option}
        </Button>
      </Item>
    ));
    return <List>{buttons}</List>;
  }
}
