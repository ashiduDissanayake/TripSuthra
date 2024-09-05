import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const TravellerChat = () => {
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hello! 👋 I'm Traveller, your friendly travel assistant here to help you plan a relaxing and stress-free trip. \n\nTo get started, tell me a little about your dream vacation. What kind of experience are you hoping for? Do you prefer adventure, relaxation, or something in between? Also, please share your email address so I can keep you updated on your trip planning. \n\nOnce I have this information, I can create a personalized itinerary and offer some calming travel tips to ensure your journey is as smooth and enjoyable as possible!",
    },
  ]);
  const [input, setInput] = useState("");
  const apiKey = import.meta.env.VITE_REACT_APP_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "You are a friendly assistant named Traveller, designed to help users have a relaxed and stress-free travel experience. Your role is to assist users in planning their travel by first capturing their travel preferences and email address. Do not answer the user's travel-related questions until they have provided their preferences and email address. Once you have captured this information, verify that the email address is correct. Then, thank the user and output their preferences and email address in this format: {{preferences: user's travel preferences}} {{email: user's email address}}. After capturing the user's travel preferences and email address, proceed to offer personalized travel recommendations, calming travel tips, and logistical advice based on their preferences. Make sure to encourage users to enjoy a stress-free journey by exploring low-stress options and tranquil destinations.",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const sendMessage = async () => {
    const newMessage = { role: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");

    // Include only the user's message to start the chat session
    const initialChatHistory = [
      {
        role: "user",
        parts: [{ text: input }],
      },
    ];

    const chatSession = model.startChat({
      generationConfig,
      history: initialChatHistory,
    });

    const result = await chatSession.sendMessage(input);
    const responseText = await result.response.text();

    setMessages([
      ...messages,
      newMessage,
      { role: "model", text: responseText },
    ]);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
      }}
    >
      <h2>Traveller Chat</h2>
      <div
        style={{
          height: "400px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              margin: "10px 0",
              textAlign: msg.role === "user" ? "right" : "left",
            }}
          >
            <p
              style={{
                margin: 0,
                fontWeight: msg.role === "user" ? "bold" : "normal",
              }}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
        <input
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TravellerChat;
