import s from './Article.module.scss';
import Tag from '../../elements/Tag/Tag';
import CommentsCounter from '../../elements/CommentsCounter/CommentsCounter';
import LikesCounter from '../../elements/LikesCounter/LikesCounter';

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

export default Article;
