import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  Send,
  Volume2,
  Copy,
  Check,
  RotateCcw,
  Languages,
  HelpCircle,
  FileQuestion,
  Lightbulb,
  Cpu,
  Eye,
  Bot,
  User,
  ArrowRight
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'student' | 'ai';
  text: string;
  visualDiagram?: string;
  quizPrompt?: {
    question: string;
    options: string[];
    correct: number;
  };
  timestamp: string;
}

export const AiTutor: React.FC = () => {
  const { language, t, addXP, setActiveQuiz, showToast } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-0',
      sender: 'ai',
      text: 'Namaste Aarav! 🙏 I am your BharatLearn AI Learning Companion. Ask me any concept in science, mathematics, coding, or history. You can ask in English, हिन्दी, or any Indian language, and use the quick buttons below to simplify or test your knowledge!',
      timestamp: 'Just now'
    },
    {
      id: 'msg-1',
      sender: 'student',
      text: 'Explain photosynthesis to me.',
      timestamp: '1 min ago'
    },
    {
      id: 'msg-2',
      sender: 'ai',
      text: 'Imagine a plant leaf as a tiny solar-powered kitchen factory! ☀️🌱\n\n1. Water (H₂O) is drawn up from the soil through the roots like a straw.\n2. Carbon Dioxide (CO₂) is absorbed from the air through microscopic mouth-like pores called stomata.\n3. Sunlight is captured by chlorophyll (the green solar panels inside leaf cells).\n\nThe solar energy breaks apart water and carbon dioxide, cooking them into Glucose (food for growth) and releasing pure Oxygen (O₂) into our atmosphere for us to breathe!\n\nChemical Equation:\n6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ + 6O₂',
      visualDiagram: `+-----------------------------------------------------------+
|              ☀️ SUNLIGHT (Photon Energy)                  |
|                        |                                  |
|                        v                                  |
|     🍃 Carbon Dioxide (CO2) from Air                      |
|                +                                          |
|     💧 Water (H2O) from Roots via Xylem                   |
|                        |                                  |
|                        v                                  |
|          [ 🔬 CHLOROPLAST FACTORY ]                       |
|           Chlorophyll traps photons                       |
|                        |                                  |
|          +-------------+-------------+                    |
|          |                           |                    |
|          v                           v                    |
|   🍬 Glucose (C6H12O6)        🌬️ Oxygen (O2)             |
|   (Stored plant energy)       (Released into Bharat's air)|
+-----------------------------------------------------------+`,
      timestamp: 'Just now'
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text.replace(/[\*\#\_]/g, ''));
      utterance.rate = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSend = (customPrompt?: string) => {
    const query = customPrompt || inputText.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'student',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customPrompt) setInputText('');
    setIsTyping(true);

    // Contextual knowledge generation with instant simulated intelligence
    setTimeout(() => {
      const response = generateAiAnswer(query);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
      addXP(15, 'Engaged with AI Tutor');
    }, 900);
  };

  const generateAiAnswer = (query: string): ChatMessage => {
    const qLower = query.toLowerCase();

    if (qLower.includes('hindi') || qLower.includes('हिन्दी')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: 'प्रकाश संश्लेषण (Photosynthesis) को आसान शब्दों में समझें:\n\nयह पौधों द्वारा अपना भोजन बनाने की प्राकृतिक प्रक्रिया है। पौधे अपनी हरी पत्तियों में उपस्थित क्लोरोफिल की मदद से सूर्य का प्रकाश ग्रहण करते हैं, जड़ों से पानी (H₂O) और हवा से कार्बन डाइऑक्साइड (CO₂) लेते हैं। इस ऊर्जा से वे ग्लूकोज (भोजन) बनाते हैं और हमें सांस लेने के लिए शुद्ध ऑक्सीजन (O₂) प्रदान करते हैं।\n\nरासायनिक सूत्र: 6CO₂ + 6H₂O + प्रकाश → C₆H₁₂O₆ + 6O₂',
        timestamp: 'Just now'
      };
    }

    if (qLower.includes('quiz')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: 'Here is a quick concept verification quiz to test your understanding! 📝\n\nQuestion: Which gas is released by plants as a byproduct during photosynthesis?',
        quizPrompt: {
          question: 'Which gas is released by green plants as a byproduct of photosynthesis?',
          options: ['Carbon Dioxide (CO₂)', 'Nitrogen (N₂)', 'Oxygen (O₂)', 'Methane (CH₄)'],
          correct: 2
        },
        timestamp: 'Just now'
      };
    }

    if (qLower.includes('visually') || qLower.includes('diagram')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: 'Here is an interactive structural breakdown map of the process:',
        visualDiagram: `================= THE BIOCHEMICAL PIPELINE =================
[INPUT 1] Sunlight Photons --------+
[INPUT 2] Soil Water (H2O) -------+---> [THYLAKOID MEMBRANE]
                                          (Light Reactions: Splits H2O)
                                          Produces ATP & NADPH
                                          Releases: OXYGEN (O2) 💨
                                                 |
                                                 v
[INPUT 3] Atmospheric CO2 -------------> [STROMA / CALVIN CYCLE]
                                          (Dark Reactions: Fixes Carbon)
                                          Produces: GLUCOSE (C6H12O6) 🍬
============================================================`,
        timestamp: 'Just now'
      };
    }

    if (qLower.includes('simply') || qLower.includes('simple')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: 'Ultra-simple explanation (for 5-year-olds):\n\nPlants eat sunlight! ☀️ With a drink of water from their roots and a breath of air, they cook sweet sugar syrup inside their green leaves to grow big and strong, and puff out fresh clean air for you and me.',
        timestamp: 'Just now'
      };
    }

    if (qLower.includes('example')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: 'Real-World Example in India:\n\nTake the sacred Peepal tree or the Tulsi plant in an Indian courtyard. During bright daylight hours, an adult Peepal tree absorbs nearly 22 kg of carbon dioxide annually and generates enough oxygen daily to support two human adults! That is why conserving trees is direct climate technology.',
        timestamp: 'Just now'
      };
    }

    if (qLower.includes('chandrayaan') || qLower.includes('space') || qLower.includes('isro')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: 'ISRO Chandrayaan-3 Moon Mission 🇮🇳:\n\nChandrayaan-3 achieved humanity\'s first soft landing near the Moon’s southern polar crater (Shiv Shakti Point) in August 2023. The lander "Vikram" and rover "Pragyan" measured lunar surface temperatures using ChaSTE (finding unexpected +60°C near the surface and -10°C just 8cm deep!) and verified the presence of Sulphur, Iron, and Titanium in lunar soil.',
        timestamp: 'Just now'
      };
    }

    if (qLower.includes('python') || qLower.includes('code') || qLower.includes('programming')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: 'Here is a quick Python demonstration to calculate plant energy conversion:\n\n```python\n# BharatLearn Python Snippet\ndef calculate_photosynthesis(co2_moles, h2o_moles):\n    # 6 CO2 + 6 H2O -> 1 Glucose + 6 O2\n    reactions = min(co2_moles // 6, h2o_moles // 6)\n    glucose_produced = reactions * 1\n    oxygen_produced = reactions * 6\n    return f"{glucose_produced} moles glucose, {oxygen_produced} moles O2"\n\nprint(calculate_photosynthesis(24, 24))\n# Output: 4 moles glucose, 24 moles O2\n```',
        timestamp: 'Just now'
      };
    }

    // Default intelligent educational explanation
    return {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: `Excellent question! Let's deconstruct "${query}" from foundational principles:\n\n1. Core Principle: Every natural or technological system operates on inputs, energy transformations, and measurable outputs.\n2. Indian Context: Indian researchers and students apply this principle everywhere from ISRO satellite telemetry to low-cost rural water purifiers.\n3. Next Step: Would you like me to simplify this further, provide a practice quiz, or demonstrate with a diagram?`,
      timestamp: 'Just now'
    };
  };

  const quickActions = [
    { label: 'Explain simply', action: () => handleSend('Explain simply in basic terms.') },
    { label: 'Give an example', action: () => handleSend('Give a real-world Indian example.') },
    { label: 'Create a quiz', action: () => handleSend('Create a quiz on this concept.') },
    { label: 'Explain in Hindi', action: () => handleSend('Explain in Hindi (हिन्दी में समझाएं).') },
    { label: 'Explain visually', action: () => handleSend('Explain visually with an architectural diagram.') },
    { label: 'Practice questions', action: () => handleSend('Give me 3 practice questions for my school exam.') }
  ];

  return (
    <section id="ai-tutor-section" className="py-16 sm:py-20 border-t border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Multilingual Neural Companion
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Meet Your AI Learning Companion
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Ask questions. Understand concepts. Learn at your own pace in your mother tongue.
          </p>
        </div>

        {/* Chat Window Container */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[520px] sm:h-[620px]">
          
          {/* Chat Header */}
          <div className="p-3 sm:p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-sky-500 p-0.5 shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <h3 className="text-xs sm:text-sm font-bold text-white"><span className="text-bharat font-extrabold">Bharat</span>Learn AI Mentor</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-400">Trained on NCERT, State Boards & Frontier STEM</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setMessages([
                    {
                      id: 'reset',
                      sender: 'ai',
                      text: 'Conversation refreshed. What concept can I unpack for you today?',
                      timestamp: 'Just now'
                    }
                  ]);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-xs flex items-center gap-1"
                title="Clear conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Chat Message Scrollable Feed */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 sm:gap-3 max-w-2xl ${
                  msg.sender === 'student' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                {/* Avatar */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold shadow-md">
                  {msg.sender === 'student' ? (
                    <div className="w-full h-full rounded-full bg-amber-500 text-slate-950 flex items-center justify-center">
                      <User className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-full bg-sky-600 text-white flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-amber-300" />
                    </div>
                  )}
                </div>

                {/* Bubble */}
                <div
                  className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'student'
                      ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none shadow-md'
                      : 'bg-slate-950/90 text-slate-100 border border-slate-800 rounded-tl-none shadow-lg'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Visual Diagram Render if present */}
                  {msg.visualDiagram && (
                    <div className="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[10px] sm:text-xs text-sky-300 overflow-x-auto">
                      <pre>{msg.visualDiagram}</pre>
                    </div>
                  )}

                  {/* Interactive Mini-Quiz if generated */}
                  {msg.quizPrompt && (
                    <div className="mt-3 p-3 rounded-xl bg-slate-900 border border-amber-500/30 space-y-2">
                      <p className="font-bold text-amber-300 text-xs">{msg.quizPrompt.question}</p>
                      <div className="space-y-1.5">
                        {msg.quizPrompt.options.map((opt, idx) => (
                          <button
                            key={opt}
                            onClick={() => {
                              if (idx === msg.quizPrompt?.correct) {
                                showToast('🎉 Correct! Oxygen is released through photolysis of water. +25 XP awarded!', 'celebrate');
                                addXP(25, 'Solved AI Question');
                              } else {
                                showToast('Not quite. Plants consume Carbon Dioxide and release Oxygen into the atmosphere.', 'info');
                              }
                            }}
                            className="w-full text-left p-2 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs text-slate-200 transition-colors"
                          >
                            {String.fromCharCode(65 + idx)}. {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* AI Message Action Footer (Audio narration, copy) */}
                  {msg.sender === 'ai' && (
                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800/60 text-[11px] text-slate-400">
                      <button
                        onClick={() => speakText(msg.text)}
                        className="hover:text-amber-300 flex items-center gap-1 transition-colors"
                        title="Read aloud"
                      >
                        <Volume2 className="w-3.5 h-3.5" /> Listen
                      </button>
                      <span>•</span>
                      <button
                        onClick={() => copyToClipboard(msg.id, msg.text)}
                        className="hover:text-amber-300 flex items-center gap-1 transition-colors"
                        title="Copy text"
                      >
                        {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 max-w-md">
                <div className="w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 rounded-tl-none flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-xs text-slate-400 ml-1">Formulating intuitive explanation...</span>
                </div>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="px-4 py-2 bg-slate-950/70 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto">
            <span className="text-[11px] text-slate-400 font-semibold shrink-0">Quick Actions:</span>
            {quickActions.map((qa) => (
              <button
                key={qa.label}
                onClick={qa.action}
                className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/60 hover:border-amber-500/50 shrink-0 transition-all"
              >
                {qa.label}
              </button>
            ))}
          </div>

          {/* Chat Input Field */}
          <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 w-full"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about STEM, ISRO, AI, or ask in your language..."
                className="w-full min-w-0 flex-1 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2.5 sm:p-3 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 font-bold transition-all flex items-center justify-center cursor-pointer shadow-md shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
