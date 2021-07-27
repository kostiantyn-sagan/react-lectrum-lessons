import PropTypes from 'prop-types';
import s from './Article.module.scss';
import Tag from '../../elements/Tag';
import CommentsCounter from '../../elements/CommentsCounter';
import LikesCounter from '../../elements/LikesCounter';

function Article({
  title,
  description,
  published,
  likes,
  comments,
  image,
  tags,
}) {
  const parseDateString = dateString => {
    const date = new Date(Date.parse(dateString));

    const dayOfMonth = date.getDate();
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const year = date.getFullYear();

    return `${dayOfMonth}.${month}.${year}`;
  };

  return (
    <section className={s.article}>
      <header>
        <div className={s.poster}>
          <img src={image} alt={tags} />
        </div>
        <div className={s.tags}>
          {tags.map(tag => (
            <Tag key={tag} source={tag} />
          ))}
        </div>
      </header>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
      <footer>
        <span>{parseDateString(published)}</span>
        <div className={s.controls}>
          <CommentsCounter counts={comments} />
          <LikesCounter counts={likes} />
        </div>
      </footer>
    </section>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, 
  published: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default Article;
