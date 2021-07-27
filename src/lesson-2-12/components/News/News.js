import PropTypes from 'prop-types';
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

News.propTypes = {
  source: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
};

export default News;
