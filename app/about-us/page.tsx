import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden md:h-[500px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background-ynNpu7ve0r3GlY2GKeUOBaQWUiT2TA.png"
          alt="About Us Hero - Professional workspace with analytics and data"
          width={2000}
          height={500}
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
      </section>

      {/* Welcome Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="absolute left-0 top-0 h-48 w-48 bg-[url('/placeholder.svg?height=200&width=200&query=dotted pattern')] bg-contain bg-no-repeat opacity-20"></div>
              <div className="relative ml-12 mt-12">
                <div className="absolute -left-8 -top-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#333333]">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600&query=judge gavel with gold band on black surface"
                    alt="Judge Gavel"
                    width={600}
                    height={400}
                    className="h-auto w-full"
                  />
                </div>
                <div className="absolute -bottom-12 -left-12 h-48 w-32 bg-[url('/placeholder.svg?height=200&width=100&query=stacked books')] bg-contain bg-no-repeat"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-[#333333] md:text-4xl lg:text-5xl">Welcome To IWrity.Com!</h2>
              <p className="text-lg text-[#f66000] italic">
                We're a friendly community created by authors, for authors. At iWrity, writers help each other by
                providing honest and genuine Amazon reviews. Importantly, there are no review swaps; all interactions
                comply strictly with Amazon's guidelines, ensuring an authentic and supportive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full bg-[#f8f8f8] py-16 md:py-24">
        <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=judge gavel with gold band on black surface"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-[#333333] md:text-4xl lg:text-5xl">Our Mission</h2>
              <p className="mb-8 text-[#444444]">
                iWrity isn't just about reviews. We're proudly part of De Fryske Wrâld (The Frisian World), a non-profit
                organization dedicated to preserving and promoting the unique Frisian language, culture, and history.
                Our goal at iWrity is to empower authors, amplify diverse literary voices, and build a creative
                community that thrives on mutual support.
              </p>
              <div>
                <Button className="bg-[#f66000] px-8 py-3 text-white hover:bg-orange-600">View All Books</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About De Fryske Wrâld Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-[#333333] md:text-4xl lg:text-5xl">About De Fryske Wrâld</h2>
              <p className="text-[#444444]">
                De Fryske Wrâld, or The Frisian World, is passionate about safeguarding Frisian heritage through
                cultural projects, educational efforts, and literature. Besides promoting Frisian culture, we also love
                helping authors from around the globe by providing platforms like iWrity.com. By publishing our own
                books and supporting fellow writers, we aim to nurture a vibrant, interconnected literary world.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=judge gavel with gold band on black surface"
                  alt="De Fryske Wrâld"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full border-t border-gray-200 py-16">
        <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: "+12K", label: "Total Users" },
              { number: "+1.5K", label: "Our Authors" },
              { number: "+14", label: "Our Winning Award" },
              { number: "+49", label: "Our Team Member" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-[#f66000] md:text-5xl">{stat.number}</p>
                <p className="mt-2 text-sm text-[#444444] md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
