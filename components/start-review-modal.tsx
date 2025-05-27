"use client"

import type React from "react"

import { useState, useRef } from "react"
import { X, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface StartReviewModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function StartReviewModal({ isOpen, onClose }: StartReviewModalProps) {
  const [selectedDays, setSelectedDays] = useState(4)
  const [reviewType, setReviewType] = useState("verified-purchase")
  const [bookName, setBookName] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [selectedGenres, setSelectedGenres] = useState<string[]>(["Fiction"])
  const [countryOption, setCountryOption] = useState("select-countries")
  const [selectedCountries, setSelectedCountries] = useState<string[]>(["australia", "france", "mexico", "sweden"])

  const countries = [
    { id: "australia", label: "Australia (amazon.com.au)" },
    { id: "france", label: "France (amazon.fr)" },
    { id: "mexico", label: "Mexico (amazon.com.mx)" },
    { id: "sweden", label: "Sweden (amazon.se)" },
    { id: "australia2", label: "Australia (amazon.com.au)" },
    { id: "australia3", label: "Australia (amazon.com.au)" },
    { id: "france2", label: "France (amazon.fr)" },
    { id: "france3", label: "France (amazon.fr)" },
    { id: "france4", label: "France (amazon.fr)" },
    { id: "france5", label: "France (amazon.fr)" },
  ]

  const genres = ["Fiction", "Non-Fiction", "Mystery", "Romance", "Sci-Fi", "Fantasy", "Biography"]

  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === "application/pdf") {
      setUploadedFile(file)
    } else {
      alert("Please select a PDF file")
    }
  }

  const triggerFileUpload = () => {
    fileInputRef.current?.click()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-lg shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Start a New Review for Greek Mythology Book for Adults: Epic Heroes and Timeless Tales
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6 space-y-6">
          {/* Turnaround Time */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-2">Turnaround Time</h3>
            <p className="text-sm text-gray-600 mb-4">
              Choose the number of days that the Bounty Book will take to be read completely and 1m in their review.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              The Recommended days based on your page length:{" "}
              <span className="text-orange-500 font-medium">{selectedDays} Days</span>
            </p>

            {/* Days Selector */}
            <div className="flex items-center justify-center gap-4 mb-6">
              {[1, 2, 3, 4].map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDays(day)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-medium ${
                    selectedDays === day
                      ? "bg-orange-500 border-orange-500 text-white"
                      : "border-orange-300 text-orange-500 hover:border-orange-400"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Choose Review Type */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-2">Choose Review Type</h3>
            <p className="text-sm text-gray-600 mb-4">
              Choose One of the Following review types that you would like to start
            </p>

            <div className="space-y-4">
              {/* Original */}
              <div
                className={`border rounded-lg p-4 cursor-pointer ${
                  reviewType === "original" ? "border-orange-300 bg-orange-50" : "border-gray-200"
                }`}
                onClick={() => setReviewType("original")}
              >
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 bg-orange-500 rounded-sm mt-1"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-orange-600 mb-2">Original</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Allow Readers to download your book for free so they can leave a review on Amazon. This type of
                      system will not post on Amazon as a "Verified Review"
                    </p>
                    <div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Button
                        variant="outline"
                        className="text-orange-500 border-orange-500"
                        onClick={triggerFileUpload}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        {uploadedFile ? uploadedFile.name : "Upload Book"}
                      </Button>
                      {uploadedFile && (
                        <p className="text-sm text-green-600 mt-2">✓ {uploadedFile.name} uploaded successfully</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Kindle Verified */}
              <div
                className={`border rounded-lg p-4 cursor-pointer ${
                  reviewType === "kindle-verified" ? "border-orange-300 bg-orange-50" : "border-gray-200"
                }`}
                onClick={() => setReviewType("kindle-verified")}
              >
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 bg-orange-500 rounded-sm mt-1"></div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-2">Kindle Verified</h4>
                    <p className="text-sm text-gray-600">
                      Readers with Kindle Verified subscription can review your book. Readers will read your book
                      through Kindle Unlimited. This type of Review system will not post on Amazon as "Verified Review".
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Purchase */}
              <div
                className={`border rounded-lg p-4 cursor-pointer ${
                  reviewType === "verified-purchase" ? "border-orange-500 bg-orange-500 text-white" : "border-gray-200"
                }`}
                onClick={() => setReviewType("verified-purchase")}
              >
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 bg-white rounded-sm mt-1"></div>
                  <div>
                    <h4 className="font-medium mb-2">Verified Purchase</h4>
                    <p className="text-sm opacity-90">
                      Readers will agree to purchase your book on Amazon.com and can review your book.{" "}
                      <strong>This type of Bounty will post on Amazon as a "Verified Review".</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="bookName" className="text-sm font-medium text-gray-700">
                Enter Book Name
              </Label>
              <Input
                id="bookName"
                placeholder="Enter Book Name"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="author" className="text-sm font-medium text-gray-700">
                Author
              </Label>
              <Input
                id="author"
                placeholder="Enter Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 min-h-[120px]"
              />
            </div>
          </div>

          {/* Genre */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-3 block">Genre</Label>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => {
                    if (selectedGenres.includes(genre)) {
                      setSelectedGenres(selectedGenres.filter((g) => g !== genre))
                    } else {
                      setSelectedGenres([...selectedGenres, genre])
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedGenres.includes(genre)
                      ? "bg-orange-500 text-white"
                      : "bg-orange-100 text-orange-600 hover:bg-orange-200"
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Countries */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-3 block">
              Which Countries do you want to accept reviews for this book?
            </Label>

            <div className="mb-4 space-y-3">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <input
                    type="radio"
                    id="all-countries"
                    name="countryOption"
                    value="all-countries"
                    checked={countryOption === "all-countries"}
                    onChange={(e) => setCountryOption(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`h-4 w-4 rounded-full border-2 cursor-pointer ${
                      countryOption === "all-countries" ? "border-orange-500 bg-orange-500" : "border-gray-300 bg-white"
                    }`}
                    onClick={() => setCountryOption("all-countries")}
                  >
                    {countryOption === "all-countries" && (
                      <div className="h-full w-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                </div>
                <Label
                  htmlFor="all-countries"
                  className="text-sm cursor-pointer"
                  onClick={() => setCountryOption("all-countries")}
                >
                  All Countries
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <input
                    type="radio"
                    id="select-countries"
                    name="countryOption"
                    value="select-countries"
                    checked={countryOption === "select-countries"}
                    onChange={(e) => setCountryOption(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`h-4 w-4 rounded-full border-2 cursor-pointer ${
                      countryOption === "select-countries"
                        ? "border-orange-500 bg-orange-500"
                        : "border-gray-300 bg-white"
                    }`}
                    onClick={() => setCountryOption("select-countries")}
                  >
                    {countryOption === "select-countries" && (
                      <div className="h-full w-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                </div>
                <Label
                  htmlFor="select-countries"
                  className="text-sm cursor-pointer"
                  onClick={() => setCountryOption("select-countries")}
                >
                  Select Countries
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <input
                    type="radio"
                    id="english-speaking"
                    name="countryOption"
                    value="english-speaking"
                    checked={countryOption === "english-speaking"}
                    onChange={(e) => setCountryOption(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`h-4 w-4 rounded-full border-2 cursor-pointer ${
                      countryOption === "english-speaking"
                        ? "border-orange-500 bg-orange-500"
                        : "border-gray-300 bg-white"
                    }`}
                    onClick={() => setCountryOption("english-speaking")}
                  >
                    {countryOption === "english-speaking" && (
                      <div className="h-full w-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                </div>
                <Label
                  htmlFor="english-speaking"
                  className="text-sm cursor-pointer"
                  onClick={() => setCountryOption("english-speaking")}
                >
                  English Speaking Countries
                </Label>
              </div>
            </div>

            {countryOption === "select-countries" && (
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Select Countries</Label>
                <div className="grid grid-cols-2 gap-2">
                  {countries.map((country) => (
                    <button
                      key={country.id}
                      onClick={() => {
                        if (selectedCountries.includes(country.id)) {
                          setSelectedCountries(selectedCountries.filter((c) => c !== country.id))
                        } else {
                          setSelectedCountries([...selectedCountries, country.id])
                        }
                      }}
                      className={`px-3 py-2 rounded text-sm text-left ${
                        selectedCountries.includes(country.id)
                          ? "bg-orange-500 text-white"
                          : "bg-orange-100 text-orange-600 hover:bg-orange-200"
                      }`}
                    >
                      {country.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Complete Selection Button */}
          <div className="flex justify-center pt-6">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">Complete Selection</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
