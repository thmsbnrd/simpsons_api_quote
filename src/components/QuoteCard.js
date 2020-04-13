import React from 'react';
import PropTypes from 'prop-types';
import './QuoteCard.css';

function QuoteCard(props) {
  return (
    <figure className="QuoteCard">
      <img src={props.image} alt={props.character} />
      <figcaption>
        <blockquote>{props.quote}</blockquote>
        <cite>{props.character}</cite>
      </figcaption>
    </figure>
  );
}

QuoteCard.propTypes = {
  character: PropTypes.string.isRequired
};

export default QuoteCard;
