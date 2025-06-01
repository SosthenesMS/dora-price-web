"use client"

import { Button } from "@/components/ui/button"

type SuggestedQuestionsProps = {
  questions: string[]
  onSelectQuestion: (question: string) => void
}

export function SuggestedQuestions({ questions, onSelectQuestion }: SuggestedQuestionsProps) {
  if (!questions.length) return null

  return (
    <div className="mt-6 space-y-3">
      <h3 className="text-sm font-medium text-gray-500">Perguntas sugeridas:</h3>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="bg-gray-50 border-gray-200 text-gray-700 hover:bg-yellow-50 hover:border-yellow-200 hover:text-black"
            onClick={() => onSelectQuestion(question)}
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  )
}
