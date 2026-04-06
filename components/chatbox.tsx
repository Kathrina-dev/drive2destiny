'use client'

import React, { useState, useRef, useEffect } from "react";

interface Message {
  text: string;
  sender: "me" | "other";
  senderName?: string;
}

interface ChatBoxProps {
  roomName?: string;
  roomSubtitle?: string;
  avatarInitials?: string;
  initialMessages?: Message[];
}

const ChatBox = ({
  roomName = "Carpool Chat",
  roomSubtitle = "Online",
  avatarInitials = "GR",
  initialMessages = [],
}: ChatBoxProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages((prev) => [...prev, { text: message.trim(), sender: "me" }]);
    setMessage("");
  };

  return (
    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden flex flex-col shadow-sm">
      {/* Header */}
      <div className="bg-blue-900 px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold shrink-0">
          {avatarInitials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{roomName}</p>
          <p className="text-blue-200 text-xs">{roomSubtitle}</p>
        </div>
        <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400" title="Online" />
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2.5 p-4 h-52 overflow-y-auto bg-slate-50">
        {messages.length === 0 && (
          <p className="text-slate-400 text-sm text-center mt-14">
            No messages yet. Say hello! 👋
          </p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col max-w-[75%] ${
              msg.sender === "me" ? "self-end items-end" : "self-start items-start"
            }`}
          >
            {msg.senderName && msg.sender === "other" && (
              <span className="text-[10px] text-slate-400 mb-0.5 px-1">
                {msg.senderName}
              </span>
            )}
            <div
              className={`px-3.5 py-2 text-sm leading-relaxed ${
                msg.sender === "me"
                  ? "bg-blue-700 text-white rounded-2xl rounded-br-sm"
                  : "bg-white text-slate-700 border border-slate-100 rounded-2xl rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 p-3 border-t border-slate-100 bg-white">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
          className="flex-1 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;