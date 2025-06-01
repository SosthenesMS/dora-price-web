"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { FileChartColumn, Bell, CircleDollarSign, RotateCw, Brain, ChartPie, Lock } from "lucide-react"
import { sendMessageToBellatrix } from "@/lib/api"

export type Message = {
  id: string
  content: string
  role: "user" | "assistant" | "system"
  timestamp: Date
  isLoading?: boolean
}

export type Assistant = {
  id: string
  name: string
  sector: string
  description: string
  icon: React.ReactNode
  welcomeMessage: string
  suggestedQuestions: string[]
}

type AssistantContextType = {
  assistants: Assistant[]
  activeAssistant: Assistant | null
  setActiveAssistant: (assistant: Assistant) => void
  messages: Record<string, Message[]>
  addMessage: (assistantId: string, message: Omit<Message, "id" | "timestamp">) => void
  clearMessages: (assistantId: string) => void
  isLoading: boolean
}

const AssistantContext = createContext<AssistantContextType | undefined>(undefined)

export function AssistantProvider({ children }: { children: React.ReactNode }) {
  const [assistants] = useState<Assistant[]>([
    {
      id: "geral",
      name: "Dashboard Geral",
      sector: "Dashboard Geral",
      description: "Dashboard e analises de preços da Dora Price",
      icon: <ChartPie className="h-5 w-5" />,
      welcomeMessage:
        "Olá! Sou o Assistente Geral da Dora Price. Como posso ajudar a integrar os setores da Pneubras hoje?",
      suggestedQuestions: [
        "Como posso compartilhar informações entre setores?",
        "Quais são os principais objetivos da empresa este mês?",
        "Preciso de ajuda com a comunicação entre departamentos",
      ],
    },
    {
      id: "administracao",
      name: "Controle de Acessos",
      sector: "Controle de Acessos",
      description: "Configuração e gestão de acessos do Dora Price",
      icon: <Lock className="h-5 w-5" />,
      welcomeMessage:
        "Olá! Sou o Assistente de Administração da Dora Price. Como posso ajudar com questões administrativas hoje?",
      suggestedQuestions: [
        "Como solicitar material de escritório?",
        "Qual o procedimento para agendamento de salas?",
        "Preciso de informações sobre políticas internas",
      ],
    },
    {
      id: "rh",
      name: "Relatórios",
      sector: "rh",
      description: "Relatórios e análises de desempenho e comparativos de preços",
      icon: <FileChartColumn className="h-5 w-5" />,
      welcomeMessage:
        "Olá! Sou o Assistente de RH da Dora Price. Como posso ajudar com questões de recursos humanos hoje?",
      suggestedQuestions: [
        "Como solicitar férias?",
        "Quais são os benefícios oferecidos?",
        "Preciso de informações sobre treinamentos disponíveis",
      ],
    },
    {
      id: "logistica",
      name: "Notificações",
      sector: "logistica",
      description: "Controle de notificações",
      icon: <Bell className="h-5 w-5" />,
      welcomeMessage:
        "Olá! Sou o Assistente de Logística da Dora Price. Como posso ajudar com questões de logística hoje?",
      suggestedQuestions: [
        "Como rastrear uma entrega?",
        "Qual o prazo para envio de produtos?",
        "Preciso de informações sobre estoque disponível",
      ],
    },
    {
      id: "financeiro",
      name: "Coleta de Preços",
      sector: "financeiro",
      description: "Coleta de preços por produto, marca, forne",
      icon: <CircleDollarSign className="h-5 w-5" />,
      welcomeMessage: "Olá! Sou o Assistente Financeiro da Dora Price. Como posso ajudar com questões financeiras hoje?",
      suggestedQuestions: [
        "Como enviar uma nota fiscal?",
        "Qual o procedimento para reembolso de despesas?",
        "Preciso de informações sobre o orçamento do meu setor",
      ],
    },
    {
      id: "vendas",
      name: "Sincronização",
      sector: "vendas",
      description: "Sincronização das bases de dados",
      icon: <RotateCw className="h-5 w-5" />,
      welcomeMessage: "Olá! Sou o Assistente de Vendas da Dora Price. Como posso ajudar com questões de vendas hoje?",
      suggestedQuestions: [
        "Quais são as metas de vendas deste mês?",
        "Como registrar uma nova venda no sistema?",
        "Preciso de informações sobre descontos disponíveis",
      ],
    },
    {
      id: "producao",
      name: "Configurações DORA IA",
      sector: "producao",
      description: "Painel de configurações gerais",
      icon: <Brain className="h-5 w-5" />,
      welcomeMessage:
        "Olá! Sou o Assistente de Produção da Dora Price. Como posso ajudar com questões de produção hoje?",
      suggestedQuestions: [
        "Qual o status da linha de produção atual?",
        "Como reportar um problema na linha de montagem?",
        "Preciso de informações sobre manutenção preventiva",
      ],
    },
  ])

  const [activeAssistant, setActiveAssistant] = useState<Assistant | null>(null)
  const [messages, setMessages] = useState<Record<string, Message[]>>({})
  const [isLoading, setIsLoading] = useState(false)

  // Initialize messages for each assistant
  useEffect(() => {
    const initialMessages: Record<string, Message[]> = {}

    assistants.forEach((assistant) => {
      initialMessages[assistant.id] = [
        {
          id: `welcome-${assistant.id}`,
          content: assistant.welcomeMessage,
          role: "assistant",
          timestamp: new Date(),
        },
      ]
    })

    setMessages(initialMessages)
  }, [assistants])

  const addMessage = async (assistantId: string, message: Omit<Message, "id" | "timestamp">) => {
    // Adiciona a mensagem do usuário
    const messageId = Date.now().toString()

    setMessages((prev) => {
      const assistantMessages = prev[assistantId] || []

      return {
        ...prev,
        [assistantId]: [
          ...assistantMessages,
          {
            ...message,
            id: messageId,
            timestamp: new Date(),
          },
        ],
      }
    })

    // Se for uma mensagem do usuário, envia para a API
    if (message.role === "user") {
      setIsLoading(true)

      // Adiciona uma mensagem temporária de "digitando..."
      const loadingMessageId = `loading-${Date.now()}`
      setMessages((prev) => {
        const assistantMessages = prev[assistantId] || []
        return {
          ...prev,
          [assistantId]: [
            ...assistantMessages,
            {
              id: loadingMessageId,
              content: "Digitando...",
              role: "assistant",
              timestamp: new Date(),
              isLoading: true,
            },
          ],
        }
      })

      try {
        // Obtém o setor do assistente atual
        const assistant = assistants.find((a) => a.id === assistantId)
        const sector = assistant?.sector || "geral"

        console.log(`Enviando mensagem para o assistente do setor: ${sector}`)

        // Envia a mensagem para a API
        const response = await sendMessageToBellatrix(message.content, sector)

        // Remove a mensagem de "digitando..."
        setMessages((prev) => {
          const assistantMessages = prev[assistantId] || []
          return {
            ...prev,
            [assistantId]: assistantMessages.filter((msg) => msg.id !== loadingMessageId),
          }
        })

        // Adiciona a resposta da API
        setMessages((prev) => {
          const assistantMessages = prev[assistantId] || []
          return {
            ...prev,
            [assistantId]: [
              ...assistantMessages,
              {
                id: `api-response-${Date.now()}`,
                content: response.resposta || "Não foi possível obter uma resposta.",
                role: "assistant",
                timestamp: new Date(),
              },
            ],
          }
        })
      } catch (error) {
        console.error("Erro ao obter resposta da API:", error)

        // Remove a mensagem de "digitando..."
        setMessages((prev) => {
          const assistantMessages = prev[assistantId] || []
          return {
            ...prev,
            [assistantId]: assistantMessages.filter((msg) => msg.id !== loadingMessageId),
          }
        })

        // Adiciona uma mensagem de erro
        setMessages((prev) => {
          const assistantMessages = prev[assistantId] || []
          return {
            ...prev,
            [assistantId]: [
              ...assistantMessages,
              {
                id: `error-${Date.now()}`,
                content:
                  "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.",
                role: "assistant",
                timestamp: new Date(),
              },
            ],
          }
        })
      } finally {
        setIsLoading(false)
      }
    }
  }

  const clearMessages = (assistantId: string) => {
    setMessages((prev) => {
      const assistant = assistants.find((a) => a.id === assistantId)

      return {
        ...prev,
        [assistantId]: [
          {
            id: `welcome-${assistantId}`,
            content: assistant?.welcomeMessage || "",
            role: "assistant",
            timestamp: new Date(),
          },
        ],
      }
    })
  }

  return (
    <AssistantContext.Provider
      value={{
        assistants,
        activeAssistant,
        setActiveAssistant,
        messages,
        addMessage,
        clearMessages,
        isLoading,
      }}
    >
      {children}
    </AssistantContext.Provider>
  )
}

export function useAssistant() {
  const context = useContext(AssistantContext)

  if (context === undefined) {
    throw new Error("useAssistant must be used within an AssistantProvider")
  }

  return context
}


