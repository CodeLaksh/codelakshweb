import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! 👋 I\'m your AI assistant from CodeLaksh. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const getBotResponse = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi')) return 'Hello! 👋 Welcome to CodeLaksh! How can I help you today?';
    if (lower.includes('price') || lower.includes('cost')) return 'Our services vary based on requirements. Call +91-9834684866 or email codelaksh@gmail.com for a quote.';
    if (lower.includes('website') || lower.includes('web')) return 'We build modern websites using React, Node.js, Python. Contact us for a consultation!';
    if (lower.includes('chatbot') || lower.includes('ai')) return 'We develop intelligent AI chatbots for 24/7 customer support. Want to schedule a demo?';
    if (lower.includes('app') || lower.includes('mobile')) return 'We create native and cross-platform mobile apps for iOS and Android. Let\'s discuss your app idea!';
    if (lower.includes('contact') || lower.includes('call')) return '📞 +91-9834684866\n📧 codelaksh@gmail.com\n📍 Sangram Nagar, Aurangabad';
    if (lower.includes('thank')) return 'You\'re welcome! 😊 Feel free to reach out for more questions.';
    return 'Thanks for your message! Our team will get back to you soon. For urgent queries, call +91-9834684866.';
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    const userInput = input;
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: getBotResponse(userInput) }]);
    }, 1000);
  };

  return (
    <div className="chatbot-widget" style={{
      position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px', height: '60px', borderRadius: '50%', border: 'none',
          background: 'linear-gradient(135deg, #0483d2, #ff6b35)', color: 'white',
          fontSize: '24px', cursor: 'pointer', boxShadow: '0 10px 30px rgba(4,131,210,0.4)'
        }}
      >
        <i className="fas fa-robot"></i>
      </button>
      {isOpen && (
        <div style={{
          position: 'absolute', bottom: '80px', right: '0', width: '350px',
          background: '#1a1a2e', borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            background: '#0483d2', padding: '15px 20px', display: 'flex',
            justifyContent: 'space-between', alignItems: 'center', color: 'white', fontWeight: '600'
          }}>
            <span><i className="fas fa-robot"></i> CodeLaksh AI</span>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '18px' }}>✕</button>
          </div>
          <div style={{ height: '250px', padding: '15px', overflowY: 'auto' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                padding: '10px 15px', borderRadius: '15px', marginBottom: '10px',
                maxWidth: '80%', float: msg.from === 'user' ? 'right' : 'left',
                clear: 'both', background: msg.from === 'user' ? '#0483d2' : 'rgba(255,255,255,0.05)'
              }}>
                {msg.text}
              </div>
            ))}
          </div>
          <div style={{ padding: '15px', display: 'flex', gap: '10px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              style={{ flex: 1, padding: '10px 15px', borderRadius: '25px', border: 'none', background: 'rgba(255,255,255,0.05)', color: 'white' }}
            />
            <button onClick={handleSend} style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', background: '#0483d2', color: 'white', cursor: 'pointer' }}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;