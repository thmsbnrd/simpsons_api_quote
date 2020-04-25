import React from 'react';
  
function DisplayQuote({ quote }) {
  return (
    <div className="DisplayQuote">
        <figure className="QuoteCard">
            <img 
                src={quote.image} 
                alt={quote.character} 
            />
            <figcaption>
                <blockquote>{quote.quote}</blockquote>
                <p>
                    <cite>{quote.character}</cite>
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
    </div>
  );
};
  
export default DisplayQuote;