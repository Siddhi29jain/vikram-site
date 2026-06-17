"use client";

import { FormEvent, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestedQuestions = [
  "What kind of projects has Vikram led?",
  "Summarize Vikram's refinery upgrade experience.",
  "What measurable business impact has he delivered?",
];

const openingMessage: Message = {
  role: "assistant",
  content:
    "I am Vikram Patni's digital career twin. Ask me about his metallurgy background, plant operations leadership, Proventus Valuetech, refinery upgrades, cost improvements or career journey.",
};

export function DigitalTwinChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([openingMessage]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function sendMessage(question: string) {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || isSending) {
      return;
    }

    const nextMessages: Message[] = [...messages, { role: "user", content: trimmedQuestion }];

    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages.filter((message) => message !== openingMessage),
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok || !data.message) {
        throw new Error(data.error || "The digital twin could not answer right now.");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        { role: "assistant", content: data.message ?? "" },
      ]);
    } catch (caughtError) {
      const message =
        caughtError instanceof Error ? caughtError.message : "The digital twin could not answer.";

      setError(message);
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            "I could not reach the AI service just now. Please check the local server and OpenRouter configuration, then try again.",
        },
      ]);
    } finally {
      setIsSending(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className={`chat-widget ${isOpen ? "is-open" : ""}`} id="digital-twin">
      {isOpen ? (
        <div className="chat-shell" role="dialog" aria-label="Vikram Patni digital twin chat">
          <div className="chat-panel">
            <div className="chat-header">
              <div>
                <p className="eyebrow">AI Digital Twin</p>
                <h2>Ask Vikram's career twin.</h2>
              </div>
              <button
                className="chat-close"
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close digital twin chat"
              >
                Close
              </button>
            </div>

            <div className="chat-body" aria-live="polite">
              {messages.map((message, index) => (
                <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
                  <span>{message.role === "assistant" ? "Vikram AI" : "You"}</span>
                  <p>{message.content}</p>
                </div>
              ))}
              {isSending ? (
                <div className="chat-message assistant loading">
                  <span>Vikram AI</span>
                  <p>Thinking through the career context...</p>
                </div>
              ) : null}
            </div>

            <div className="question-chips" aria-label="Suggested questions">
              {suggestedQuestions.map((question) => (
                <button key={question} type="button" onClick={() => void sendMessage(question)}>
                  {question}
                </button>
              ))}
            </div>

            <form className="chat-form" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                aria-label="Ask Vikram's digital twin"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Vikram's career..."
                disabled={isSending}
              />
              <button type="submit" disabled={isSending || input.trim().length === 0}>
                {isSending ? "Sending" : "Ask"}
              </button>
            </form>

            {error ? <p className="chat-error">{error}</p> : null}
          </div>
        </div>
      ) : null}

      <button
        className="chat-launcher"
        type="button"
        onClick={() => {
          setIsOpen((current) => !current);
          window.setTimeout(() => inputRef.current?.focus(), 80);
        }}
        aria-expanded={isOpen}
        aria-controls="digital-twin"
      >
        <span>VP</span>
        <strong>Digital Twin</strong>
      </button>
    </div>
  );
}
