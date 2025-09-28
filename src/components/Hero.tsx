import { nanciData } from '@/data/nanci-data'
import { Leaf, MapPin, Calendar, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-800/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.1"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Title */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg">
              <Leaf className="h-12 w-12 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-4 leading-tight">
            Nanci Ferreira
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="h-6 w-6 text-green-600" />
            <p className="text-2xl md:text-3xl text-green-600 font-medium">
              Conhecida como "Dita"
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-green-700 max-w-4xl mx-auto leading-relaxed font-light">
            {nanciData.personal.description}
          </p>
        </div>
        
        {/* Info Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
            <Calendar className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">73 anos de sabedoria</span>
          </div>
          <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
            <MapPin className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">Cascata, Águas da Prata - SP</span>
          </div>
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {nanciData.personal.bio}
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {nanciData.personal.extendedBio}
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 max-w-4xl mx-auto">
          <blockquote className="text-lg md:text-xl text-green-700 italic font-light leading-relaxed border-l-4 border-green-400 pl-6 bg-white/40 backdrop-blur-sm rounded-r-xl py-6 pr-6">
            "{nanciData.personal.quote}"
          </blockquote>
        </div>
      </div>
    </section>
  )
}