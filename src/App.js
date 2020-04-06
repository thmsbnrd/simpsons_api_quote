import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard 
        quote="Ahh! Sweet liquor eases the pain."
        character="Troy McClure"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112" 
      />
      <QuoteCard 
        quote="Eat my shorts"
        character="Bart Simpson"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
      />
    </div>
  );
}

export default App;

