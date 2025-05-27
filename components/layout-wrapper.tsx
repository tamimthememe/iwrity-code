"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Define routes that should not have navbar/footer
  const noLayoutRoutes = ["/login", "/signup", "/forgot-password", "/dashboard"]
  const shouldHideLayout =
    noLayoutRoutes.includes(pathname) || pathname.startsWith("/dashboard") || pathname.startsWith("/admin")

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  )
}
