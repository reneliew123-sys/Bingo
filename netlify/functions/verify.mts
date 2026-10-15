import type { Config } from '@netlify/functions'

// The gamemaster's password lives only on the server so players can't read it from page source.
const GAMEMASTER_PASSWORD = 'boardgame'

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }
  let password = ''
  try {
    const body = await req.json()
    password = typeof body?.password === 'string' ? body.password : ''
  } catch {
    return Response.json({ ok: false }, { status: 400 })
  }
  const ok = password.trim().toLowerCase() === GAMEMASTER_PASSWORD
  return Response.json({ ok }, { status: ok ? 200 : 401 })
}

export const config: Config = {
  path: '/api/verify',
}
