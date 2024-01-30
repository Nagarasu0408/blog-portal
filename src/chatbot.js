import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';


const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleUserMessage = (userInput) => {
        const newMessages = [...messages, { text: userInput, sender: 'user' }];
        setMessages(newMessages);

        const botResponse = generateBotResponse(userInput);
        setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    };

    const generateBotResponse = (userInput) => {
        return `You said: ${userInput}`;
    };

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : 'closed'}`}>
            <div className="chat-header" onClick={handleToggle}>
                <MarkUnreadChatAltIcon fontSize="large" />
            </div>
            <div className="chat-content">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            {isOpen && (
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleUserMessage(e.target.value);
                                e.target.value = '';
                            }
                        }}
                    />
                    <SendIcon onClick={() => handleUserMessage(document.querySelector('.chat-input input').value)} />
                </div>
            )}
        </div>
    );
};

export default Chatbot;
