"use client"

import { useState, useLayoutEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("jonas_kahnwald@gmail.com")
  const [password, setPassword] = useState("")

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  useLayoutEffect(() => {
    // Add a class to the body to indicate we're on a no-layout page
    document.body.classList.add("no-layout")
    return () => {
      document.body.classList.remove("no-layout")
    }
  }, [])

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Login Form */}
      <div className="flex w-full flex-col justify-between p-10 md:w-1/2">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image
                src="/iWrity-logo.png"
                alt="iWrity Logo"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-black">iWrity.com</span>
              <span className="text-xs uppercase tracking-wider text-gray-500">Amazon Book Reviews</span>
            </div>
          </Link>
        </div>

        <div className="my-auto w-full max-w-md">
          <h1 className="mb-2 text-3xl font-bold text-[#333333]">Sign in</h1>
          <p className="mb-8 text-[#666666]">Please login to continue to your account.</p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#333333]">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-gray-300 focus:border-[#f66000] focus:ring-[#f66000]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-[#333333]">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-gray-300 pr-10 focus:border-[#f66000] focus:ring-[#f66000]"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="keep-logged-in" />
              <label htmlFor="keep-logged-in" className="text-sm text-[#666666]">
                Keep me logged in
              </label>
            </div>

            <Button type="submit" className="h-12 w-full bg-[#f66000] text-white hover:bg-orange-600">
              Sign in
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[#666666]">
            Need an account?{" "}
            <Link href="/signup" className="font-medium text-[#f66000] hover:underline">
              Create one
            </Link>
          </p>
        </div>

        <div>{/* Footer space if needed */}</div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2">
        <div className="relative h-full w-full">
          <Image
            src="/placeholder.svg?height=1000&width=1000&query=business meeting with people using laptops"
            alt="People working together"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
