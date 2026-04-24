
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ShieldAlert, Bot, User, Loader2, Scale } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const SYSTEM_INSTRUCTION = `
OFFICIAL SYSTEM PROMPT: AIHRPC INDIA – LEGAL & EMERGENCY ASSISTANT
You are AIHRPC India Legal & Emergency Assistant, the official virtual assistant of All India Human Rights Protection Commission (AIHRPC India).

CRITICAL RESPONSE RULE: 
- Provide ONLY precise, two to three liner answers.
- Be extremely concise. 
- Do not provide long explanations unless it is an emergency contact list.

Your role is to assist Indian citizens by:
• Explaining Indian laws clearly and briefly.
• Guiding users on legal rights and remedies.
• Helping in human rights and emergency situations.
• Assisting with complaint and grievance procedures.

You must always follow Indian law context only.

EMERGENCY HANDLING:
If the user mentions: Domestic violence, Sexual assault, Child abuse, Illegal detention, Threat to life, Police abuse, Custodial violence, Human trafficking, Suicide risk:
1. Acknowledge seriousness immediately.
2. Provide emergency helplines: Police: 112, Women: 181, Childline: 1098.
3. Suggest contacting aihrpcindia@gmail.com.

LEGAL SAFETY: Clearly state: "General legal guidance only."
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Namaste. I am your AIHRPC Assistant. How can I briefly guide you on your rights or a legal concern today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const chat = ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: {
          parts: [{ text: userText }]
        },
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.3, // Lower temperature for more precise/fixed answers
        }
      });

      const result = await chat;
      const aiResponse = result.text || "I apologize, I am unable to process that query. Please email aihrpcindia@gmail.com.";
      
      setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to registry. Please use 112 for emergencies or email aihrpcindia@gmail.com." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#800000] text-white p-4 rounded-2xl shadow-2xl hover:bg-black transition-all group flex items-center space-x-3 border-b-4 border-black/20"
        >
          <div className="bg-[#F58220] p-1.5 rounded-lg">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <span className="font-black uppercase text-[10px] tracking-widest pr-2">Legal Helpdesk</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[90vw] sm:w-[400px] h-[550px] rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border border-slate-200 animate-slide-up">
          {/* Header */}
          <div className="bg-[#800000] p-6 text-white flex justify-between items-center border-b-4 border-[#F58220]">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-xl">
                <ShieldAlert className="w-6 h-6 text-[#F58220]" />
              </div>
              <div>
                <h3 className="font-black uppercase text-xs tracking-widest leading-none">AIHRPC Assistant</h3>
                <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">Statutory Aid Bot</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/20 p-2 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] flex space-x-3 ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-[#F58220]' : 'bg-[#800000]'}`}>
                    {m.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-[#F58220] text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-4 rounded-2xl flex items-center space-x-3 shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-[#800000]" />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Verifying Statute...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-6 bg-white border-t border-slate-100">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a legal question..."
                className="w-full pl-6 pr-14 py-4 rounded-xl bg-slate-100 border-none outline-none focus:ring-4 focus:ring-maroon-500/10 font-bold text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#800000] text-white p-2.5 rounded-lg hover:bg-black transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[8px] text-center text-slate-400 uppercase font-black tracking-widest mt-4">
              Precise 2-3 line legal guidance. Dial 112 for Police.
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
