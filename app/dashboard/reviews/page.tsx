"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Bell,
  LayoutDashboard,
  Star,
  CreditCard,
  Award,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Plus,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import StartReviewModal from "@/components/start-review-modal"

export default function ReviewsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const books = Array(6)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      title: "Contract Law Essentials",
      cover: "/placeholder.svg?height=300&width=200&query=dust jacket book mock up with colorful geometric design",
      rating: 4.9,
      status: "On Demands",
    }))

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - Fixed, no scroll */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-sm transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src="/iWrity-logo.png"
                alt="iWrity Logo"
                width={32}
                height={32}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-black">iWrity.com</span>
              <span className="text-xs uppercase tracking-wider text-gray-500">Amazon Book Reviews</span>
            </div>
          </Link>
        </div>

        <nav className="px-4">
          <div className="mb-4">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Navigation</p>
          </div>
          <div className="space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/reviews"
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900"
              onClick={() => setSidebarOpen(false)}
            >
              <Star className="h-5 w-5 text-orange-500" />
              Reviews
            </Link>
            <Link
              href="/dashboard/subscription"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <CreditCard className="h-5 w-5" />
              Subscription
            </Link>
            <Link
              href="/dashboard/points"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <Award className="h-5 w-5" />
              Points
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <LogOut className="h-5 w-5" />
              Log Out
            </Link>
          </div>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content - Scrollable */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header - Fixed */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-4 ml-auto">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></div>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/placeholder.svg?height=20&width=30&query=US flag" alt="US" width={20} height={15} />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Your Reviews</h1>
              <Button className="bg-[#f66000] hover:bg-orange-600 text-white" onClick={() => setIsModalOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Start Review
              </Button>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {books.map((book, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 px-6 py-4 shadow-sm">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{book.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 border border-gray-300 rounded px-2 py-1">
                        <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                        <span className="text-sm font-medium text-gray-900">{book.rating}</span>
                      </div>
                      <div className="border border-gray-300 rounded px-2 py-1">
                        <span className="text-sm text-gray-500">{book.status}</span>
                      </div>
                    </div>
                    <Button asChild className="bg-[#f66000] hover:bg-orange-600 text-white">
                      <Link href={`/book/${book.id}`}>View Book in Library</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant={currentPage === 1 ? "default" : "outline"}
                size="sm"
                className={`h-8 w-8 p-0 ${currentPage === 1 ? "bg-orange-500 hover:bg-orange-600" : ""}`}
              >
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                2
              </Button>
              <span className="text-gray-500">...</span>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                8
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                9
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <StartReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
