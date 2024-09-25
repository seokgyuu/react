import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) return;

    // 사용자 입력 추가
    addMessageToChatLog("사용자", userInput);

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        message: userInput,
      });
      addMessageToChatLog("AI", response.data.response);
    } catch (error) {
      addMessageToChatLog("에러", "서버에 문제가 발생했습니다.");
      console.error("Error:", error);
    }

    setUserInput("");
  };

  const addMessageToChatLog = (sender, message) => {
    setChatLog((prev) => [...prev, { sender, message }]);
  };

  return (
    <section id="Chatbot"> {/* 'div'를 'section'으로 변경하여 ID를 추가합니다 */}
      <h1>챗봇</h1>
      <div id="chat-log"> {/* chat-log에 대한 ID도 유지합니다 */}
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
    </section>
  );
};

export default Chatbot;
