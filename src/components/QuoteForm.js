import React from 'react';
import './QuoteForm.css';

class QuoteForm extends React.Component {
    render() {
      return (
        <form className="QuoteForm">
          <label htmlFor="character">Character:</label>
          <input
            id="character"
            name="character"
            type="text"
            value="Homer"
            onChange={(event) => {
              const input = event.target;
              console.log('NAME:', input.name, 'VALUE:', input.value);
            }}
          />
        </form>
      );
    }
  }

  export default QuoteForm;