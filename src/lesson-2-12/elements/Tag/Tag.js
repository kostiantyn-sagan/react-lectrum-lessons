import PropTypes from 'prop-types';
import s from './Tag.module.scss';

function Tag({ source }) {
  return (
    <div>
      <span className={s.tag}>{source}</span>
    </div>
  );
}

Tag.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Tag;
