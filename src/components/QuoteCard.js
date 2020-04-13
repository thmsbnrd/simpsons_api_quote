import React from 'react';
import PropTypes from 'prop-types';
import './QuoteCard.css';

function QuoteCard(props) {
  return (
    <figure className="QuoteCard">
      <img src={props.image} alt={props.character} />
      <figcaption>
        <blockquote>{props.quote}</blockquote>
        <cite>{props.characterFirstName + ' ' + props.characterLastName}</cite>
      </figcaption>
    </figure>
  );
}

QuoteCard.propTypes = {
  characterFirstName: PropTypes.string.isRequired,
  characterLastName: PropTypes.string.isRequired,
};

export default QuoteCard;
