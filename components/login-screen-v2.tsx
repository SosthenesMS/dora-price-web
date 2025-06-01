"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export function LoginScreen() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Credenciais mockadas
  const MOCK_USER = "jurandir.roberto"
  const MOCK_PASS = "123"

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Simula um delay de rede
      await new Promise(resolve => setTimeout(resolve, 500))
      
      if (username === MOCK_USER && password === MOCK_PASS) {
        // Verifica se está no cliente antes de usar localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("isAuthenticated", "true")
          // Força uma atualização completa para garantir que o estado de autenticação seja verificado
          window.location.href = "/"
        }
      } else {
        setError("Credenciais inválidas")
      }
    } catch (err) {
      setError("Ocorreu um erro durante o login")
      console.error("Login error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <form 
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-md"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Dora Price</h2>
          <p className="text-sm text-gray-600 mt-2">Insira suas credenciais para continuar</p>
        </div>
        
        <div className="mb-4">
          <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-700">
            Usuário
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu usuário"
            required
            autoComplete="username"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite sua senha"
            required
            autoComplete="current-password"
          />
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-yellow-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Autenticando...
            </>
          ) : (
            "Entrar"
          )}
        </button>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Esqueci minha senha</p>
        </div>
      </form>
      
      <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-500">
        <p>Desenvolvido por</p>
        <p className="font-medium">Dora Price Development LTDA® 2025</p>
      </div>

    </div>
  )
}


