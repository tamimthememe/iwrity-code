"use client"

import { useState, useLayoutEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState("jonas_kahnwald@gmail.com")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [userType, setUserType] = useState("")

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
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
      {/* Left Side - Image */}
      <div className="hidden md:block md:w-1/2">
        <div className="relative h-full w-full">
          <div className="absolute left-8 top-8 z-10">
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
                <span className="text-xl font-bold text-white">iWrity.com</span>
                <span className="text-xs uppercase tracking-wider text-gray-300">Amazon Book Reviews</span>
              </div>
            </Link>
          </div>
          <Image
            src="/placeholder.svg?height=1000&width=1000&query=hands stacked together on table with business documents"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex w-full flex-col justify-center p-10 md:w-1/2">
        <div className="mx-auto w-full max-w-md">
          <h1 className="mb-2 text-3xl font-bold text-[#333333]">Sign Up</h1>
          <p className="mb-8 text-[#666666]">Register to get the best notary services online</p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="userType" className="text-sm font-medium text-[#333333]">
                Sign Up as
              </label>
              <Select value={userType} onValueChange={setUserType}>
                <SelectTrigger className="h-12 border-gray-300 focus:border-[#f66000] focus:ring-[#f66000]">
                  <SelectValue placeholder="Sign Up as" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reader">Reader</SelectItem>
                  <SelectItem value="author">Author</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[#333333]">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 border-gray-300 focus:border-[#f66000] focus:ring-[#f66000]"
              />
            </div>

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
              <label htmlFor="dateOfBirth" className="text-sm font-medium text-[#333333]">
                Date of Birth
              </label>
              <Input
                id="dateOfBirth"
                type="text"
                placeholder="Date of Birth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="h-12 border-gray-300 focus:border-[#f66000] focus:ring-[#f66000]"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text"
                }}
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
                  placeholder="Password"
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

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-[#333333]">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-12 border-gray-300 pr-10 focus:border-[#f66000] focus:ring-[#f66000]"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="h-12 w-full bg-[#f66000] text-white hover:bg-orange-600">
              Sign Up
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[#666666]">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-[#f66000] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
