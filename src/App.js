import React from 'react';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';

const sampleQuotes = {
  quote: "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuotes
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          quote: data[0],
        });
      });
  }

  render() {
    return (
    <div className="App">
      <DisplayQuote quote={this.state.quote} />
      <button type="button" onClick={this.getQuote}>Get Random Quote</button>
    </div>
    );
  }
}




export default App;
