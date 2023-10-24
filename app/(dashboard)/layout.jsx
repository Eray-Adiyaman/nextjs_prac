import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// components
import Navbar from '@/app/components/Navbar'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if(!data.session){
    //since this is a server component i cant use useRouter(its exclusive to client components) so redirect it is.
    console.log("no session redirect")
    redirect("/login")
  }

  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  )
}