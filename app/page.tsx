"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/layout/navbar"
import ExplorePage from "@/components/explore-page"
import StaysSearchPage from "@/components/stays-search-page"
import ExperiencesSearchPage from "@/components/experiences-search-page"
import MapPage from "@/components/map-page"
import LoginPage from "./auth/login/page"
import SignupPage from "./auth/signup/page"
import DashboardPage from "./(dashboard)/dashboard/page"
import { verify } from "@/lib/api/auth"

type PageType =
  | "explore"
  | "wishlist"
  | "trips"
  | "profile"
  | "stays"
  | "experiences"
  | "map"
  | "login"
  | "signup"
  | "dashboard"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>("login")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await verify()
        setCurrentPage("explore")
      } catch (error) {
        // Token is invalid or doesn't exist, stay on login
        setCurrentPage("login")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const handleLoginSuccess = () => {
    setCurrentPage("explore")
  }

  const handleRegisterSuccess = () => {
    setCurrentPage("login")
  }

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {currentPage !== "login" && currentPage !== "signup" && (
        <Navbar onNavigate={setCurrentPage} isLoggedIn={true} />
      )}
      <main>
        {currentPage === "login" && (
          <LoginPage onSuccess={handleLoginSuccess} onNavigateRegister={() => setCurrentPage("signup")} />
        )}
        {currentPage === "signup" && (
          <SignupPage onSuccess={handleRegisterSuccess} onNavigateLogin={() => setCurrentPage("login")} />
        )}
        {currentPage === "explore" && (
          <ExplorePage onNavigate={(p: string) => setCurrentPage(p as PageType)} />
        )}
        {currentPage === "stays" && (
          <StaysSearchPage onNavigate={(p: string) => setCurrentPage(p as PageType)} />
        )}
        {currentPage === "experiences" && (
          <ExperiencesSearchPage onNavigate={(p: string) => setCurrentPage(p as PageType)} />
        )}
        {currentPage === "map" && <MapPage onNavigate={(p: string) => setCurrentPage(p as PageType)} />}
        {currentPage === "dashboard" && <DashboardPage />}
      </main>
    </div>
  )
}
