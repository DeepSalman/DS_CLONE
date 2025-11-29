import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">UIU Data Science Club</h1>
            <p className="text-xl text-gray-600">
              Empowering the next generation of data scientists through learning, collaboration, and innovation.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#1dadbf] hover:bg-[#1695a8] text-white px-6 py-3 text-lg transition">
                Explore Events
              </Button>
              <Link href="/team">
                <Button
                  variant="outline"
                  className="border-[#1dadbf] text-[#1dadbf] hover:bg-[#1dadbf]/10 px-6 py-3 text-lg bg-transparent transition"
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/university-students-data-science-club-group-photo.jpg"
              alt="UIU DSC Team"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
