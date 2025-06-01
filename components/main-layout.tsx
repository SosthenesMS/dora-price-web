"use client"

import { useAssistant } from "@/components/assistant-provider"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { AssistantChat } from "@/components/assistant-chat"
import { WelcomeScreen } from "@/components/welcome-screen"
import { ButtonTest } from "@/components/teste-button-screen"


export function MainLayout() {
  const { activeAssistant } = useAssistant()

  return (
    <div className="flex h-screen flex-col bg-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden">{activeAssistant ? <AssistantChat /> : <WelcomeScreen />}</main>
        {/* <main className="flex-1 overflow-hidden">{activeAssistant ? <ButtonTest /> : <WelcomeScreen />}</main> */}
      </div>
    </div>
  )
}
