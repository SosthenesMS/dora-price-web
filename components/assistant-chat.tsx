"use client"

import { useAssistant } from "@/components/assistant-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import dash from "@/public/dashboard_vendas_anual.png"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { AssistantSelector } from "./assistant-selector"
import { FileText, HelpCircle, Download, UserPlus, Users, Key, Shield, FileOutput, Share2, Bell, List, Search, Database, Settings, CheckCircle, RefreshCw, Activity, Copy, RotateCw, Save } from "lucide-react"
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"


export function AssistantChat() {
  const { activeAssistant } = useAssistant() // Removemos as dependências não utilizadas

  return (
    <div className="h-full p-6"> {/* Removida a div de container flex */}
      <Card className="h-full p-6">
        <h2 className="text-2xl font-bold mb-2">{activeAssistant?.name || "Selecione um módulo"}</h2>
        <p className="text-muted-foreground mb-6">{activeAssistant?.description}</p>
        
        {/* Conteúdo específico para cada módulo */}
        <div className="h-[calc(100%-100px)]">
            {activeAssistant?.id === "geral" && <DashboardContent />}
            {activeAssistant?.id === "administracao" && <AccessControlContent />}
            {activeAssistant?.id === "rh" && <ReportsContent />}
            {activeAssistant?.id === "logistica" && <NotificationsContent />}
            {activeAssistant?.id === "financeiro" && <PriceCollectionContent />}
            {activeAssistant?.id === "vendas" && <SyncContent />}
            {activeAssistant?.id === "producao" && <DoraSettingsContent />}
          </div>
      </Card>
    </div>
  )
}





function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Seção principal do dashboard */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Análises</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Cards de métricas (exemplo) */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800">Preços Coletados</h3>
            <p className="text-2xl font-bold mt-2">1,234</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-800">Taxa de Acertividade</h3>
            <p className="text-2xl font-bold mt-2">98%</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-800">Concorrentes Cadastrados</h3>
            <p className="text-2xl font-bold mt-2">9</p>
          </div>
        </div>
        
        {/* Gráfico de exemplo (espaço reservado) */}
        {/* <div className="mt-8 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Gráfico de análise de feedbacks</p>
        </div> */}

        <div className="mt-8 h-96 bg-white rounded-lg overflow-hidden">
          <img
            src={dash.src}
            alt="Gráfico de análise de feedbacks"
            className="w-full h-full object-contain"
          />
        </div>


      </div>
      
      {/* Seção de ações rápidas */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Ações Rápidas</h2>
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            Histórico de Feedbacks
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <HelpCircle className="mr-2 h-4 w-4" />
            Configurar Perguntas de Follow-up
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Download className="mr-2 h-4 w-4" />
            Exportar Dados de Feedback
          </Button>
        </div>
      </div>
    </div>
  );
}

function AccessControlContent() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Controle de Acessos e Permissões</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3">Gerenciar Funções</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <UserPlus className="mr-2 h-4 w-4" />
                Criar Nova Função
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Listar Todas as Funções
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Atribuição de Permissões</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Key className="mr-2 h-4 w-4" />
                Gerenciar Permissões
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="mr-2 h-4 w-4" />
                Auditoria de Acessos
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium mb-3">Usuários Recentes</h3>
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Lista de usuários com atividade recente...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportsContent() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Relatórios e Análises de Desempenho</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo de relatório" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="performance">Desempenho</SelectItem>
              <SelectItem value="feedback">Feedbacks</SelectItem>
              <SelectItem value="financial">Financeiro</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Última semana</SelectItem>
              <SelectItem value="month">Último mês</SelectItem>
              <SelectItem value="quarter">Último trimestre</SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="w-full">
            <FileOutput className="mr-2 h-4 w-4" />
            Gerar Relatório
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Gráfico de desempenho</p>
          </div>
          <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Métricas chave</p>
          </div>
        </div>
        
        <div className="mt-6">
          <Button variant="outline" className="mr-3">
            <Download className="mr-2 h-4 w-4" />
            Exportar PDF
          </Button>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Compartilhar
          </Button>
        </div>
      </div>
    </div>
  );
}

function NotificationsContent() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Configurações de Notificações</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Notificações por Email</h3>
              <p className="text-sm text-gray-500">Receber alertas importantes por email</p>
            </div>
            <Switch />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Notificações no Sistema</h3>
              <p className="text-sm text-gray-500">Mostrar notificações na plataforma</p>
            </div>
            <Switch checked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Alertas SMS</h3>
              <p className="text-sm text-gray-500">Receber mensagens SMS urgentes</p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Histórico de Notificações</h2>
        <div className="border rounded-lg divide-y">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-4 flex items-start">
              <Bell className="h-5 w-5 mt-0.5 mr-3 text-blue-500" />
              <div>
                <p className="font-medium">Novo feedback recebido</p>
                <p className="text-sm text-gray-500">Você recebeu um novo feedback às 14:32</p>
                <p className="text-xs text-gray-400 mt-1">2 horas atrás</p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="mt-4">
          <List className="mr-2 h-4 w-4" />
          Ver Histórico Completo
        </Button>
      </div>
    </div>
  );
}

function PriceCollectionContent() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Coleta de Preços do Mercado</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Input placeholder="Nome do produto" />
          <Input placeholder="Intervalo de preço" />
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Pesquisar
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Produto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Preço Médio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Variação</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Última Atualização</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3].map((item) => (
                <tr key={item}>
                  <td className="px-6 py-4 whitespace-nowrap">Produto {item}</td>
                  <td className="px-6 py-4 whitespace-nowrap">R$ {item * 49.90}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${item % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {item % 2 === 0 ? '+2.5%' : '-1.8%'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">há {item} dia{item !== 1 && 's'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500">Mostrando 3 de 27 itens</div>
          <div className="flex space-x-2">
            <Button variant="outline" disabled>
              Anterior
            </Button>
            <Button variant="outline">
              Próximo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SyncContent() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Sincronização de Bases de Dados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Database className="h-5 w-5 mr-2 text-blue-500" />
              <h3 className="font-medium">Fonte de Dados</h3>
            </div>
            <p className="text-sm text-gray-500 mb-3">Configure a origem dos dados para sincronização</p>
            <Button variant="outline" className="w-full">
              <Settings className="mr-2 h-4 w-4" />
              Configurar Fonte
            </Button>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Database className="h-5 w-5 mr-2 text-green-500" />
              <h3 className="font-medium">Destino dos Dados</h3>
            </div>
            <p className="text-sm text-gray-500 mb-3">Configure para onde os dados serão sincronizados</p>
            <Button variant="outline" className="w-full">
              <Settings className="mr-2 h-4 w-4" />
              Configurar Destino
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium">Sincronização Automática</h3>
              <p className="text-sm text-gray-500">Ativar sincronização a cada 24 horas</p>
            </div>
            <Switch />
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">Última Sincronização</h3>
            <div className="flex items-center text-sm text-gray-500">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>Concluída em 15/06/2023 às 14:32</span>
            </div>
            <div className="mt-3">
              <Button>
                <RefreshCw className="mr-2 h-4 w-4" />
                Sincronizar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DoraSettingsContent() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Configurações por Assistente</h2>
        
        <Tabs defaultValue="model" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="model">Modelo</TabsTrigger>
            <TabsTrigger value="training">Treinamento</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>
          
          <TabsContent value="model" className="pt-6">
            <div className="space-y-4">
              <div>
                <Label>Versão do Modelo</Label>
                <Select defaultValue="v3.2">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="v3.2">v3.2 (Recomendada)</SelectItem>
                    <SelectItem value="v3.1">v3.1</SelectItem>
                    <SelectItem value="v2.9">v2.9</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <Label>Limite de Tokens</Label>
                  <Input type="number" defaultValue="2048" />
                </div>
                <div className="flex-1">
                  <Label>Temperatura</Label>
                  <Input type="number" defaultValue="0.7" step="0.1" min="0" max="1" />
                </div>
              </div>
              
              <div>
                <Label>Prompt Padrão</Label>
                <Textarea 
                  defaultValue="Você é um assistente IA útil chamado DORA. Responda de forma clara e concisa." 
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="training" className="pt-6">
            <div className="space-y-4">
              <div>
                <Label>Frequência de Treinamento</Label>
                <Select defaultValue="weekly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Diariamente</SelectItem>
                    <SelectItem value="weekly">Semanalmente</SelectItem>
                    <SelectItem value="monthly">Mensalmente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Fontes de Dados</Label>
                <div className="space-y-2 mt-2">
                  {['Feedback de Usuários', 'Documentação Interna', 'Base de Conhecimento'].map((source) => (
                    <div key={source} className="flex items-center space-x-2">
                      <Checkbox id={source} defaultChecked />
                      <Label htmlFor={source}>{source}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button>
                <Activity className="mr-2 h-4 w-4" />
                Treinar Modelo Agora
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="api" className="pt-6">
            <div className="space-y-4">
              <div>
                <Label>Chave da API</Label>
                <div className="flex space-x-2">
                  <Input value="dora_sk_test_1234567890abcdef" readOnly />
                  <Button variant="outline" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">Mantenha esta chave em segredo</p>
              </div>
              
              <div>
                <Label>Limite de Requisições</Label>
                <Select defaultValue="1000">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">100/min</SelectItem>
                    <SelectItem value="500">500/min</SelectItem>
                    <SelectItem value="1000">1000/min</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button variant="destructive">
                <RotateCw className="mr-2 h-4 w-4" />
                Gerar Nova Chave
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 flex justify-end">
          <Button className="mr-3" variant="outline">
            Cancelar
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Salvar Configurações
          </Button>
        </div>
      </div>
    </div>
  );
}

// Nota: Você precisará importar todos os componentes UI utilizados




