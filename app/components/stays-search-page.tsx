"use client"

import { useState } from "react"
import { Search, MapPin, Calendar, Users } from "lucide-react"

interface StaysSearchPageProps {
  onNavigate: (page: "stays" | "experiences" | "map") => void
}

export default function StaysSearchPage({ onNavigate }: StaysSearchPageProps) {
  const [destination, setDestination] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("")
  const [flexibility, setFlexibility] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-slate-900">Nivaas</h1>
            <nav className="flex gap-8">
              <button
                onClick={() => onNavigate("stays")}
                className="text-slate-900 font-semibold border-b-2 border-orange-500 pb-1"
              >
                Stays
              </button>
              <button
                onClick={() => onNavigate("experiences")}
                className="text-slate-400 hover:text-slate-600 transition"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero text */}
          <div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Book your next stay in Nepal</h2>
            <p className="text-xl text-slate-600 mb-4">
              Discover unique places to stay hosted by locals. Experience authentic Nepali hospitality.
            </p>
            <div className="flex gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                Verified hosts
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                Secure payments
              </div>
            </div>
          </div>

          {/* Right side - Search form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Where to?</h3>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search destinations"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Destination quick picks */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <button className="p-4 border border-slate-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition text-left">
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="text-sm font-medium text-slate-900">I'm flexible</div>
                </button>
                <button className="p-4 border border-slate-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition text-left">
                  <div className="text-2xl mb-2">🏔️</div>
                  <div className="text-sm font-medium text-slate-900">Pokhara</div>
                </button>
                <button className="p-4 border border-slate-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition text-left">
                  <div className="text-2xl mb-2">🏛️</div>
                  <div className="text-sm font-medium text-slate-900">Kathmandu</div>
                </button>
              </div>
            </div>

            {/* Date and Guests */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Check in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Check out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Guests */}
            <div className="mb-8">
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

            {/* Flexibility toggle */}
            <div className="flex items-center gap-3 mb-8">
              <input
                type="checkbox"
                id="flexible"
                checked={flexibility}
                onChange={(e) => setFlexibility(e.target.checked)}
                className="w-4 h-4 accent-orange-500 rounded cursor-pointer"
              />
              <label htmlFor="flexible" className="text-sm text-slate-700 cursor-pointer">
                I'm flexible with dates
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setDestination("")
                  setCheckIn("")
                  setCheckOut("")
                  setGuests("")
                  setFlexibility(false)
                }}
                className="flex-1 py-3 text-slate-700 font-semibold hover:bg-slate-100 rounded-lg transition"
              >
                Clear all
              </button>
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
