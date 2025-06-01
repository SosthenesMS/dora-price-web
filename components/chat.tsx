"use client"

import type React from "react"

import { useState } from "react"
import { Send, Bot, User, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { AssistantSelector } from "@/components/assistant-selector"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

type Assistant = {
  id: string
  name: string
  sector: string
  icon: React.ReactNode
}

export function Chat() {
  const [input, setInput] = useState("")
  const [activeAssistant, setActiveAssistant] = useState<Assistant>({
    id: "general",
    name: "Assistente Geral",
    sector: "Geral",
    icon: <Bot className="h-4 w-4" />,
  })

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Olá! Eu sou Bellatrix, seu assistente de integração da Pneubras. Como posso ajudar você hoje?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const isMobile = useMobile()

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response based on active assistant
    setTimeout(() => {
      let responseContent = ""

      if (activeAssistant.id === "general") {
        responseContent =
          "Estou processando sua solicitação sobre integração de setores. Como posso ajudar mais com as operações da Pneubras?"
      } else {
        responseContent = `Como assistente do setor de ${activeAssistant.sector}, posso ajudar com questões específicas desta área. O que você precisa saber?`
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleAssistantChange = (assistant: Assistant) => {
    setActiveAssistant(assistant)

    // Add a system message indicating the change of assistant
    const systemMessage: Message = {
      id: Date.now().toString(),
      content: `Você está agora conversando com o assistente do setor de ${assistant.sector}.`,
      role: "assistant",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, systemMessage])
  }

  return (
    <div className="flex h-full flex-col">
      <div className="border-b p-2 bg-gray-100">
        <AssistantSelector onAssistantChange={handleAssistantChange} activeAssistant={activeAssistant} />
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={`p-4 ${
                message.role === "assistant" ? "bg-black text-yellow-400" : "bg-yellow-400 text-black ml-auto"
              } max-w-[80%] ${message.role === "user" ? "ml-auto" : ""}`}
            >
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-gray-100 p-1">
                  {message.role === "assistant" ? (
                    <Bot className="h-4 w-4 text-black" />
                  ) : (
                    <User className="h-4 w-4 text-black" />
                  )}
                </div>
                <div>
                  <div className="text-sm">{message.content}</div>
                  <div className="mt-1 text-xs opacity-70">{message.timestamp.toLocaleTimeString()}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <div className="flex items-end gap-2">
          <Button variant="outline" size="icon" className="flex-shrink-0 bg-yellow-400 text-black hover:bg-yellow-500">
            <Paperclip className="h-4 w-4" />
            <span className="sr-only">Anexar arquivo</span>
          </Button>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua mensagem..."
            className="min-h-10 flex-1 resize-none border-yellow-400"
            rows={isMobile ? 1 : 2}
          />
          <Button onClick={handleSend} className="flex-shrink-0 bg-yellow-400 text-black hover:bg-yellow-500">
            <Send className="h-4 w-4" />
            <span className="sr-only">Enviar</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
