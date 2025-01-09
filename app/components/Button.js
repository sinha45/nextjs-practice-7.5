'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Button({children}) {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/dashboard/analytics')} className="mt-8 font-semibold bg-blue-700 text-white px-3 py-2 rounded-lg">
    {children}
    </button>
  )
}