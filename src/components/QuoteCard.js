import React from 'react';
//import PropTypes from 'prop-types';
import './QuoteCard.css';

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorite: false}
  }

  render() {
    return (
      <figure className="QuoteCard">
        <img src={this.props.image} alt={this.props.character} />
        <figcaption>
          <blockquote>{this.props.quote}</blockquote>
          <p>
            <cite>{this.props.character}</cite>
            <span 
            onClick={event => {
              const newFav = !this.state.favorite;
              this.setState({ favorite: newFav });
            }}
            className={this.state.favorite ? "is-favorite" : ""}
            >&#9733;</span>
          </p>
        </figcaption>
      </figure>
    );
  }
}

export default QuoteCard;
