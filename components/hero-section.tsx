import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f8f8f8] py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center justify-items-center gap-8 text-center md:grid-cols-3 md:text-left">
            <div className="flex flex-col gap-4 md:col-span-2">
              <p className="text-sm font-medium text-gray-500">Get the Best Books</p>
              <h1 className="text-4xl font-bold tracking-tight text-[#333333] md:text-5xl lg:text-6xl">
                Your Books Deserve Real Reviews—Not Review Swaps
              </h1>
              <ul className="mt-4 space-y-3 text-center md:text-left">
                {[
                  "Amazon-compliant reviews only",
                  "Upload PDF or Kindle books easily",
                  "Reward real readers, not review swappers",
                  "Earn points by submitting Amazon reviews",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 justify-center md:justify-start">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#5454dc]" />
                    <span className="text-[#444444]">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button className="bg-[#f66000] px-8 py-6 text-base font-medium text-white hover:bg-orange-600">
                  Join iWrity Now
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:col-span-1">
              <div className="relative h-[250px] w-full max-w-[300px] sm:h-[350px] sm:max-w-[350px] md:h-[400px] md:max-w-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207114-GD7B5Hf1jkJoFLax8ofTdQpOAmVnO4.png"
                  alt="Amazon book review with 5-star rating illustration"
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
