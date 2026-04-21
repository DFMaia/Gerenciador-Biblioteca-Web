import type { EditionRequest } from '../types/Edition'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '')

export async function saveEdition(dto: EditionRequest): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/editions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  })

  if (!response.ok) {
    let message = 'Não foi possível salvar o livro.'

    try {
      const data = await response.json() as { message?: string }
      if (typeof data.message === 'string' && data.message.trim()) {
        message = data.message
      }
    } catch {
      // Mantém a mensagem padrão quando o backend não retorna JSON legível.
    }

    if (response.status === 409) throw new Error(message)
    throw new Error(message)
  }
}
