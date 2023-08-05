import countTotalFeedback from 'utilits/countTotalFeedback';
import countPositiveFeedbackPercentage from 'utilits/countPositiveFeedbackPercentage';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export function Statistics({ options }) {
  const { good, neutral, bad } = options;

  return (
    <>
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <div className="container">
          <ul className={css.list}>
            <li className={css.item}>Good: {good}</li>
            <li className={css.item}>Neutral: {neutral}</li>
            <li className={css.item}>Bad: {bad}</li>
            <li className={css.item}>total: {countTotalFeedback(options)}</li>
            <li className={css.item}>
              Positive Feedback: {countPositiveFeedbackPercentage(options)}%
            </li>
          </ul>
        </div>
      ) : (
          <p className={ css.text}>No feedback given</p>
      )}
    </>
  );
}

countTotalFeedback.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};