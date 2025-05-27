"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"

// Sample book data - in a real app, this would come from an API
const bookData = {
  1: {
    title: "Contract Law Essentials",
    description:
      "Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.",
    image: "/placeholder.svg?height=400&width=300&query=judge gavel on wooden desk",
    price: "Free",
    genres: ["Thriller", "Fiction", "Thriller", "Fiction", "Thriller", "Fiction"],
    synopsis: `Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.

Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal lessons.

Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal lessons.`,
  },
  // Add more books as needed
}

export default function BookDetailPage() {
  const params = useParams()
  const bookId = params.id as string
  const [activeTab, setActiveTab] = useState("synopsis")

  // Get book data or use default
  const book = bookData[bookId as keyof typeof bookData] || bookData[1]

  return (
    <main className="min-h-screen bg-[#f8f8f8] pt-20">
      {/* Back Navigation */}
      <div className="bg-white py-4">
        <div className="container px-4 md:px-6">
          <Link href="/library" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Link>
        </div>
      </div>

      <div className="container px-4 py-8 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Book Title and Description */}
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-bold text-[#333333] md:text-4xl">{book.title}</h1>
              <p className="text-[#666666]">{book.description}</p>
            </div>

            {/* Tabs */}
            <div className="mb-6">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("synopsis")}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === "synopsis"
                      ? "border-b-2 border-[#f66000] text-[#f66000]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Synopsis
                </button>
                <button
                  onClick={() => setActiveTab("review")}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === "review"
                      ? "border-b-2 border-[#f66000] text-[#f66000]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Submit Review Link
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === "synopsis" && (
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-[#333333]">Synopsis</h2>
                  <div className="space-y-4 text-[#444444]">
                    {book.synopsis.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Genre */}
                  <div className="mt-8">
                    <h3 className="mb-4 text-xl font-bold text-[#333333]">Genre</h3>
                    <div className="flex flex-wrap gap-2">
                      {book.genres.map((genre, index) => (
                        <span key={index} className="rounded-md bg-[#f66000] px-3 py-1 text-sm font-medium text-white">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "review" && (
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-[#333333]">Submit your Amazon URL</h2>

                  <div className="mb-6">
                    <p className="mb-2 text-[#444444]">One more step need to complete your Review</p>
                    <p className="text-[#444444]">
                      You have <span className="font-medium text-[#f66000]">5 Days Left</span> to Submit Your Amazon
                      Review URL
                    </p>
                  </div>

                  <div className="mb-6 space-y-4 text-[#444444]">
                    <p>
                      Your Review has been submitted by us but you have one more step to go. Once Amazon approves your
                      review, you need to submit your review link here to earn you points.
                    </p>
                    <p>
                      If the URL is not provided within 10 days of adding this book, your review cannot be validated and
                      the points you earned will be deducted from your account.
                    </p>
                  </div>

                  <div className="mb-8">
                    <a href="#" className="text-[#f66000] hover:underline">
                      View Instructions on how to find your Amazon Review URL
                    </a>
                  </div>

                  {/* Review URL Form */}
                  <div className="rounded-lg bg-orange-50 p-6">
                    <div className="mb-4">
                      <label htmlFor="amazonUrl" className="mb-2 block text-sm font-bold text-[#333333]">
                        Amazon Review URL
                      </label>
                      <input
                        type="url"
                        id="amazonUrl"
                        placeholder="Amazon Review URL"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#f66000] focus:outline-none focus:ring-1 focus:ring-[#f66000]"
                      />
                    </div>
                    <p className="mb-4 text-sm text-[#666666]">Please provide direct link to your Amazon Review</p>
                    <button className="rounded-md bg-[#f66000] px-6 py-2 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#f66000] focus:ring-offset-2">
                      Submit URL
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-lg bg-white p-6 shadow-sm">
              {/* Book Cover */}
              <div className="mb-6 flex justify-center">
                <Image
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* Price */}
              <div className="mb-2 text-center">
                <span className="text-3xl font-bold text-[#333333]">{book.price}</span>
              </div>
              <p className="mb-6 text-center text-[#666666]">{book.title}</p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-[#f66000] hover:bg-orange-600">Read Now</Button>
                <Button
                  variant="outline"
                  className="w-full border-[#f66000] text-[#f66000] hover:bg-[#f66000] hover:text-white"
                >
                  Verify Kindle
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
