import s from './CommentsCounter.module.scss';

function CommentsCounter({ counts }) {
  return <span className={s.commentsCounter}>{counts}</span>;
}

export default CommentsCounter;
