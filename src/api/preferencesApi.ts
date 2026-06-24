import type { Preferences, SortOrder, Theme } from '../types/Preferences'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '')

export async function getPreferences(): Promise<Preferences> {
  const response = await fetch(`${API_BASE_URL}/preferences`, {
    headers: { Accept: 'application/json' },
  })
  if (!response.ok) throw new Error('Não foi possível carregar as preferências.')
  return response.json() as Promise<Preferences>
}

export async function saveTheme(theme: Theme): Promise<Preferences> {
  const response = await fetch(`${API_BASE_URL}/preferences`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ theme }),
  })
  if (!response.ok) throw new Error('Não foi possível salvar o tema.')
  return response.json() as Promise<Preferences>
}

export async function saveSortOrder(sortOrder: SortOrder): Promise<Preferences> {
  const response = await fetch(`${API_BASE_URL}/preferences`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ sortOrder }),
  })
  if (!response.ok) throw new Error('Não foi possível salvar a ordenação.')
  return response.json() as Promise<Preferences>
}
