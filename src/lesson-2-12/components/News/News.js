import s from './News.module.scss';
import Article from '../Article';

function News({ source }) {
  return (
    <section className={s.news}>
      {source.map(
        ({ title, description, published, likes, comments, image, tags }) => (
          <Article
            key={title}
            title={title}
            description={description}
            published={published}
            likes={likes}
            comments={comments}
            image={image}
            tags={tags}
          />
        ),
      )}
    </section>
  );
}

export default News;
