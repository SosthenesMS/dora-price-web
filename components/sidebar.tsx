"use client"

import { useAssistant } from "@/components/assistant-provider"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const { assistants, activeAssistant, setActiveAssistant } = useAssistant()

  // Separate general assistant from sector assistants
  const generalAssistant = assistants.find((a) => a.id === "geral")
  const sectorAssistants = assistants.filter((a) => a.id !== "geral")

  return (
    <aside className="hidden w-64 flex-col bg-gray-700 text-white md:flex">
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-1">
          {generalAssistant && (
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start text-white hover:bg-yellow-400 hover:text-black",
                activeAssistant?.id === generalAssistant.id && "bg-yellow-400 text-black",
              )}
              onClick={() => setActiveAssistant(generalAssistant)}
            >
              {generalAssistant.icon}
              <span className="ml-2">{generalAssistant.name}</span>
            </Button>
          )}

          <Separator className="my-2 bg-gray-700" />

          {sectorAssistants.map((assistant) => (
            <Button
              key={assistant.id}
              variant="ghost"
              className={cn(
                "w-full justify-start text-white hover:bg-yellow-400 hover:text-black",
                activeAssistant?.id === assistant.id && "bg-yellow-400 text-black",
              )}
              onClick={() => setActiveAssistant(assistant)}
            >
              {assistant.icon}
              <span className="ml-2">{assistant.name}</span>
            </Button>
          ))}
        </nav>
      </div>

      <div className="p-4 mt-auto">
        <div className="rounded-md bg-gray-800 p-3 mb-4">
          <h3 className="text-sm font-medium text-yellow-400">DORA PRICE DEVELOPMENT LTDA</h3>
          <p className="mt-1 text-xs text-gray-300">
            Aplicação completa para coleta de preço de mercado e analises.
          </p>
        </div>
      </div>
    </aside>
  )
}