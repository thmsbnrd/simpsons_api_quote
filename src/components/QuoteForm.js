import React from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30;

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { character: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (this.state.character.length <= MAX_LENGTH) {
            this.setState({ character: event.target.value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
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
            onChange={this.handleChange}
          />
          <p>{this.state.character}</p>
        </form>
      );
    }
  }

  export default QuoteForm;