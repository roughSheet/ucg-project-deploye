import { useState, useRef, useEffect } from 'react'

const QA = [
  { q: 'What services do you offer?', a: 'We offer Record Retrieval, Medical Coding, Revenue Cycle Management, and Medical Records Summarization services.' },
  { q: 'How do I contact you?', a: 'Email us at Info@u-cgs.com or call +1 307-213-4034. You can also use our Contact page to send a message.' },
  { q: 'Where are you located?', a: 'We have offices in Cheyenne, WY, USA and Ahmedabad, Gujarat, India.' },
  { q: 'Are you HIPAA compliant?', a: 'Yes! We hold ISO 27001:2013 certification and follow all HIPAA compliance standards.' },
  { q: 'How can I book a consultation?', a: `Click the "Book Now" button in the navigation, or visit our Contact page. We'll get back to you within 24 hours.` },
  { q: 'What industries do you serve?', a: 'We serve Healthcare, Legal, and Insurance industries with specialized BPO solutions.' },
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: `Hi! 👋 I'm the U-CGS assistant. How can I help you today?` }
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, open])

  const sendMessage = (text) => {
    const userMsg = text || input.trim()
    if (!userMsg) return
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: userMsg }])
    setTimeout(() => {
      const match = QA.find(qa => qa.q === userMsg)
      const reply = match ? match.a : 'I\'m not sure about that. Please contact us at Info@u-cgs.com or call +1 307-213-4034!'
      setMessages(prev => [...prev, { from: 'bot', text: reply }])
    }, 600)
  }

  return (
    <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 9999 }}>
      <style>{`@keyframes chatSlideUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>

      {open && (
        <div style={{
          width: 340, background: 'white', borderRadius: 20,
          boxShadow: '0 24px 64px rgba(0,0,0,0.22)', marginBottom: 14,
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          animation: 'chatSlideUp 0.3s ease',
          border: '1px solid #e5e7eb'
        }}>
          {/* Header — close button always visible: dark bg + white X */}
          <div style={{ background: 'linear-gradient(135deg,#0f766e,#0d9488)', padding: '16px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'white' }}>U-CGS Assistant</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                  Online
                </div>
              </div>
              {/* Close button: white background, teal X — always visible */}
              <button onClick={() => setOpen(false)} style={{
                background: 'rgba(255,255,255,0.25)',
                border: '1.5px solid rgba(255,255,255,0.5)',
                color: 'white', borderRadius: 8, width: 32, height: 32,
                cursor: 'pointer', fontSize: 18, lineHeight: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, transition: 'background 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
              >×</button>
            </div>
          </div>

          {/* Messages */}
          <div style={{ overflowY: 'auto', padding: '16px', maxHeight: 280, display: 'flex', flexDirection: 'column', gap: 10, background: '#f9fafb' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%', padding: '10px 14px',
                  borderRadius: m.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: m.from === 'user' ? 'linear-gradient(135deg,#0f766e,#0d9488)' : 'white',
                  color: m.from === 'user' ? 'white' : '#374151',
                  fontSize: 13, lineHeight: 1.55,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  border: m.from === 'bot' ? '1px solid #e5e7eb' : 'none'
                }}>{m.text}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick questions */}
          <div style={{ padding: '10px 14px', borderTop: '1px solid #f1f5f9', background: 'white' }}>
            <div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 8, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Quick Questions</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {QA.map((qa, i) => (
                <button key={i} onClick={() => sendMessage(qa.q)} style={{
                  background: '#f0fdfa', border: '1px solid #99f6e4',
                  color: '#0f766e', borderRadius: 20, padding: '5px 12px',
                  fontSize: 11, cursor: 'pointer', fontWeight: 600,
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#ccfbf1'; e.currentTarget.style.borderColor = '#0d9488' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f0fdfa'; e.currentTarget.style.borderColor = '#99f6e4' }}>
                  {qa.q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div style={{ padding: '12px 14px', borderTop: '1px solid #f1f5f9', display: 'flex', gap: 8, background: 'white' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              style={{ flex: 1, border: '1.5px solid #e5e7eb', borderRadius: 10, padding: '9px 14px', fontSize: 13, outline: 'none', fontFamily: 'inherit' }}
              onFocus={e => e.target.style.borderColor = '#0d9488'}
              onBlur={e => e.target.style.borderColor = '#e5e7eb'}
            />
            <button onClick={() => sendMessage()} style={{
              background: 'linear-gradient(135deg,#0f766e,#0d9488)', color: 'white',
              border: 'none', borderRadius: 10, padding: '9px 14px',
              cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>➤</button>
          </div>
        </div>
      )}

      {/* Toggle bubble */}
      <button onClick={() => setOpen(!open)} style={{
        width: 58, height: 58, borderRadius: '50%',
        background: 'linear-gradient(135deg,#0f766e,#0d9488)',
        border: '3px solid white',
        cursor: 'pointer', color: 'white', fontSize: 24,
        boxShadow: '0 8px 28px rgba(13,148,136,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(13,148,136,0.6)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(13,148,136,0.5)' }}
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}