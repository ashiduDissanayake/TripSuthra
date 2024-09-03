import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  const handleSend = async () => {
    console.log('API Key:', process.env.REACT_APP_API_KEY);  // Add this line in your component

    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    try {
      const response = await model.generateContent(input);
      const botMessage = { text: response.response.text(), sender: 'bot' };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage = { text: 'Sorry, something went wrong. Please try again.', sender: 'bot' };
      setMessages([...messages, userMessage, errorMessage]);
    }

    setInput('');

  };

  return (
    <div style={{ width: '300px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <div style={{ height: '400px', overflowY: 'scroll', marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', marginBottom: '10px' }}>
            <span style={{ backgroundColor: msg.sender === 'user' ? '#e0e0e0' : '#007bff', color: msg.sender === 'user' ? '#000' : '#fff', padding: '8px 12px', borderRadius: '10px', display: 'inline-block' }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
      />
      <button onClick={handleSend} style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', border: 'none' }}>
        Send
      </button>
    </div>
  );
};

export default Chatbot;
