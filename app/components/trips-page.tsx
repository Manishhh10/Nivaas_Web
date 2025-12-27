"use client"

import { MapPin, Calendar, ChevronRight, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface TripsPageProps {
  onNavigate?: (page: "property" | "trips" | "search") => void
}

export default function TripsPage({ onNavigate }: TripsPageProps) {
  return (
    <main className="w-full min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Nivaas</h1>
          <nav className="flex gap-8 items-center">
            <button onClick={() => onNavigate?.("search")} className="text-sm hover:text-muted-foreground transition">
              Search
            </button>
            <button onClick={() => onNavigate?.("trips")} className="text-sm font-semibold">
              Trips
            </button>
            <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90 transition">
              Login
            </button>
          </nav>
        </div>
      </header>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2 text-balance">Your trips</h1>
        <p className="text-muted-foreground mb-12">Upcoming and past reservations</p>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-border mb-12">
          <button className="pb-4 border-b-2 border-foreground font-semibold">Upcoming</button>
          <button className="pb-4 text-muted-foreground hover:text-foreground transition">Past stays</button>
        </div>

        {/* Reservation Card */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <Card
            className="overflow-hidden hover:shadow-lg transition cursor-pointer"
            onClick={() => onNavigate?.("property")}
          >
            <img src="/beach-bungalow-kathmandu-nepal.jpg" alt="Kathmandu property" className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold mb-3">
                Pending
              </div>
              <h3 className="text-xl font-bold mb-2">Private room in home</h3>
              <p className="text-sm text-muted-foreground mb-4">Hosted by Abhi Krishna</p>

              <div className="space-y-2 mb-6 pb-6 border-b border-border">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold">Feb 13 - 14, 2023</p>
                    <p className="text-muted-foreground">2 nights</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold">Lalitpur, Nepal</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button variant="outline" className="flex-1 mr-3 bg-transparent">
                  View
                </Button>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition cursor-pointer">
            <img src="/mountain-resort-hiking-trek.jpg" alt="Mountain property" className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-3">
                Confirmed
              </div>
              <h3 className="text-xl font-bold mb-2">Mountain retreat in Nagarkot</h3>
              <p className="text-sm text-muted-foreground mb-4">Hosted by Raj Sharma</p>

              <div className="space-y-2 mb-6 pb-6 border-b border-border">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold">Mar 1 - 5, 2023</p>
                    <p className="text-muted-foreground">4 nights</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold">Nagarkot, Nepal</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button variant="outline" className="flex-1 mr-3 bg-transparent">
                  View
                </Button>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </Card>
        </div>

        {/* Experiences Section */}
        <div className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold mb-6">Explore things to do</h2>
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition cursor-pointer">
                <img
                  src={`/nepal-experience-activity-.jpg?height=200&width=300&query=nepal experience activity ${i}`}
                  alt="Experience"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="w-4 h-4" />
                    <span className="text-xs font-semibold">Experience</span>
                  </div>
                  <h4 className="font-semibold text-sm">Local cultural tour</h4>
                  <p className="text-xs text-muted-foreground mt-1">From Rs. 2,500</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
