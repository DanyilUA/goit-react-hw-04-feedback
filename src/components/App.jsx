import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export default function FeedBackForm() {

  const [feedbackOptions, setFeedbackOptions] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const onLeaveFeedback = option => {
    setFeedbackOptions(prevState => ({
      ...prevState, [option]: prevState[option] + 1,
    }));
    }

      return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={onLeaveFeedback}
            />
          </Section>

          <Section title="Statistics">
            <Statistics options={feedbackOptions} />
          </Section>
        </div>
      );
}

