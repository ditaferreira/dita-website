import Link from 'next/link'
import { Leaf } from 'lucide-react'
import { Metadata } from 'next'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex items-center justify-center mb-8">
          <Leaf className="h-16 w-16 text-green-600" />
        </div>
        <h1 className="text-6xl font-bold text-green-800 mb-4">404</h1>
        <p className="text-xl text-green-700 mb-8">Esta página não foi encontrada.</p>
        <Link 
          href="/" 
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          <Leaf className="h-5 w-5 mr-2" />
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Página não encontrada - Nanci Ferreira',
}
