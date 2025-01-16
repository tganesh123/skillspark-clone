import React, { useState } from "react"
import "./Chat.css"

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleMessageChange = e => {
    setMessage(e.target.value)
  }

  const handleSendMessage = e => {
    e.preventDefault()
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }])
      setMessage("") // Clear the input after sending
    }
  }

  // Prevent the click event from closing the chat when typing inside it
  const handleChatClick = e => {
    e.stopPropagation()
  }

  return (
    <div
      className={`chat-container ${isOpen ? "open" : ""}`}
      onClick={toggleChat}
    >
      <div className='chat-icon'>
        <span>💬</span>
      </div>
      {isOpen && (
        <div className='chat-expanded' onClick={handleChatClick}>
          <div className='chat-messages'>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className='chat-input-form'>
            <input
              type='text'
              value={message}
              onChange={handleMessageChange}
              placeholder='Type a message...'
              className='chat-input'
            />
            <button type='submit' className='send-button'>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Chat
