import PropTypes from 'prop-types';
import s from './CommentsCounter.module.scss';

function CommentsCounter({ counts }) {
  return <span className={s.commentsCounter}>{counts}</span>;
}

CommentsCounter.propTypes = {
  counts: PropTypes.number.isRequired,
};

export default CommentsCounter;
