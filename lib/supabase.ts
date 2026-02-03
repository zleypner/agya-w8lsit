import { createClient } from '@supabase/supabase-js'

/**
 * Server-only Supabase client (API routes, server components).
 * Use SUPABASE_ANON_KEY (RLS allows anon to insert into waitlist) or SUPABASE_SERVICE_ROLE_KEY.
 * Never use service role in client components or expose it.
 */
export function createServerSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY

  if (!url || !key) {
    throw new Error(
      'Missing Supabase env: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_ANON_KEY) in .env.local'
    )
  }

  return createClient(url, key)
}
