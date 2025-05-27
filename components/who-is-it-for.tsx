import type React from "react"
import { Target, BookOpen, Headphones } from "lucide-react"

interface AudienceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function AudienceCard({ icon, title, description }: AudienceCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm">
      <div className="mb-4 text-[#f66000]">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-[#333333]">{title}</h3>
      <p className="text-[#444444]">{description}</p>
    </div>
  )
}

export default function WhoIsItFor() {
  const audiences = [
    {
      icon: <Target className="h-10 w-10" />,
      title: "Independent Authors",
      description: "Get honest Amazon reviews, not swaps.",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Curious Readers",
      description: "Read books. Leave reviews. Earn rewards.",
    },
    {
      icon: <Headphones className="h-10 w-10" />,
      title: "Book Marketers & Publishers",
      description: "Run compliant, trackable review campaigns.",
    },
  ]

  return (
    <section className="w-full bg-[#f8f8f8] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#333333] md:text-4xl">Who iWrity is For?</h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-16 bg-[#f66000]"></div>
          </div>
          <p className="mt-6 text-center text-[#444444]">
            This book is concerned with creating typography and is essential for professionals who regularly work for
            clients.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <AudienceCard key={index} icon={audience.icon} title={audience.title} description={audience.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
