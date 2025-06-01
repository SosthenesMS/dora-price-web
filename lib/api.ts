// Função para fazer chamadas à API do Bellatrix sem autenticação
export async function sendMessageToBellatrix(question: string, sector = "geral") {
  try {
    console.log(`Enviando mensagem para o setor: ${sector}`)

    const response = await fetch("http://localhost:8000/api/v1/bellatrix/chat/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
        setor: sector.toLowerCase(), // Garantir que o campo seja 'setor' e não 'sector'
      }),
    })

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`)
    }

    const data = await response.json()
    console.log("Resposta da API:", data)

    return data
  } catch (error) {
    console.error("Erro ao enviar mensagem para a API:", error)
    throw error
  }
}
