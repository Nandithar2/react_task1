import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  return (
    <div className="App">
      <h1> Responsive Paragraph Word Counter </h1>
      <textarea
        className="textarea"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;