import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {

    return (
            <ul className={css.list}>
                {options.map(option => {
                    return (
                      <li className={ css.item} key={option}>
                        <button
                          className={ css.button}
                          type="buttom"
                          onClick={() => onLeaveFeedback(option)}
                        >
                          {option}
                        </button>
                      </li>
                    );
                })}
            </ul>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

