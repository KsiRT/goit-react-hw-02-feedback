import React from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = evt => {
    this.setState(prevState => {
      return {
        [evt.target.name]: prevState[evt.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((100 / this.countTotalFeedback()) * good);
  };

  render() {
    return (
      <>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>

        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </Section>
        ) : (
          <Notification message="There is no feedback yet :("></Notification>
        )}
      </>
    );
  }
}
