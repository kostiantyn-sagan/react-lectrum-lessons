import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './Accordion.module.scss';

function Accordion({ source, title = 'Accordion' }) {
  const [{ selected, selectedIdx }, setState] = useState({
    selected: false,
    selectedIdx: null,
  });

  const toggle = idx => {
    setState(({ selected }) => ({
      selected: !selected,
      selectedIdx: idx,
    }));
  };

  return (
    <section className={s.accordion}>
      <h1>{title}</h1>
      {source.map(({ question, answer }, idx) => (
        <div
          key={idx}
          className={`${s.accordionItem} ${
            selected && selectedIdx === idx ? s.selected : ''
          }`.trim()}
        >
          <div className={s.accordionQuestion} onClick={() => toggle(idx)}>
            <span>{`${idx + 1}. ${question}`}</span>
          </div>
          <p className={s.accordionAnswer}>{answer}</p>
        </div>
      ))}
    </section>
  );
}

Accordion.propTypes = {
  source: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  title: PropTypes.string,
};

export default Accordion;
