import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingTierProps {
  name: string
  price: string
  period: string
  tagline: string
  description: string
  features: string[]
  buttonText: string
}

function PricingTier({ name, price, period, tagline, description, features, buttonText }: PricingTierProps) {
  return (
    <div className="flex flex-col rounded-lg bg-white p-8 shadow-sm">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-medium text-[#333333]">{name}</h3>
        <div className="mt-4 flex items-baseline justify-center">
          <span className="text-5xl font-bold tracking-tight text-[#333333]">{price}</span>
          {period && <span className="ml-1 text-xl text-[#666666]">/ {period}</span>}
        </div>
        <p className="mt-2 text-sm text-[#f66000]">{tagline}</p>
      </div>
      <p className="mb-6 text-center text-sm text-[#444444]">{description}</p>
      <ul className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-[#f66000]" />
            <span className="text-sm text-[#444444]">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button className="w-full bg-[#f66000] hover:bg-orange-600">{buttonText}</Button>
      </div>
    </div>
  )
}

export default function PricingSection() {
  const pricingTiers = [
    {
      name: "Free Version",
      price: "$0",
      period: "",
      tagline: "7-day trial",
      description: "Earn and Collect unlimited Points while you read and review books",
      features: [
        "Unlimited Access To The Readers Library",
        "Unlimited Points Stock Up Points For Your Book Launch",
        "Points Never Expire",
      ],
      buttonText: "Get it now",
    },
    {
      name: "Monthly Plan",
      price: "$25",
      period: "month",
      tagline: "cancel renewal anytime",
      description: "There is no limit to how many reviews you can gain for your book.",
      features: [
        "Unlimited Book Postings",
        "Unlimited Reviews For Each Book",
        "No Charges Or Fees Per Review",
        "Rewarded 2000 Points",
      ],
      buttonText: "Get it now",
    },
    {
      name: "Yearly Plan",
      price: "$240",
      period: "year",
      tagline: "cancel renewal anytime",
      description: "There is no limit to how many reviews you can gain for your book.",
      features: [
        "Unlimited Book Postings",
        "Unlimited Reviews For Each Book",
        "No Charges Or Fees Per Review",
        "Rewarded 2000 Points",
      ],
      buttonText: "Get it now",
    },
  ]

  return (
    <section className="w-full bg-[#f8f8f8] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#333333] md:text-4xl">Pricing and Plans</h2>
          <div className="mt-2 flex justify-center">
            <div className="h-1 w-16 bg-[#f66000]"></div>
          </div>
          <p className="mt-6 text-center text-[#444444]">
            This book is concerned with creating typography and is essential for professionals who regularly work for
            clients.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              period={tier.period}
              tagline={tier.tagline}
              description={tier.description}
              features={tier.features}
              buttonText={tier.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
