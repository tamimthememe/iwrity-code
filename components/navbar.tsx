"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full border-b border-gray-100 bg-white z-50">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
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
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className={
              pathname === "/" ? "text-orange-500 hover:text-orange-600" : "text-gray-700 hover:text-orange-500"
            }
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={
              pathname === "/about-us" ? "text-orange-500 hover:text-orange-600" : "text-gray-700 hover:text-orange-500"
            }
          >
            About
          </Link>
          <Link
            href="/library"
            className={
              pathname === "/library" ? "text-orange-500 hover:text-orange-600" : "text-gray-700 hover:text-orange-500"
            }
          >
            Library
          </Link>
          <Link
            href="/help"
            className={
              pathname === "/help" ? "text-orange-500 hover:text-orange-600" : "text-gray-700 hover:text-orange-500"
            }
          >
            Help
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden bg-orange-500 px-6 hover:bg-orange-600 md:inline-flex">
            <Link href="/login">Login to iWrity Now</Link>
          </Button>

          <button className="block md:hidden" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-20 z-50 border-b border-gray-200 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col p-4">
            <Link
              href="/"
              className={`border-b border-gray-100 py-3 ${pathname === "/" ? "text-orange-500 hover:text-orange-600" : "text-gray-700 hover:text-orange-500"}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`border-b border-gray-100 py-3 ${pathname === "/about-us" ? "text-orange-500 hover:text-orange-600" : "text-gray-700 hover:text-orange-500"}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/library"
              className={`border-b border-gray-100 py-3 ${pathname === "/library" ? "text-orange-500 hover:text-orange-600" : "text-gray-700 hover:text-orange-500"}`}
              onClick={closeMobileMenu}
            >
              Library
            </Link>
            <Link
              href="/help"
              className={`border-b border-gray-100 py-3 ${pathname === "/help" ? "text-orange-500 hover:text-orange-600" : "text-gray-700 hover:text-orange-500"}`}
              onClick={closeMobileMenu}
            >
              Help
            </Link>
            <div className="mt-4">
              <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                <Link href="/login" onClick={closeMobileMenu}>
                  Login to iWrity Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
