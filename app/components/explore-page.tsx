"use client"

import { useState } from "react"
import { Heart, MapPin, Star, MessageCircle } from "lucide-react"

interface Property {
  id: string
  title: string
  location: string
  distance: number
  dates: string
  rating: number
  reviews: number
  pricePerNight: number
  totalPrice: number
  image: string
  category: string
}

const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Pool Villa with Mountain View",
    location: "Kathmandu, Nepal",
    distance: 1669,
    dates: "Jul 2 - 7",
    rating: 4.87,
    reviews: 71,
    pricePerNight: 8860,
    totalPrice: 62020,
    image: "/images/attachments-gen-images-public-mountain-lodge-nepal-pokhara.jpg",
    category: "omg",
  },
  {
    id: "2",
    title: "Cozy Mountain Retreat",
    location: "Pokhara, Nepal",
    distance: 1200,
    dates: "Jul 5 - 10",
    rating: 4.92,
    reviews: 156,
    pricePerNight: 5500,
    totalPrice: 33000,
    image: "/images/attachments-gen-images-public-cozy-bedroom.png",
    category: "omg",
  },
  {
    id: "3",
    title: "Stunning Rooftop Pool",
    location: "Bhaktapur, Nepal",
    distance: 1850,
    dates: "Jul 8 - 12",
    rating: 4.85,
    reviews: 92,
    pricePerNight: 7200,
    totalPrice: 28800,
    image: "/images/attachments-gen-images-public-mountain-view-terrace.jpg",
    category: "pools",
  },
  {
    id: "4",
    title: "Serene Lakeside Bungalow",
    location: "Phewa Lake, Nepal",
    distance: 980,
    dates: "Jul 3 - 8",
    rating: 4.78,
    reviews: 63,
    pricePerNight: 6800,
    totalPrice: 34000,
    image: "/images/attachments-gen-images-public-mountain-lodge-nepal-pokhara.jpg",
    category: "pools",
  },
  {
    id: "5",
    title: "Private Garden House",
    location: "Lalitpur, Nepal",
    distance: 1500,
    dates: "Jul 10 - 15",
    rating: 4.95,
    reviews: 128,
    pricePerNight: 7900,
    totalPrice: 39500,
    image: "/images/attachments-gen-images-public-cozy-bedroom.png",
    category: "omg",
  },
  {
    id: "6",
    title: "Modern Infinity Pool Resort",
    location: "Nagarkot, Nepal",
    distance: 2100,
    dates: "Jul 6 - 11",
    rating: 4.89,
    reviews: 201,
    pricePerNight: 9500,
    totalPrice: 47500,
    image: "/images/attachments-gen-images-public-mountain-view-terrace.jpg",
    category: "pools",
  },
]

export default function ExplorePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [activeCategory, setActiveCategory] = useState<string>("omg")
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const filteredProperties = properties.filter((p) => p.category === activeCategory)

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Search Bar */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-white rounded-full border border-border shadow-sm p-4 flex items-center gap-4">
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">Where to?</h2>
              <p className="text-sm text-muted-foreground">Anywhere • Any week • Add guests</p>
            </div>
            <button className="p-2 rounded-full border border-border hover:bg-muted">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveCategory("omg")}
              className={`pb-3 font-semibold text-lg border-b-2 transition-all ${
                activeCategory === "omg"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                OMG!
              </div>
            </button>
            <button
              onClick={() => setActiveCategory("pools")}
              className={`pb-3 font-semibold text-lg border-b-2 transition-all ${
                activeCategory === "pools"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                Amazing pools
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-muted group">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-all"
                  >
                    <Heart
                      className={`w-5 h-5 ${favorites.has(property.id) ? "fill-orange-500 text-orange-500" : "text-foreground"}`}
                    />
                  </button>
                </div>

                {/* Property Details */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{property.title}</h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span>{property.distance} kilometers</span>
                    <span>•</span>
                    <span>{property.dates}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 fill-foreground" />
                    <span className="font-semibold">{property.rating}</span>
                    <span className="text-sm text-muted-foreground">({property.reviews})</span>
                  </div>

                  <div className="border-t border-border pt-3">
                    <p className="text-lg font-bold text-foreground mb-1">Rs.{property.pricePerNight} night</p>
                    <p className="text-sm text-muted-foreground">
                      Rs.{property.pricePerNight} night · Rs.{property.totalPrice} total
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <div className="flex justify-around py-3">
          <button onClick={() => onNavigate("explore")} className="flex flex-col items-center gap-1 text-orange-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
            <span className="text-xs">Explore</span>
          </button>
          <button
            onClick={() => onNavigate("wishlist")}
            className="flex flex-col items-center gap-1 text-muted-foreground"
          >
            <Heart className="w-6 h-6" />
            <span className="text-xs">Wishlist</span>
          </button>
          <button
            onClick={() => onNavigate("trips")}
            className="flex flex-col items-center gap-1 text-muted-foreground"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs">Trips</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  )
}
