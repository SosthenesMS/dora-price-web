import { Assistant } from "@/types/assistant" // Ajuste o caminho conforme sua estrutura
import { Card } from "@/components/ui/card02"

interface AssistantContentProps {
  activeId: string;
}

function AssistantContent({ activeId }: AssistantContentProps) {
  switch (activeId) {
    case "geral":
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Dashboard Geral</h3>
          <Card className="p-4">
            {/* Conteúdo específico para o assistente geral */}
            <p>Conteúdo do dashboard geral aqui...</p>
          </Card>
        </div>
      );
    case "administracao":
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Controle de Acessos</h3>
          <Card className="p-4">
            {/* Conteúdo específico para administração */}
            <p>Conteúdo de controle de acessos aqui...</p>
          </Card>
        </div>
      );
    case "rh":
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Relatórios</h3>
          <Card className="p-4">
            {/* Conteúdo específico para RH */}
            <p>Conteúdo de relatórios aqui...</p>
          </Card>
        </div>
      );
    // Adicione os outros casos conforme necessário
    default:
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Assistente</h3>
          <Card className="p-4">
            <p>Selecione um assistente para ver o conteúdo específico.</p>
          </Card>
        </div>
      );
  }
}

