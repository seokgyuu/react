import React, { useState, useEffect } from "react";
import axios from "axios";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [typingMessage, setTypingMessage] = useState(""); // To hold the current AI message being typed
  const [isTyping, setIsTyping] = useState(false); // To manage the typing state

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) return;

    // 사용자 입력 추가
    addMessageToChatLog("사용자", userInput);

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        message: userInput,
      });

      // Start typing the AI's response
      startTyping(response.data.response);
    } catch (error) {
      addMessageToChatLog("에러", "서버에 문제가 발생했습니다.");
      console.error("Error:", error);
    }

    setUserInput("");
  };

  const addMessageToChatLog = (sender, message) => {
    setChatLog((prev) => [...prev, { sender, message }]);
  };

  const startTyping = (message) => {
    setIsTyping(true);
    setTypingMessage(""); // Reset the typing message

    let index = 0;
    const typingSpeed = 50; // Typing speed in milliseconds

    const typingInterval = setInterval(() => {
      if (index < message.length) {
        setTypingMessage((prev) => prev + message.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        addMessageToChatLog("AI", message); // Once typing is done, add the full message to chat log
        setIsTyping(false); // Reset typing state
      }
    }, typingSpeed);
  };

  // Effect to handle typing animation
  useEffect(() => {
    if (isTyping && typingMessage) {
      addMessageToChatLog("AI", typingMessage); // Update chat log with currently typed message
    }
  }, [typingMessage, isTyping]);

  return (
    <div id="Chatbot">
      <h1>챗봇</h1>
      <div id="chat-log">
        {chatLog.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}: </strong>
            {msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default Chatbot;
