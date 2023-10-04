import { Component } from 'react';
import { Item, List } from './StatisticsStyled';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <List>
          <Item>Good:{good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total:{total}</Item>
          <Item>Positive feedback: {positivePercentage}%</Item>
        </List>
      </>
    );
  }
}
