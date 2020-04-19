import React from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30;

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { character: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        if (event.target.value.length <= MAX_LENGTH) {
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
                className={(this.state.character.length >= MAX_LENGTH) ? "length-maximum-reached" : "length-ok"}
                name="character"
                type="text"
                value={this.state.character}
                onChange={this.handleChange}
            />
            <p className="remaining-characters">{MAX_LENGTH - this.state.character.length} remaining characters.</p>
            <p>{this.state.character}</p>
            </form>
        );
    }
  }

  export default QuoteForm;