import React from 'react';
import './QuoteCard.css';
  
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
                </p>
            </figcaption>
        </figure>
    </div>
  );
};
  
export default DisplayQuote;