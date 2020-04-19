import React from 'react';
import './QuoteForm.css';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { character: '' };
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
                this.setState({ character: event.target.value })
            }}
          />
        </form>
      );
    }
  }

  export default QuoteForm;