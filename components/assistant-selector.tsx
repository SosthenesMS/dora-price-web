// "use client"

// import type React from "react"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useMobile } from "@/hooks/use-mobile"
// import { useAssistant } from "./assistant-provider"

// export function AssistantSelector() {
//   const isMobile = useMobile()
//   const { assistants, activeAssistant, setActiveAssistant } = useAssistant()

//   const handleChange = (value: string) => {
//     const assistant = assistants.find((a) => a.id === value)
//     if (assistant) {
//       setActiveAssistant(assistant)
//     }
//   }

//   if (isMobile) {
//     return (
//       <Select onValueChange={handleChange} value={activeAssistant?.id || ""}>
//         <SelectTrigger className="w-full">
//           <SelectValue placeholder="Selecione um módulo" />
//         </SelectTrigger>
//         <SelectContent>
//           {assistants.map((assistant) => (
//             <SelectItem key={assistant.id} value={assistant.id}>
//               <div className="flex items-center gap-2">
//                 {assistant.icon}
//                 <span>{assistant.name}</span>
//               </div>
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     )
//   }

//   return null // Não exibe se não for mobile (já temos o menu lateral)
// }





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


















