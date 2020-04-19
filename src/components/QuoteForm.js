import React from 'react';
import './QuoteForm.css';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { character: 'Homer Simpson' };
    }

    render() {
      return (
        <form className="QuoteForm">
          <label htmlFor="character">Character:</label>
          <input
            id="character"
            name="character"
            type="text"
            value={this.state.character}
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