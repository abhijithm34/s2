import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError('All fields are required');
    } else {
      alert(`Submitted!\nName: ${name}\nEmail: ${email}`);
      setError('');
      setName('');
      setEmail('');
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Simple Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        /><br /><br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;