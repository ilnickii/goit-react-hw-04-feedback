import css from '../ExpressoFeedback/ExpressoFeedback.module.css';

export const Statistics = ({ good,
    neutral,
    bad,
    total,
    positivePercentage, }) => {
    return (
        <div className={css.statistics}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive Feedback: {positivePercentage}%</p>
        </div>
    );
};