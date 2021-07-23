import s from './Tag.module.scss';

function Tag({ source }) {
  return (
    <div>
      <span className={s.tag}>{source}</span>
    </div>
  );
}

export default Tag;
