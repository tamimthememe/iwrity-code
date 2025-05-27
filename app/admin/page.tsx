"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Bell,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  CreditCard,
  Users,
  Settings,
  LogOut,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const users = [
    {
      id: 1,
      name: "Archie Cantones",
      email: "archie.cantones@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40&query=man profile 1",
      reply: "Sent",
      date: "11/06/2023 10:53",
      plan: "Monthly",
      planColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      name: "Holmes Cherryman",
      email: "golms.cham@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40&query=man profile 2",
      reply: "New",
      date: "11/06/2023 10:53",
      plan: "Free",
      planColor: "bg-gray-100 text-gray-800",
    },
    {
      id: 3,
      name: "Melanie Hanvey",
      email: "jane.mary@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40&query=woman profile 1",
      reply: "Sent",
      date: "11/06/2023 10:53",
      plan: "Monthly",
      planColor: "bg-green-100 text-green-800",
    },
    {
      id: 4,
      name: "Kenneth Hune",
      email: "kneth.une@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40&query=man profile 3",
      reply: "Returning",
      date: "11/06/2023 10:53",
      plan: "Yearly",
      planColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 5,
      name: "Valentine Maton",
      email: "valentine.aton@gmail.com",
      avatar: "/placeholder.svg?height=40&width=40&query=woman profile 2",
      reply: "Sent",
      date: "11/06/2023 10:53",
      plan: "Monthly",
      planColor: "bg-green-100 text-green-800",
    },
  ]

  const chartData = [
    { month: "JAN", value: 25 },
    { month: "FEB", value: 15 },
    { month: "MAR", value: 30 },
    { month: "APR", value: 35 },
    { month: "MAY", value: 20 },
    { month: "JUN", value: 28 },
    { month: "JUL", value: 45 },
    { month: "AUG", value: 25 },
    { month: "SEP", value: 50 },
    { month: "OCT", value: 30 },
    { month: "NOV", value: 40 },
    { month: "DEC", value: 35 },
  ]

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
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
              href="/admin"
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900"
              onClick={() => setSidebarOpen(false)}
            >
              <LayoutDashboard className="h-5 w-5 text-orange-500" />
              Dashboard
            </Link>
            <Link
              href="/admin/subscriptions"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <CreditCard className="h-5 w-5" />
              Subscriptions
            </Link>
            <Link
              href="/admin/moderation"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              <Users className="h-5 w-5" />
              Moderation Queue
            </Link>
            <Link
              href="/admin/settings"
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">D</span>
                </div>
                <span className="text-sm font-medium text-gray-900">DASHBOARD</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white text-xs">1</span>
                </div>
              </div>
              <div className="h-8 w-8 rounded-full bg-gray-300">
                <Image
                  src="/placeholder.svg?height=32&width=32&query=admin avatar"
                  alt="Admin"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Finance Chart */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Finance</h2>
                  <MoreHorizontal className="h-5 w-5 text-gray-400" />
                </div>

                {/* Chart */}
                <div className="relative h-64 mb-6 overflow-x-auto">
                  <div className="flex items-end justify-start gap-4 px-4 ml-8 min-w-max h-full">
                    {chartData.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="w-8 bg-orange-500 rounded-t" style={{ height: `${item.value * 2}px` }}></div>
                        <span className="text-xs text-gray-500 mt-2">{item.month}</span>
                      </div>
                    ))}
                  </div>
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                    <span>70%</span>
                    <span>60%</span>
                    <span>50%</span>
                    <span>40%</span>
                    <span>30%</span>
                    <span>20%</span>
                    <span>10%</span>
                    <span>0%</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Earned</p>
                    <p className="text-lg md:text-2xl font-bold text-gray-900">$5,486</p>
                    <div className="h-1 bg-orange-500 rounded mt-2"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Projected</p>
                    <p className="text-lg md:text-2xl font-bold text-gray-900">$9,275</p>
                    <div className="h-1 bg-green-500 rounded mt-2"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rejected</p>
                    <p className="text-lg md:text-2xl font-bold text-gray-900">$3,868</p>
                    <div className="h-1 bg-red-500 rounded mt-2"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Revenue</p>
                    <p className="text-lg md:text-2xl font-bold text-gray-900">$50,668</p>
                    <div className="h-1 bg-gray-800 rounded mt-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Widgets */}
            <div className="space-y-6">
              {/* Books Added */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center">
                      <span className="text-sm">📚</span>
                    </div>
                  </div>
                  <MoreHorizontal className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">48/86</div>
                  <div className="text-sm text-gray-500">Books Added</div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Books Added</span>
                    <span>52 Completed (63%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "63%" }}></div>
                  </div>
                </div>
              </div>

              {/* Subscriptions */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center">
                      <span className="text-sm">💰</span>
                    </div>
                  </div>
                  <MoreHorizontal className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">$450</div>
                  <div className="text-sm text-gray-500">in Subscriptions today</div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span></span>
                    <span>$5,569 (63%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: "63%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Management Table */}
          <div className="mt-8 bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">User management</h2>
                <MoreHorizontal className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Users
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Reply
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Image
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-blue-600">{user.reply}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge className={user.planColor}>{user.plan}</Badge>
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
                  <span className="text-gray-500">...</span>
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
        </div>
      </div>
    </div>
  )
}
