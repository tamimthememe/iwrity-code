import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function ReaderProfilePage() {
  const readingHistory = [
    { title: "Harry Potter and the Prisoner of Azkaban", id: 1 },
    { title: "Harry Potter and the Prisoner of Azkaban", id: 2 },
    { title: "Harry Potter and the Prisoner of Azkaban", id: 3 },
    { title: "Harry Potter and the Prisoner of Azkaban", id: 4 },
    { title: "Harry Potter and the Prisoner of Azkaban", id: 5 },
  ]

  const reviewHistory = [
    {
      id: 1,
      rating: 4,
      text: "I was thoroughly impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
    },
    {
      id: 2,
      rating: 4,
      text: "I was thoroughly impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
    },
    {
      id: 3,
      rating: 4,
      text: "I was thoroughly impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
    },
  ]

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Profile Section */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Profile Info */}
            <div className="md:col-span-2">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=200&width=300&query=smiling woman with tennis racket"
                    alt="Linda Carter"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="mb-4 text-3xl font-bold text-[#333333]">Linda Carter</h1>
                  <div className="mb-6 space-y-1">
                    <p className="text-sm font-medium uppercase tracking-wider text-[#f66000]">
                      COUNTRY: UNITED STATES
                    </p>
                    <p className="text-sm font-medium uppercase tracking-wider text-[#f66000]">CLUB: WESTWOOD CLUB</p>
                  </div>
                  <div className="space-y-4 text-[#444444]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper nec risus et porta.
                      Vestibulum suscipit ante id. Etiam congue semper sed. Ut molestie accumsan, definiebas ad mel,
                      nulla feugiat posidonium sed. Ut molestie accumsan, definiebas ad mel, nulla feugiat posidonium
                      sed. Ut molestie accumsan.
                    </p>
                    <p>
                      Sed lorem phasellus deserunt sit. Sed nulla dolorem et, eu cum aperiam facilisi consequat. Ne
                      volutpat voluptaria definiebas his, quia dicunt voluptatum pri et. Ut quem dolorem nam. Eam et
                      regione vivendo percipit. Nulla mauris pharetra cum ex, ne est accumsan voluptatum. Ut semper
                      instructior conclusionemque vis, lorem percipit reprehendunt et est, qui vocibus voluptua
                      necessitatibus et.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Points Balance Card */}
            <div className="md:col-span-1">
              <div className="rounded-lg border-2 border-[#f66000] bg-white p-6">
                <h3 className="mb-4 text-xl font-semibold text-[#f66000]">Points Balance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#444444]">Total Points</span>
                    <span className="text-2xl font-bold text-[#f66000]">300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#444444]">Total Spent</span>
                    <span className="text-2xl font-bold text-[#f66000]">1500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#444444]">Total Saved</span>
                    <span className="text-2xl font-bold text-[#f66000]">40</span>
                  </div>
                </div>
                <Button className="mt-6 w-full bg-[#f66000] hover:bg-orange-600">Get Points</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reading History */}
      <section className="w-full bg-[#f8f8f8] py-16">
        <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#333333]">Reading History</h2>
          <div className="space-y-4">
            {readingHistory.map((book) => (
              <div key={book.id} className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
                <span className="text-[#444444]">{book.title}</span>
                <Button variant="link" className="text-[#f66000] hover:text-orange-600">
                  Read Again
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button className="bg-[#f66000] px-8 hover:bg-orange-600">View all Books</Button>
          </div>
        </div>
      </section>

      {/* Review History */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#333333]">Review History</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {reviewHistory.map((review) => (
              <div key={review.id} className="rounded-lg border border-[#f66000] bg-white p-6">
                <div className="mb-4 flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "fill-[#fdd264] text-[#fdd264]" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-center text-sm text-[#444444]">{review.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button className="bg-[#f66000] px-8 hover:bg-orange-600">View all Reviews</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
