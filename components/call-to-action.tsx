import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#e0f7fa] to-[#b3f0f8]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl font-bold text-gray-900">Ready to Join?</h2>
        <p className="text-2xl text-gray-600">
          Become part of our growing community of data science enthusiasts and take your skills to the next level.
        </p>
        <Button className="bg-[#1dadbf] hover:bg-[#1695a8] text-white px-8 py-4 text-lg transition">
          Register Now
        </Button>
      </div>
    </section>
  )
}
