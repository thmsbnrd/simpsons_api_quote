import React from 'react';
import './QuoteForm.css';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { character: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ character: event.target.value });
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
        </form>
      );
    }
  }

  export default QuoteForm;