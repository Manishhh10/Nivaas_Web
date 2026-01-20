"use client"

import { useState } from "react"
import { Search, MapPin, Calendar, Users } from "lucide-react"

interface ExperiencesSearchPageProps {
  onNavigate: (page: "stays" | "experiences" | "map") => void
}

export default function ExperiencesSearchPage({ onNavigate }: ExperiencesSearchPageProps) {
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [guests, setGuests] = useState("")

  const experiences = [
    { id: 1, title: "Trekking Adventure", location: "Himalayas", price: "Rs.2,500" },
    { id: 2, title: "Cooking Class", location: "Kathmandu", price: "Rs.1,200" },
    { id: 3, title: "Meditation Retreat", location: "Pokhara", price: "Rs.3,000" },
    { id: 4, title: "Photography Tour", location: "Bhaktapur", price: "Rs.1,800" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-slate-900">Nivaas</h1>
            <nav className="flex gap-8">
              <button onClick={() => onNavigate("stays")} className="text-slate-400 hover:text-slate-600 transition">
                Stays
              </button>
              <button
                onClick={() => onNavigate("experiences")}
                className="text-slate-900 font-semibold border-b-2 border-orange-500 pb-1"
              >
                Experiences
              </button>
            </nav>
          </div>
          <button onClick={() => onNavigate("map")} className="text-slate-600 hover:text-slate-900 transition">
            Map View
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Discover unique experiences in Nepal</h2>

          <div className="grid lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Where to?</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search destinations"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">When</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Add guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="flex items-end">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Featured Experiences */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Featured Experiences</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
              >
                <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-4xl">
                  {["🥾", "👨‍🍳", "🧘", "📸"][exp.id - 1]}
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-slate-900 mb-1">{exp.title}</h4>
                  <p className="text-sm text-slate-600 mb-3">{exp.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-orange-500">{exp.price}</span>
                    <span className="text-xs text-slate-500">per person</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
