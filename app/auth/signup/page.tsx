"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { register } from "@/lib/api/auth"

export default function RegisterPage({
  onSuccess,
  onNavigateLogin,
}: {
  onSuccess?: () => void
  onNavigateLogin?: () => void
}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const registerData = {
      name: `${firstName} ${lastName}`.trim(),
      email: formData.get('email') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      password: formData.get('password') as string,
      confirmPassword: formData.get('confirmPassword') as string,
    }

    try {
      const result = await register(registerData)
      if (result.message === 'User registered successfully') {
        if (onSuccess) {
          onSuccess()
        } else {
          router.push("/auth/login")
        }
      } else {
        setError(result.message || "Registration failed")
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-zinc-100">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="size-8 rounded-lg bg-[#FF5A1F] flex items-center justify-center text-white font-bold italic">
              N
            </div>
            <span className="text-xl font-bold text-[#FF5A1F]">Nivaas</span>
          </Link>
          <h1 className="text-2xl font-bold text-zinc-900">Create an account</h1>
          <p className="mt-2 text-zinc-500">Join Nivaas to start your adventure</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">First name</label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-[#FF5A1F] focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Last name</label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-[#FF5A1F] focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Email address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-[#FF5A1F] focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Phone number</label>
            <input
              type="tel"
              name="phoneNumber"
              required
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-[#FF5A1F] focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-[#FF5A1F] focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-[#FF5A1F] focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] transition-all"
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-[#FF5A1F] py-3 font-semibold text-white hover:bg-[#e44e1a] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <button
            onClick={() => (onNavigateLogin ? onNavigateLogin() : router.push("/auth/login"))}
            className="font-semibold text-[#FF5A1F] hover:underline"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}
