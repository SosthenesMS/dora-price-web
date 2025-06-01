"use client"

import { useAssistant } from "@/components/assistant-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WelcomeScreen() {
  const { assistants, setActiveAssistant } = useAssistant()

  // Separate general assistant from sector assistants
  const generalAssistant = assistants.find((a) => a.id === "geral")
  const sectorAssistants = assistants.filter((a) => a.id !== "geral")

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Bem-vindo ao Dora Price</h1>
        <p className="text-gray-500 mt-2">Seu app de coleta de preços</p>
      </div>


      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {generalAssistant && (
          <Card
            className="cursor-pointer hover:border-yellow-400 transition-colors"
            onClick={() => setActiveAssistant(generalAssistant)}
          >
            <CardHeader className="bg-gray-800 text-yellow-400">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center text-gray-600">
                  {generalAssistant.icon}
                </div>
                <CardTitle>{generalAssistant.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <CardDescription className="text-gray-700">{generalAssistant.description}</CardDescription>
            </CardContent>
          </Card>
        )}


        {sectorAssistants.map((assistant) => (
          <Card
            key={assistant.id}
            className="cursor-pointer hover:border-yellow-400 transition-colors"
            onClick={() => setActiveAssistant(assistant)}
          >
            <CardHeader className="bg-gray-800 text-yellow-400">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center text-gray-600">
                  {assistant.icon}
                </div>
                <CardTitle>{assistant.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <CardDescription className="text-gray-700">{assistant.description}</CardDescription>
            </CardContent>
          </Card>
        ))}


      </div>
    </div>
  )
}
