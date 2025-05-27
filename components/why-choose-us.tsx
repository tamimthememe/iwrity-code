import { Check } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f66000]">
          <Check className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-[#333333]">{title}</h3>
      </div>
      <p className="text-[#444444]">{description}</p>
    </div>
  )
}

export default function WhyChooseUs() {
  const features = [
    {
      title: "Amazon-Compliant by Design",
      description:
        "We follow Amazon's review guidelines to the letter—no shortcuts, no review swaps—so your book's reputation grows the right way.",
    },
    {
      title: "Real Reviews, Real Readers",
      description:
        "Connect with genuine readers who leave thoughtful, verified reviews based on actual reading, not mutual favors.",
    },
    {
      title: "Seamless Author Tools",
      description:
        "Upload your book, set rewards, and track reviews with ease—everything is built for simplicity and control.",
    },
    {
      title: "Earn While You Read",
      description:
        "Readers get rewarded for helping authors grow. Submit Amazon reviews and earn points—it's that easy.",
    },
    {
      title: "Built-In Fraud Protection",
      description:
        "Advanced algorithms and manual checks keep the ecosystem fair by detecting and preventing fake or reciprocal reviews.",
    },
    {
      title: "AI-Enhanced Experience",
      description:
        "Leverage optional AI tools for auto-tagging, content moderation, and smart support—making your workflow smarter and faster.",
    },
  ]

  return (
    <section className="w-full bg-[#57321a] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Why Choose Us?</h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-16 bg-[#f66000]"></div>
          </div>
          <p className="mt-6 text-center text-white">
            This book is concerned with creating typography and is essential for professionals who regularly work for
            clients.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
