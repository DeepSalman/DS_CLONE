import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TrackApplicationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Track Application</h1>
        <p className="text-xl text-gray-600 mb-12">Check the status of your application</p>
        <div className="max-w-md mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-4">Enter your application ID</label>
            <input
              type="text"
              placeholder="APP-2025-001"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            />
            <button className="w-full bg-[#1dadbf] hover:bg-[#1695a8] text-white font-medium py-2 rounded-lg transition">
              Track Status
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
