import type { EditionRequest } from '../types/Edition'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '')

export async function saveEdition(dto: EditionRequest): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/editions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  })

  if (!response.ok) {
    if (response.status === 409) throw new Error('Esta edição já está cadastrada.')
    throw new Error('Não foi possível salvar o livro.')
  }
}
