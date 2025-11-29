import { Card } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      title: "Community",
      description: "Connect with fellow data science enthusiasts and build lasting relationships.",
    },
    {
      title: "Learning",
      description: "Access curated resources and expert-led sessions to advance your skills.",
    },
    {
      title: "Opportunities",
      description: "Gain real-world experience through projects, internships, and career guidance.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Join UIU DSC?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 border-2 border-gray-200 hover:border-[#1dadbf] hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-[#e0f7fa] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#1dadbf]">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
