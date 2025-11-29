import Header from "@/components/header"
import Footer from "@/components/footer"

export default function QuestionsBankPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Questions Bank</h1>
        <p className="text-xl text-gray-600 mb-12">Access our collection of interview questions and resources</p>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-lg hover:border-[#1dadbf] hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Question {i}</h3>
              <p className="text-gray-600">Answer to question {i}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
