import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Wallet, Cloud, LifeBuoy, Globe, FileText, MessageCircle } from "lucide-react"

export default function HelpPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background-h-PuHRTq6vK2aFMWkd8vUM5KtAMOfQX6.png"
          alt="Help and Support - Welcoming café environment"
          width={2000}
          height={500}
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Help and support</h1>
            <p className="mb-8 text-xl text-white">Search questions or useful articles</p>
            <div className="flex w-full max-w-2xl flex-col gap-2 sm:flex-row">
              <Input type="text" placeholder="What are you looking for?" className="h-12 flex-1 bg-white text-black" />
              <Button className="h-12 bg-[#f66000] px-8 text-white hover:bg-orange-600">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Select a Topic Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-2 h-1 w-16 bg-[#f66000]"></div>
            <h2 className="mb-3 text-3xl font-bold text-[#333333] md:text-4xl">Select a topic</h2>
            <p className="text-[#666666]">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Wallet className="h-12 w-12 text-[#f66000]" />,
                title: "Payments",
                description: "Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.",
              },
              {
                icon: <Cloud className="h-12 w-12 text-[#f66000]" />,
                title: "Submission",
                description: "Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.",
              },
              {
                icon: <LifeBuoy className="h-12 w-12 text-[#f66000]" />,
                title: "General help",
                description: "Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.",
              },
              {
                icon: <Globe className="h-12 w-12 text-[#f66000]" />,
                title: "International",
                description: "Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.",
              },
              {
                icon: <FileText className="h-12 w-12 text-[#f66000]" />,
                title: "Cancellation",
                description: "Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.",
              },
              {
                icon: <MessageCircle className="h-12 w-12 text-[#f66000]" />,
                title: "Reviews",
                description: "Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris.",
              },
            ].map((topic, index) => (
              <Link
                href={`/help/${topic.title.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
                className="flex flex-col items-center rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4">{topic.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-[#333333]">{topic.title}</h3>
                <p className="text-sm text-[#666666]">{topic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="w-full bg-[#f8f8f8] py-16 md:py-24">
        <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#333333] md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            {[
              {
                question: "How do I submit my book for review?",
                answer:
                  "To submit your book for review, log in to your account, navigate to the 'My Books' section, and click on 'Add New Book'. Follow the prompts to upload your book file, add details, and set your preferences for reviewers.",
              },
              {
                question: "How long does it take to get reviews?",
                answer:
                  "The review timeline varies depending on your book's length and genre. On average, you can expect to receive your first reviews within 3-7 days after submission. Premium members receive priority in the review queue.",
              },
              {
                question: "Are the reviews Amazon-compliant?",
                answer:
                  "Yes, all reviews facilitated through iWrity strictly comply with Amazon's guidelines. We do not allow review swapping or paid reviews, ensuring that all feedback is genuine and from actual readers.",
              },
              {
                question: "How do I become a reviewer?",
                answer:
                  "To become a reviewer, create an account and complete your reader profile, including your genre preferences. Once approved, you'll start receiving book recommendations that match your interests. Each review you submit earns you points.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for selected countries. All payments are processed securely through our payment partners.",
              },
            ].map((faq, index) => (
              <div key={index} className="mb-6 rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-semibold text-[#333333]">{faq.question}</h3>
                <p className="text-[#444444]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
