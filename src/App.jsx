import React from 'react';
import ScholarshipForm from './components/ScholarshipForm';
import { getScholarshipSuggestions } from './components/gemini';
import { useState } from 'react'; 

function App() {
  const handleFormSubmit = async (data) => {
    setSuggestions("Loading suggestions...");
    const response = await getScholarshipSuggestions(data);
    setSuggestions(response);
  };
 

  const [suggestions, setSuggestions] = useState('');
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        padding: '20px',
      }}
    >
      <h1>🎓 Scholarship Finder</h1>
      <p>Enter your profile details to get matched scholarships:</p>
      <ScholarshipForm onSubmit={handleFormSubmit} />
      {suggestions && (
      <div style={{ marginTop: '20px', maxWidth: '500px', whiteSpace: 'pre-wrap' }}>
        <h3>🎯 AI-Suggested Scholarships:</h3>
        <p>{suggestions}</p>
      </div>
    )}
    </div>
  );
  
}

export default App;
