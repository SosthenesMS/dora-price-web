// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Menu, Settings, HelpCircle, User } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Sidebar } from "@/components/sidebar"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { SettingsModal } from "@/components/settings-modal"
// import { UserProfile } from "@/components/user-profile"
// import { ThemeToggle } from "@/components/theme-toggle"

// export function Header() {
//   const [settingsOpen, setSettingsOpen] = useState(false)
//   const [profileOpen, setProfileOpen] = useState(false)

//   return (
//     <>
//       <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-gray-800 px-4 md:px-6">
//         <div className="flex items-center gap-2">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="outline" size="icon" className="md:hidden bg-yellow-400 text-black hover:bg-yellow-500">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Alternar menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="p-0">
//               <Sidebar />
//             </SheetContent>
//           </Sheet>
//           <div className="flex items-center gap-2">

//             {/* <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center">
//               <span className="font-bold text-black">D</span>
//             </div> */}
//             <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
//               <Image 
//                 src="/assets/dora_ia.png"
//                 alt="Dora Price"
//                 width={32}
//                 height={32}
//                 className="object-cover"
//               />
//             </div>

//             <h1 className="text-xl font-bold text-yellow-400">Dora Price</h1>
//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="hidden md:inline text-sm text-yellow-400">
//             Dora Price Backoffice
//           </span>

//           <ThemeToggle />

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
//               >
//                 <Settings className="h-5 w-5" />
//                 <span className="sr-only">Configurações</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem onClick={() => setSettingsOpen(true)}>
//                 <Settings className="h-4 w-4 mr-2" />
//                 Configurações
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => setProfileOpen(true)}>
//                 <User className="h-4 w-4 mr-2" />
//                 Perfil do Sistema
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </header>

//       <SettingsModal open={settingsOpen} onOpenChange={setSettingsOpen} />
//       <UserProfile open={profileOpen} onOpenChange={setProfileOpen} />
//     </>
//   )
// }





// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Menu, Settings, HelpCircle, User } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Sidebar } from "@/components/sidebar"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { SettingsModal } from "@/components/settings-modal"
// import { UserProfile } from "@/components/user-profile"
// import { ThemeToggle } from "@/components/theme-toggle"
// import { WelcomeScreen } from "@/components/welcome-screen"
// import { Logo } from "./logo"
// import { motion } from "framer-motion"

// export function Header({ onLogoClick }: { onLogoClick?: () => void }) {
//   const [settingsOpen, setSettingsOpen] = useState(false)
//   const [profileOpen, setProfileOpen] = useState(false)
//   const [showWelcome, setShowWelcome] = useState(false)

//   const handleLogoClick = () => {
//     setShowWelcome(prev => !prev)
//     onLogoClick?.()
//   }

//   return (
//     <>
//       <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-gray-800 px-4 md:px-6">
//         <div className="flex items-center gap-2">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="outline" size="icon" className="md:hidden bg-yellow-400 text-black hover:bg-yellow-500">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Alternar menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="p-0">
//               <Sidebar />
//             </SheetContent>
//           </Sheet>

          

//           <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>


//             <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//               <Logo size="md" showText />
//             </motion.div>
            
//             {/* <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
//               <Image 
//                 src="/assets/dora_ia.png"
//                 alt="Dora Price"
//                 width={40}
//                 height={40}
//                 className="object-cover"
//               />
//             </div>
//             <h1 className="text-xl font-bold text-yellow-400">Dora Price</h1> */}

//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="hidden md:inline text-sm text-yellow-400">
//             Dora Price Backoffice
//           </span>

//           <ThemeToggle />

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
//               >
//                 <Settings className="h-5 w-5" />
//                 <span className="sr-only">Configurações</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem onClick={() => setSettingsOpen(true)}>
//                 <Settings className="h-4 w-4 mr-2" />
//                 Configurações
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => setProfileOpen(true)}>
//                 <User className="h-4 w-4 mr-2" />
//                 Perfil do Sistema
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </header>


//       {showWelcome && <WelcomeScreen />}
//       <SettingsModal open={settingsOpen} onOpenChange={setSettingsOpen} />
//       <UserProfile open={profileOpen} onOpenChange={setProfileOpen} />

//     </>
//   )
// }




"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, Settings, HelpCircle, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SettingsModal } from "@/components/settings-modal"
import { UserProfile } from "@/components/user-profile"
import { ThemeToggle } from "@/components/theme-toggle"
import { WelcomeScreen } from "@/components/welcome-screen"
import { Logo } from "./logo"
import { motion } from "framer-motion"

export function Header({ onLogoClick }: { onLogoClick?: () => void }) {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  const handleLogoClick = () => {
    setShowWelcome(prev => !prev)
    onLogoClick?.()
    window.location.reload()
  }

  return (
    <>
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-gray-800 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-yellow-400 text-black hover:bg-yellow-500">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Alternar menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Logo size="md" showText />
            </motion.div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden md:inline text-sm text-yellow-400">
            Dora Price Backoffice
          </span>

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Configurações</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSettingsOpen(true)}>
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setProfileOpen(true)}>
                <User className="h-4 w-4 mr-2" />
                Perfil do Sistema
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {showWelcome && <WelcomeScreen />}
      <SettingsModal open={settingsOpen} onOpenChange={setSettingsOpen} />
      <UserProfile open={profileOpen} onOpenChange={setProfileOpen} />
    </>
  )
}



