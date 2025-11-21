import React, { useEffect, useState, useRef } from 'react';
import { Send } from 'lucide-react';
import { FlowExample } from '../types';

interface ChatSimulationProps {
  flow: FlowExample;
}

export const ChatSimulation: React.FC<ChatSimulationProps> = ({ flow }) => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleMessages(0);
    setIsTyping(false);

    let timeoutId: ReturnType<typeof setTimeout>;

    const showNextMessage = (index: number) => {
      if (index >= flow.demoMessages.length) return;

      // Typing indicator before bot messages
      if (flow.demoMessages[index].sender === 'bot') {
        setIsTyping(true);
        timeoutId = setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(prev => prev + 1);
          setTimeout(() => showNextMessage(index + 1), 1000); // Wait before next
        }, 1000); // Typing duration
      } else {
        // User message appears instantly or after small delay
        setTimeout(() => {
           setVisibleMessages(prev => prev + 1);
           setTimeout(() => showNextMessage(index + 1), 500);
        }, 800);
      }
    };

    showNextMessage(0);

    return () => clearTimeout(timeoutId);
  }, [flow]);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleMessages, isTyping]);

  return (
    <div className="flex flex-col h-[500px] bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white p-4 shadow-sm border-b border-gray-100 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
           L
        </div>
        <div>
          <p className="font-bold text-sm text-dark">Assistente Virtual</p>
          <p className="text-xs text-green-600 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 block animate-pulse"></span>
            Online
          </p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {flow.demoMessages.slice(0, visibleMessages).map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeIn_0.3s_ease-out]`}
          >
            <div 
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-dark border border-gray-200 rounded-tl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-[fadeIn_0.3s_ease-out]">
            <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Placeholder */}
      <div className="bg-white p-3 border-t border-gray-200">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input 
            disabled
            type="text" 
            placeholder="Digite sua resposta..." 
            className="bg-transparent flex-1 outline-none text-sm text-gray-500 cursor-not-allowed"
          />
          <button disabled className="text-blue-600 opacity-50">
            <Send size={18} />
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-2">
          Preview modo demonstração
        </p>
      </div>
    </div>
  );
};