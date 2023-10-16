import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = () => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    return words.length;
  };

  return (
    <div className="word-counter-container">
      <div className="word-counter-header">
        <h1>Responsive Paragraph Word Counter</h1>
      </div>
      <div className="card shadow p-3 mb-5 bg-body rounded w-75">
        <textarea
          rows="4"
          cols="5"
          value={text}
          onChange={handleTextChange}
          placeholder="Type or paste your text here..."
        />
        <p>Word count: {wordCount()}</p>
      </div>
    </div>
  );
}

export default WordCounter;
