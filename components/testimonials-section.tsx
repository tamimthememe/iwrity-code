"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Developer",
    content:
      "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/placeholder.svg?height=80&width=80&query=man profile 1",
  },
  {
    id: 2,
    name: "John Doe2",
    role: "Developer",
    content:
      "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/placeholder.svg?height=80&width=80&query=man profile 2",
  },
  {
    id: 3,
    name: "John Doe3",
    role: "Developer",
    content:
      "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/placeholder.svg?height=80&width=80&query=man profile 3",
  },
  {
    id: 4,
    name: "Jane Smith",
    role: "Author",
    content:
      "Amazing platform for getting genuine reviews. The process is smooth and the results are fantastic. Highly recommend!",
    image: "/placeholder.svg?height=80&width=80&query=woman profile 1",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1) // Start with the middle card active
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoRotation = () => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 10000) // Change every 10 seconds
  }

  useEffect(() => {
    startAutoRotation()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    // Reset the timer when manually navigating
    if (timerRef.current) clearInterval(timerRef.current)
    startAutoRotation()
  }

  // Get visible testimonials (3 at a time)
  const getVisibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i - 1 + testimonials.length) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className="w-full bg-[#f8f8f8] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#333333] md:text-4xl">Reviews from happy readers</h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-16 bg-[#f66000]"></div>
          </div>
          <p className="mt-6 text-center text-[#444444]">
            This book is concerned with creating typography and is essential for professionals who regularly work for
            clients.
          </p>
        </div>

        <div className="relative mx-auto">
          {/* Testimonial cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`rounded-lg bg-white p-6 shadow-sm transition-all duration-300 ${
                  index === 1 ? "border border-[#5454dc]" : ""
                }`}
              >
                {/* Stars */}
                <div className="mb-4 flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-[#f2b827]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-center text-lg font-semibold text-[#333333]">Very Effective!</h3>

                {/* Content */}
                <p className="mb-6 text-center text-sm text-[#444444]">{testimonial.content}</p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-[#333333]">{testimonial.name}</h4>
                  <p className="text-sm text-[#444444]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-[#5454dc]" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
