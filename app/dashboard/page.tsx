"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Bell,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Award,
  Star,
  LayoutDashboard,
  CreditCard,
  Settings,
  LogOut,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const uploadedBooks = [
    {
      id: 1,
      title: "Archie Cantones",
      bookId: "Book 912222",
      cover: "/placeholder.svg?height=60&width=40&query=book cover 1",
      points: 300,
      date: "11/06/2023 10:53",
      status: "Uploaded",
    },
    {
      id: 2,
      title: "Archie Cantones",
      bookId: "Book 912222",
      cover: "/placeholder.svg?height=60&width=40&query=book cover 2",
      points: 300,
      date: "11/06/2023 10:53",
      status: "Uploaded",
    },
    {
      id: 3,
      title: "Archie Cantones",
      bookId: "Book 912222",
      cover: "/placeholder.svg?height=60&width=40&query=book cover 3",
      points: 300,
      date: "11/06/2023 10:53",
      status: "Uploaded",
    },
    {
      id: 4,
      title: "Archie Cantones",
      bookId: "Book 912222",
      cover: "/placeholder.svg?height=60&width=40&query=book cover 4",
      points: 300,
      date: "11/06/2023 10:53",
      status: "Uploaded",
    },
    {
      id: 5,
      title: "Archie Cantones",
      bookId: "Book 912222",
      cover: "/placeholder.svg?height=60&width=40&query=book cover 5",
      points: 300,
      date: "11/06/2023 10:53",
      status: "Uploaded",
    },
  ]

  const upcomingEvents = [
    {
      date: "20",
      month: "DEC",
      title: "Book Launch",
      time: "11:30am - 12:30pm",
      participants: [
        "/placeholder.svg?height=32&width=32&query=avatar 1",
        "/placeholder.svg?height=32&width=32&query=avatar 2",
      ],
      color: "bg-green-100 text-green-600",
    },
    {
      date: "30",
      month: "DEC",
      title: "Award Points",
      time: "10:00am - 12:00pm",
      participants: [
        "/placeholder.svg?height=32&width=32&query=avatar 3",
        "/placeholder.svg?height=32&width=32&query=avatar 4",
      ],
      color: "bg-orange-100 text-orange-600",
    },
    {
      date: "17",
      month: "DEC",
      title: "Create a new Book",
      time: "9:00am - 9:00pm",
      participants: [
        "/placeholder.svg?height=32&width=32&query=avatar 5",
        "/placeholder.svg?height=32&width=32&query=avatar 6",
      ],
      color: "bg-blue-100 text-blue-600",
    },
    {
      date: "25",
      month: "DEC",
      title: "Approve Reviews",
      time: "03:30pm - 05:30pm",
      participants: [
        "/placeholder.svg?height=32&width=32&query=avatar 7",
        "/placeholder.svg?height=32&width=32&query=avatar 8",
      ],
      color: "bg-red-100 text-red-600",
    },
  ]

  const recentReviews = Array(7).fill({
    reviewer: "Anonymous Review",
    content: "The work was amazing but didn't expect the delay...",
    rating: 8.9,
  })

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - Hidden on mobile, visible on desktop */}
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
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900"
              onClick={() => setSidebarOpen(false)}
            >
              <LayoutDashboard className="h-5 w-5 text-orange-500" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/reviews"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <Star className="h-5 w-5" />
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
      <div className="flex-1 flex flex-col min-w-0 lg:ml-0">
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Upload Status Table */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Upload Status</h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Book
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Points
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {uploadedBooks.map((book) => (
                          <tr key={book.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <Image
                                  src={book.cover || "/placeholder.svg"}
                                  alt={book.title}
                                  width={40}
                                  height={60}
                                  className="rounded"
                                />
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{book.title}</div>
                                  <div className="text-sm text-gray-500">{book.bookId}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.points}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Badge className="bg-green-100 text-green-800">{book.status}</Badge>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <div className="flex gap-2">
                        <Button
                          variant={currentPage === 1 ? "default" : "outline"}
                          size="sm"
                          className={currentPage === 1 ? "bg-orange-500" : ""}
                        >
                          1
                        </Button>
                        <Button variant="outline" size="sm">
                          2
                        </Button>
                        <Button variant="outline" size="sm">
                          8
                        </Button>
                        <Button variant="outline" size="sm">
                          9
                        </Button>
                      </div>
                      <Button variant="outline" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Upcoming Schedule and View Books */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Upcoming Schedule */}
                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Upcoming Schedule</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div
                            className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg ${event.color}`}
                          >
                            <span className="text-lg font-bold">{event.date}</span>
                            <span className="text-xs">{event.month}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{event.title}</h4>
                            <p className="text-sm text-gray-500">{event.time}</p>
                          </div>
                          <div className="flex -space-x-2">
                            {event.participants.map((avatar, i) => (
                              <Image
                                key={i}
                                src={avatar || "/placeholder.svg"}
                                alt="Participant"
                                width={32}
                                height={32}
                                className="rounded-full border-2 border-white"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-6 border-t border-gray-200">
                      <Button variant="outline" className="w-full">
                        UPCOMING SCHEDULE
                      </Button>
                    </div>
                  </div>

                  {/* View Your Books */}
                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">View Your Books</h3>
                    </div>
                    <div className="p-6 space-y-4 h-64 overflow-y-auto">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=200&width=300&query=book cover with person"
                          alt="Book"
                          width={300}
                          height={200}
                          className="rounded-lg w-full"
                        />
                        <Badge className="absolute top-2 left-2 bg-orange-500">Best</Badge>
                        <div className="absolute bottom-2 left-2 text-white">
                          <h4 className="font-medium">How to train your dragon?</h4>
                          <p className="text-sm">From $158</p>
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=200&width=300&query=book cover with person 2"
                          alt="Book"
                          width={300}
                          height={200}
                          className="rounded-lg w-full"
                        />
                        <Badge className="absolute top-2 left-2 bg-blue-500">New</Badge>
                      </div>
                    </div>
                    <div className="p-6 border-t border-gray-200">
                      <Button variant="outline" className="w-full">
                        VIEW MORE
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Monthly Subscription */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 800 200" className="w-full h-full">
                      <path
                        d="M0,100 Q100,50 200,100 T400,100 T600,100 T800,100 L800,200 L0,200 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">Monthly</h3>
                      <span className="text-sm bg-white/20 px-2 py-1 rounded">30%</span>
                    </div>
                    <p className="text-sm mb-6">Subscription</p>
                    <Button className="w-full bg-white text-orange-600 hover:bg-gray-100">MANAGE SUBSCRIPTION</Button>
                  </div>
                </div>

                {/* Recent Reviews */}
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Reviews</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {recentReviews.map((review, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between border border-dashed border-gray-300 rounded-lg p-4"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{review.reviewer}</h4>
                          <p className="text-sm text-gray-500">{review.content}</p>
                        </div>
                        <div className="flex items-center gap-1 ml-4">
                          <Star className="h-4 w-4 fill-green-500 text-green-500" />
                          <span className="font-medium text-green-600">{review.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 border-t border-gray-200">
                    <Button variant="outline" className="w-full">
                      MANAGE REVIEWS
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
