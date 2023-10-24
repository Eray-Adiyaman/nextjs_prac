import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
//supabase sent code
export async function GET(request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
//if there is an existing code in the request start a user session
  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(url.origin)
}