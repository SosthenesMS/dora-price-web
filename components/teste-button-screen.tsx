"use client"

import type React from "react"
import { useState } from "react"
import { Settings, User, Lock, Database, Bell, LogOut } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ButtonTest() {
  const [activeTab, setActiveTab] = useState<string>("user")

  return (
    <div className="flex h-full flex-col">
      <div className="border-b p-3 bg-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings className="h-6 w-6 text-yellow-400" />
          <h2 className="font-medium">Configurações do Sistema</h2>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-48 border-r p-4 space-y-2">
          <Button
            variant={activeTab === "user" ? "default" : "ghost"}
            className="w-full justify-start gap-2"
            onClick={() => setActiveTab("user")}
          >
            <User className="h-4 w-4" />
            Perfil do Usuário
          </Button>
          <Button
            variant={activeTab === "access" ? "default" : "ghost"}
            className="w-full justify-start gap-2"
            onClick={() => setActiveTab("access")}
          >
            <Lock className="h-4 w-4" />
            Controle de Acesso
          </Button>
          <Button
            variant={activeTab === "data" ? "default" : "ghost"}
            className="w-full justify-start gap-2"
            onClick={() => setActiveTab("data")}
          >
            <Database className="h-4 w-4" />
            Gerenciamento de Dados
          </Button>
          <Button
            variant={activeTab === "notifications" ? "default" : "ghost"}
            className="w-full justify-start gap-2"
            onClick={() => setActiveTab("notifications")}
          >
            <Bell className="h-4 w-4" />
            Notificações
          </Button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          {activeTab === "user" && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Perfil do Usuário</h3>
              <Card className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Informações Pessoais</h4>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <Button variant="outline">Alterar Nome</Button>
                      <Button variant="outline">Alterar Email</Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Segurança</h4>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <Button variant="outline">Alterar Senha</Button>
                      <Button variant="outline">Autenticação em 2 Fatores</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "access" && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Controle de Acesso</h3>
              <Card className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Permissões</h4>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <Button variant="outline">Gerenciar Funções</Button>
                      <Button variant="outline">Atribuir Permissões</Button>
                      <Button variant="outline">Histórico de Acessos</Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Restrições</h4>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <Button variant="outline">IPs Permitidos</Button>
                      <Button variant="outline">Horários de Acesso</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "data" && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Gerenciamento de Dados</h3>
              <Card className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Backup</h4>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <Button variant="outline">Criar Backup</Button>
                      <Button variant="outline">Restaurar Backup</Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Exportação</h4>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <Button variant="outline">Exportar Dados</Button>
                      <Button variant="outline">Limpar Dados</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Configurações de Notificação</h3>
              <Card className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Preferências</h4>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <Button variant="outline">Notificações por Email</Button>
                      <Button variant="outline">Notificações Push</Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Alertas</h4>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <Button variant="outline">Configurar Alertas</Button>
                      <Button variant="outline">Histórico de Notificações</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>

      <div className="border-t p-4 bg-white flex justify-end">
        <Button variant="destructive" className="gap-2">
          <LogOut className="h-4 w-4" />
          Sair do Sistema
        </Button>
      </div>
    </div>
  )
}
