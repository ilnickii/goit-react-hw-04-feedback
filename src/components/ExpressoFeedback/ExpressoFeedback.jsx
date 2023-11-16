import css from './ExpressoFeedback.module.css';

export const ExpressoFeedback = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.buttons}>
      {options.map(option => (
        <button
          key={option}
          className={css.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};