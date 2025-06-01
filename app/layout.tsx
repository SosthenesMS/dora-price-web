import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AssistantProvider } from "@/components/assistant-provider"

export const metadata = {
  title: "Dora Price - Assistente de Integração Pneubras",
  description: "Assistente de IA para integração de setores da Pneubras",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AssistantProvider>
            {children}
          </AssistantProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}




// import type React from "react"
// import "@/app/globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
// import { AssistantProvider } from "@/components/assistant-provider"

// export const metadata = {
//   title: "Dora Price - Assistente de Integração Pneubras",
//   description: "Assistente de IA para integração de setores da Pneubras",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="pt-BR" suppressHydrationWarning>
//       <body suppressHydrationWarning className="min-h-screen bg-white text-blue-900">
//         <ThemeProvider 
//           attribute="class" 
//           defaultTheme="light" 
//           themes={['light', 'dark', 'blue']}
//           enableSystem 
//           disableTransitionOnChange
//         >
//           <AssistantProvider>
//             {children}
//           </AssistantProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }




