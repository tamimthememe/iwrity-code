"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Search, Star, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface Book {
  id: number
  title: string
  description: string
  price: number
  rating: number
  image: string
  free?: boolean
  category?: string
  language?: string
  publishType?: string
  country?: string
}

interface BookCardProps {
  id: number
  title: string
  description: string
  price: number
  rating: number
  image: string
  free?: boolean
}

function BookCard({ id, title, description, price, rating, image, free = false }: BookCardProps & { id: number }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        {free && <div className="absolute right-2 top-2 rounded-md bg-white px-2 py-1 text-xs font-medium">Free</div>}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-lg font-bold text-[#333333]">{title}</h3>
        <p className="mb-4 flex-1 text-sm text-[#666666]">{description}</p>
        <div className="mb-3 flex items-center space-x-2">
          <div className="inline-flex items-center rounded-md border border-[#f66000] px-3 py-1.5">
            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <div className="inline-flex items-center rounded-md border border-[#f66000] px-3 py-1.5">
            <span className="text-xs text-gray-500">On Demand</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500">From</span>
            <span className="ml-1 text-lg font-bold text-[#f66000]">${price}</span>
          </div>
          <Button asChild className="bg-[#f66000] hover:bg-orange-600">
            <Link href={`/book/${id}`}>Read Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function FilterDropdown({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="mb-6">
      <h3 className="mb-2 font-medium text-[#333333]">{label}</h3>
      <div className="relative">
        <div className="flex cursor-pointer items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-3">
          <span className="text-gray-500">{placeholder}</span>
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  )
}

export default function LibraryPage() {
  // Sample book data with different titles for search functionality
  const allBooks: Book[] = [
    {
      id: 1,
      title: "Contract Law Essentials",
      description:
        "Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.",
      price: 158,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=500&query=judge gavel on wooden desk",
      free: true,
      category: "Law",
      language: "English",
      publishType: "E-Book",
      country: "United States",
    },
    {
      id: 2,
      title: "Criminal Law Fundamentals",
      description:
        "Explore the core principles of criminal law with our comprehensive guide. Learn about different types of crimes, defenses, and legal procedures.",
      price: 145,
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=500&query=criminal law book with handcuffs",
      free: false,
      category: "Law",
      language: "English",
      publishType: "E-Book",
      country: "United Kingdom",
    },
    {
      id: 3,
      title: "Business Law for Entrepreneurs",
      description:
        "Essential legal knowledge for business owners and entrepreneurs. Covers entity formation, contracts, intellectual property, and employment law.",
      price: 179,
      rating: 4.7,
      image: "/placeholder.svg?height=300&width=500&query=business meeting with legal documents",
      free: false,
      category: "Business",
      language: "English",
      publishType: "Audiobook",
      country: "Canada",
    },
    {
      id: 4,
      title: "Family Law Guide",
      description:
        "A comprehensive overview of family law including divorce, child custody, adoption, and domestic relations. Perfect for legal students and practitioners.",
      price: 135,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=500&query=family silhouette with legal scales",
      free: true,
      category: "Law",
      language: "Spanish",
      publishType: "Paperback",
      country: "Spain",
    },
    {
      id: 5,
      title: "Intellectual Property Rights",
      description:
        "Understand patents, trademarks, copyrights, and trade secrets. Learn how to protect your creative works and innovations in the digital age.",
      price: 165,
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=500&query=lightbulb with copyright and patent symbols",
      free: false,
      category: "Law",
      language: "French",
      publishType: "E-Book",
      country: "France",
    },
    {
      id: 6,
      title: "Constitutional Law Principles",
      description:
        "Explore the fundamental principles of constitutional law, government structure, and civil liberties. Includes landmark case studies and analyses.",
      price: 158,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=500&query=constitution document with american flag",
      free: false,
      category: "Law",
      language: "English",
      publishType: "Hardcover",
      country: "United States",
    },
    // Fill in the rest with Contract Law Essentials to match the design
    ...Array(6)
      .fill({})
      .map((_, index) => ({
        id: 7 + index,
        title: "Contract Law Essentials",
        description:
          "Master the foundational principles of contract law with our expertly designed course. This course breaks down complex legal concepts into clear, practical lessons.",
        price: 158,
        rating: 4.9,
        image: "/placeholder.svg?height=300&width=500&query=judge gavel on wooden desk",
        free: false,
        category: "Law",
        language: "English",
        publishType: "E-Book",
        country: "United States",
      })),
  ]

  const [searchQuery, setSearchQuery] = useState("")
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(allBooks)
  const [isSearching, setIsSearching] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Handle search button click
  const handleSearch = () => {
    setIsSearching(true)
    filterBooks()
  }

  // Handle Enter key press in search input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSearch()
    }
  }

  // Toggle filter panel
  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  // Filter books based on search query
  const filterBooks = () => {
    if (!searchQuery.trim()) {
      setFilteredBooks(allBooks)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = allBooks.filter(
      (book) => book.title.toLowerCase().includes(query) || book.description.toLowerCase().includes(query),
    )
    setFilteredBooks(filtered)
  }

  // Update filtered books when search query changes
  useEffect(() => {
    if (isSearching) {
      filterBooks()
    }
  }, [searchQuery, isSearching])

  return (
    <main className="min-h-screen bg-[#f8f8f8] pb-16 pt-20">
      {/* Hero Section */}
      <section className="w-full bg-white py-12">
        <div className="container px-4 md:px-6">
          <h1 className="mb-2 text-4xl font-bold text-[#333333]">Reader's Library</h1>
          <p className="text-[#666666]">
            Get access to the best reviewed books and also view the reviews and ratings of your favorite books.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mt-8 px-4 md:px-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            className="flex h-12 items-center gap-2 bg-[#f66000] hover:bg-orange-600 sm:w-auto"
            onClick={toggleFilters}
          >
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search any book here..."
              className="h-12 w-full rounded-md border-gray-300 bg-white pr-10 focus:border-[#f66000] focus:ring-[#f66000]"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            <Button
              className="absolute right-0 top-0 h-full rounded-l-none bg-[#f66000] hover:bg-orange-600"
              onClick={handleSearch}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content with Filter Panel */}
      <section className="container mt-8 px-4 md:px-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filter Panel */}
          {showFilters && (
            <div className="lg:sticky lg:top-8 h-fit w-full bg-[#f8f8f8] lg:w-1/4">
              <h2 className="mb-6 text-2xl font-bold text-[#333333]">Filters</h2>
              <FilterDropdown label="Book Category" placeholder="Select Category" />
              <FilterDropdown label="Language" placeholder="Select Language" />
              <FilterDropdown label="Publish Type" placeholder="Select Publish Type" />
              <FilterDropdown label="Country" placeholder="Select Country" />
            </div>
          )}

          {/* Books Grid */}
          <div className={`w-full ${showFilters ? "lg:w-3/4" : "w-full"}`}>
            {/* Search Results Info */}
            {isSearching && searchQuery.trim() && (
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  {filteredBooks.length === 0
                    ? `No results found for "${searchQuery}"`
                    : `Showing ${filteredBooks.length} results for "${searchQuery}"`}
                </p>
              </div>
            )}

            {filteredBooks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="mb-2 text-lg font-medium text-gray-700">No books found</p>
                <p className="text-gray-500">Try adjusting your search or browse all books</p>
                <Button
                  className="mt-4 bg-[#f66000] hover:bg-orange-600"
                  onClick={() => {
                    setSearchQuery("")
                    setFilteredBooks(allBooks)
                    setIsSearching(false)
                  }}
                >
                  View All Books
                </Button>
              </div>
            ) : (
              <div
                className={`grid gap-6 sm:grid-cols-1 md:grid-cols-2 ${showFilters ? "lg:grid-cols-2 xl:grid-cols-2" : "lg:grid-cols-3 xl:grid-cols-3"}`}
              >
                {filteredBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    description={book.description}
                    price={book.price}
                    rating={book.rating}
                    image={book.image}
                    free={book.free}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredBooks.length > 0 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" className="h-8 w-8 p-0">
                    &lt;
                  </Button>
                  <Button variant="outline" className="h-8 w-8 bg-[#f66000] p-0 text-white">
                    1
                  </Button>
                  <Button variant="outline" className="h-8 w-8 p-0">
                    2
                  </Button>
                  <Button variant="outline" className="h-8 w-8 p-0">
                    3
                  </Button>
                  <Button variant="outline" className="h-8 w-8 p-0">
                    4
                  </Button>
                  <Button variant="outline" className="h-8 w-8 p-0">
                    5
                  </Button>
                  <Button variant="outline" className="h-8 w-8 p-0">
                    &gt;
                  </Button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
