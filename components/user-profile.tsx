"use client"

import { useState } from "react"
import { User, Mail, Phone, Building, Calendar, Edit, Camera } from "lucide-react"
import Image from "next/image"
import logo from "@/public/Mark.png"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

interface UserProfileProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserProfile({ open, onOpenChange }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false)
  
  // Dados de exemplo do usuário
  const [userData, setUserData] = useState({
    full_name: "Jurandir Roberto",
    email: "jurandir.roberto@doraprice.com",
    phone: "(11) 98765-4321",
    department: "Controladoria Comercial",
    position: "Gerente Comercial",
    joinDate: "15/03/2020",
    bio: "Gestor comercial.",
    skills: ["Tomada de Decisão", "Coleta de Preço", "B2B", "B2C"],
    recentActivities: [
      { id: 1, action: "Enviou documento", target: "Relatório de Contratações.pdf", time: "Hoje, 14:32" },
      { id: 2, action: "Respondeu pergunta", target: "Processo de Férias", time: "Ontem, 09:15" },
      { id: 3, action: "Compartilhou arquivo", target: "Planilha de Treinamentos.xlsx", time: "23/05/2023" },
    ],
  })

  const handleSaveProfile = () => {
    console.log("Perfil salvo:", userData)
    setIsEditing(false)
  }

  const handleAvatarChange = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"
    input.onchange = (e) => {
      console.log("Avatar selecionado:", (e.target as HTMLInputElement).files?.[0])
    }
    input.click()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Perfil do Usuário</DialogTitle>
          <DialogDescription>Visualize e edite suas informações de perfil.</DialogDescription>
        </DialogHeader>

        <div className="flex justify-between items-start mt-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-yellow-400">
                <Image
                  src={logo} // Coloque sua imagem na pasta public
                  alt={userData.full_name}
                  width={80}
                  height={80}
                  className="object-cover h-full w-full"
                  priority
                />
              </div>
              {isEditing && (
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-black text-yellow-400"
                  onClick={handleAvatarChange}
                >
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div>
              <h2 className="text-xl font-bold">{userData.full_name}</h2>
              <p className="text-gray-500">{userData.position}</p>
              <Badge className="mt-1 bg-yellow-400 text-black">{userData.department}</Badge>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            className="border-yellow-400 text-black hover:bg-yellow-50"
          >
            <Edit className="h-4 w-4 mr-2" />
            {isEditing ? "Cancelar" : "Editar"}
          </Button>
        </div>

        <Tabs defaultValue="informacoes" className="mt-6">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="informacoes">Informações</TabsTrigger>
            <TabsTrigger value="atividades">Atividades Recentes</TabsTrigger>
          </TabsList>

          <TabsContent value="informacoes" className="space-y-4 mt-4">
            {isEditing ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Nome</Label>
                    <Input
                      id="full_name"
                      value={userData.full_name}
                      onChange={(e) => setUserData({ ...userData, full_name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={userData.phone}
                      onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Cargo</Label>
                    <Input
                      id="position"
                      value={userData.position}
                      onChange={(e) => setUserData({ ...userData, position: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Biografia</Label>
                  <Textarea
                    id="bio"
                    value={userData.bio}
                    onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                    rows={3}
                  />
                </div>
                <Button onClick={handleSaveProfile} className="bg-yellow-400 text-black hover:bg-yellow-500">
                  Salvar Alterações
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>{userData.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>{userData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-gray-500" />
                    <span>
                      {userData.department} - {userData.position}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>Ingressou em {userData.joinDate}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-medium mb-2">Sobre</h3>
                  <p className="text-sm text-gray-600">{userData.bio}</p>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-medium mb-2">Habilidades</h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.map((skill, index) => (
                      <Badge key={index} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="atividades" className="mt-4">
            <div className="space-y-4">
              {userData.recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-2 pb-3 border-b">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">{activity.action}</span>{" "}
                      <span className="text-yellow-600">{activity.target}</span>
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}




