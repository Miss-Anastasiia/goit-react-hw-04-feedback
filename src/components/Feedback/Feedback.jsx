import PropTypes from 'prop-types';
import { Button } from './FeedbackStyled';

const Feedback = ({ options, leaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button
          type="button"
          onClick={leaveFeedback}
          name={option}
          key={option}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaveFeedback: PropTypes.func,
};

export default Feedback;
