// "use client"

// import { useAssistant } from "@/components/assistant-provider"
// import { Header } from "@/components/header"
// import { Sidebar } from "@/components/sidebar"
// import { AssistantChat } from "@/components/assistant-chat"
// import { WelcomeScreen } from "@/components/welcome-screen"
// import { ButtonTest } from "@/components/teste-button-screen"


// export function MainLayout() {
//   const { activeAssistant } = useAssistant()

//   return (
//     <div className="flex h-screen flex-col bg-white">
//       <Header />
//       <div className="flex flex-1 overflow-hidden">
//         <Sidebar />
//         <main className="flex-1 overflow-hidden">{activeAssistant ? <AssistantChat /> : <WelcomeScreen />}</main>
//         {/* <main className="flex-1 overflow-hidden">{activeAssistant ? <ButtonTest /> : <WelcomeScreen />}</main> */}
//       </div>
//     </div>
//   )
// }









// v2
// components/main-layout.tsx
// "use client"

// import { useAssistant } from "@/components/assistant-provider"
// import { Header } from "@/components/header"
// import { Sidebar } from "@/components/sidebar"
// import { AssistantChat } from "@/components/assistant-chat"
// import { WelcomeScreen } from "@/components/welcome-screen"
// import { LoginScreen } from "@/components/login-screen-v2"
// import { useEffect, useState } from "react"

// export function MainLayout() {
//   const { activeAssistant } = useAssistant()
//   const [isAuthenticated, setIsAuthenticated] = useState(false) 

//   useEffect(() => {
//     // Verificar autenticação ao carregar o componente
//     const auth = localStorage.getItem("isAuthenticated") === "true"
//     setIsAuthenticated(auth)
//   }, [])

//   if (!isAuthenticated) {
//     return <LoginScreen />
//   }

//   return (
//     <div className="flex h-screen flex-col bg-white">
//       <Header />
//       <div className="flex flex-1 overflow-hidden">
//         <Sidebar />
//         <main className="flex-1 overflow-hidden">
//           {activeAssistant ? <AssistantChat /> : <WelcomeScreen />}
//         </main>
//       </div>
//     </div>
//   )
// }





// v3
"use client"

import { useAssistant } from "@/components/assistant-provider"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { AssistantChat } from "@/components/assistant-chat"
import { WelcomeScreen } from "@/components/welcome-screen"
import { LoginScreen } from "@/components/login-screen-v2"
import { useEffect, useState } from "react"

export function MainLayout() {
  const { activeAssistant } = useAssistant()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Só verifica autenticação no cliente
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("isAuthenticated") === "true"
      setIsAuthenticated(auth)
    }
  }, [])

  if (!mounted) {
    return null // ou um loading spinner
  }

  if (!isAuthenticated) {
    return <LoginScreen />
  }

  return (
    <div className="flex h-screen flex-col bg-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          {activeAssistant ? <AssistantChat /> : <WelcomeScreen />}
        </main>
      </div>
    </div>
  )
}


