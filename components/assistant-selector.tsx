"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAssistant } from "./assistant-provider"

export function AssistantSelector() {
  const { assistants, activeAssistant, setActiveAssistant } = useAssistant()

  return (
    <div className="p-4 border-b">
      <Select
        value={activeAssistant?.id || ""}
        onValueChange={(value) => {
          const assistant = assistants.find(a => a.id === value)
          assistant && setActiveAssistant(assistant)
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione um módulo" />
        </SelectTrigger>
        <SelectContent>
          {assistants.map((assistant) => (
            <SelectItem key={assistant.id} value={assistant.id}>
              <div className="flex items-center gap-2">
                {assistant.icon}
                {assistant.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}


















