import React from 'react';
import { Button, Container, Heading } from './FeedbackOptionsStyled';
import { Statistics } from 'components/Statistics/Statistics';

export class FeedbackOptions extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodButtonClick = event => {
    this.setState({
      good: this.state.good + 1,
    });
  };

  onNeutralButtonClick = event => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };

  onBadButtonClick = event => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  };

  render() {
    return (
      <Container>
        <Heading>Please leave a feedback</Heading>
        <Button type="button" onClick={this.onGoodButtonClick}>
          Noice!
        </Button>
        <Button type="button" onClick={this.onNeutralButtonClick}>
          I mean it`s alright
        </Button>
        <Button type="button" onClick={this.onBadButtonClick}>
          Meh~
        </Button>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </Container>
    );
  }
}
