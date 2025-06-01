"use client"

import { useState } from "react"
import { Moon, Sun, Type, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SettingsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SettingsModal({ open, onOpenChange }: SettingsModalProps) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light")
  const [fontSize, setFontSize] = useState(16)
  const [notifications, setNotifications] = useState({
    newMessages: true,
    mentions: true,
    updates: false,
  })
  const [language, setLanguage] = useState("pt-BR")

  const handleSaveSettings = () => {
    // Aqui você implementaria a lógica para salvar as configurações
    console.log("Configurações salvas:", {
      theme,
      fontSize,
      notifications,
      language,
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Configurações</DialogTitle>
          <DialogDescription>Personalize sua experiência com o assistente Dora Price.</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="aparencia" className="mt-4">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="aparencia">Aparência</TabsTrigger>
            <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
            <TabsTrigger value="idioma">Idioma</TabsTrigger>
          </TabsList>

          <TabsContent value="aparencia" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Tema</h3>
                <RadioGroup
                  value={theme}
                  onValueChange={(value) => setTheme(value as "light" | "dark" | "system")}
                  className="flex space-x-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="light" />
                    <Label htmlFor="light" className="flex items-center">
                      <Sun className="h-4 w-4 mr-1" />
                      Claro
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="dark" />
                    <Label htmlFor="dark" className="flex items-center">
                      <Moon className="h-4 w-4 mr-1" />
                      Escuro
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="system" id="system" />
                    <Label htmlFor="system">Sistema</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">Tamanho da Fonte</h3>
                  <span className="text-sm">{fontSize}px</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Type className="h-4 w-4" />
                  <Slider
                    value={[fontSize]}
                    min={12}
                    max={24}
                    step={1}
                    onValueChange={(value) => setFontSize(value[0])}
                    className="flex-1"
                  />
                  <Type className="h-5 w-5" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notificacoes" className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="new-messages">Novas mensagens</Label>
                  <p className="text-sm text-gray-500">Receba notificações para novas mensagens</p>
                </div>
                <Switch
                  id="new-messages"
                  checked={notifications.newMessages}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, newMessages: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="mentions">Menções</Label>
                  <p className="text-sm text-gray-500">Receba notificações quando for mencionado</p>
                </div>
                <Switch
                  id="mentions"
                  checked={notifications.mentions}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, mentions: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="updates">Atualizações do sistema</Label>
                  <p className="text-sm text-gray-500">Receba notificações sobre atualizações do sistema</p>
                </div>
                <Switch
                  id="updates"
                  checked={notifications.updates}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, updates: checked })}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="idioma" className="space-y-4">
            <div>
              <Label htmlFor="language" className="text-sm font-medium mb-2 block">
                Idioma da Interface
              </Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger id="language" className="w-full">
                  <SelectValue placeholder="Selecione um idioma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                  <SelectItem value="en-US" disabled>
                    Inglês (EUA)
                  </SelectItem>
                  <SelectItem value="es-ES" disabled>
                    Espanhol
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-500 mt-2">Outros idiomas estarão disponíveis em breve.</p>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button onClick={handleSaveSettings} className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Save className="h-4 w-4 mr-2" />
            Salvar Configurações
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
