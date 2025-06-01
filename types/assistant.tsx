export type Assistant = {
  id: string
  name: string
  sector: string
  description: string
  icon: React.ReactNode
  welcomeMessage: string
  suggestedQuestions: string[]
}
