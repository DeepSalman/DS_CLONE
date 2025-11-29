import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Events() {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Upcoming Events</h2>

        <Card className="p-12 border-2 border-gray-200 text-center">
          <p className="text-2xl font-semibold text-gray-700 mb-6">No Upcoming Events</p>
          <p className="text-gray-600 mb-8">
            Stay tuned for exciting workshops, competitions, and networking sessions!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-[#1dadbf] hover:bg-[#1695a8] text-white px-6 py-2 transition">
              View Past Events
            </Button>
            <Button
              variant="outline"
              className="border-[#1dadbf] text-[#1dadbf] hover:bg-[#1dadbf]/10 px-6 py-2 bg-transparent transition"
            >
              Subscribe for Updates
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
