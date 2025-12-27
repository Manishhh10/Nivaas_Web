"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { handleLogout } from "@/lib/actions/auth-action"

interface NavbarProps {
  onNavigate?: (page: any) => void
  isLoggedIn?: boolean
}

export function Navbar({ onNavigate, isLoggedIn: initialIsLoggedIn = false }: NavbarProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn)

  const handleLogoutClick = async () => {
    try {
      await handleLogout()
      window.location.href = "/auth/login"
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <button onClick={() => onNavigate?.("explore")} className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Nivaas"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </button>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
            <Link href="/" className="hover:text-black transition-colors">
              Stays
            </Link>
            <Link href="/" className="hover:text-black transition-colors">
              Experiences
            </Link>
            <Link href="/" className="hover:text-black transition-colors">
              Online Experiences
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link href="/auth/login" className="text-sm font-medium text-zinc-600 hover:text-black">
                Log in
              </Link>
              <Link
                href="/auth/signup"
                className="rounded-full bg-[#FF5A1F] px-5 py-2 text-sm font-medium text-white hover:bg-[#e44e1a] transition-colors"
              >
                Sign up
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="hidden sm:block text-sm font-medium text-zinc-600">Nanda Lal</span>
            </div>
          )}

          {/* Dashboard Section for Profile Dropdown */}
          <div className="relative group ml-2">
            <button className="flex items-center gap-2 rounded-full border border-zinc-200 p-1 pl-3 hover:shadow-md transition-shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <div className="size-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </button>

            <div className="absolute right-0 mt-2 w-56 scale-95 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 origin-top-right rounded-xl border border-zinc-100 bg-white p-2 shadow-xl transition-all duration-200">
              <div className="px-3 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">My Account</div>
              <button
                onClick={() => onNavigate?.("dashboard")}
                className="w-full text-left block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 font-medium"
              >
                Dashboard
              </button>
              <Link href="/" className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50">
                Profile
              </Link>
              <Link href="/" className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50">
                Messages
              </Link>
              <div className="my-1 border-t border-zinc-100" />
              <Link
                href="/"
                className="block rounded-lg px-3 py-2 text-sm text-[#FF5A1F] hover:bg-orange-50 font-medium"
              >
                Host your home
              </Link>
              <button
                onClick={handleLogoutClick}
                className="w-full text-left block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 font-medium"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
