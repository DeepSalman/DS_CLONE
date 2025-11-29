import Header from "@/components/header"
import Hero from "@/components/hero"
import Partnership from "@/components/partnership"
import Features from "@/components/features"
import Events from "@/components/events"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Partnership />
      <Features />
      <Events />
      <CallToAction />
      <Footer />
    </main>
  )
}
