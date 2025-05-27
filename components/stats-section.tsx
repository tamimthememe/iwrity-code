import Image from "next/image"

interface StatProps {
  value: string
  label: string
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="mb-8">
      <div className="text-4xl font-bold text-[#f66000] md:text-5xl">{value}</div>
      <p className="mt-2 text-sm text-[#444444] md:text-base">{label}</p>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=500&width=500&query=smiling woman at desk with computer"
                alt="Author using iWrity"
                width={500}
                height={500}
                className="h-auto w-auto max-w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat value="+10k" label="Verified reviews submitted through the platform" />
            <Stat value="97%" label="Author satisfaction rate with review quality" />
            <Stat value="+5k" label="Books uploaded by indie authors and publishers" />
            <Stat value="3 days" label="Average time to first review after book upload" />
          </div>
        </div>
      </div>
    </section>
  )
}
