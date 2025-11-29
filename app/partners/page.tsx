"use client"

import { CheckCircle2, ExternalLink, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1DADBF]">Our Partners</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            UIU Data Science Club collaborates with industry leaders to provide our members with valuable resources and
            opportunities.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Official Partnership Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-[#1DADBF] rounded-full"></div>
              <span className="text-[#1DADBF] text-sm font-medium">Official Partnership</span>
            </div>

            {/* DataCamp Section */}
            <div>
              <h2 className="text-3xl font-bold text-[#1DADBF] mb-4">DataCamp Donates Partnership</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are thrilled to announce that UIU Data Science Club is now an official partner of DataCamp Donates!
                As part of this partnership, our fellow members will receive a 1-year DataCamp subscription—absolutely
                FREE!
              </p>
            </div>

            {/* Why DataCamp Section */}
            <div>
              <h3 className="text-xl font-bold text-[#1DADBF] mb-6">Why DataCamp?</h3>
              <ul className="space-y-4">
                {[
                  "350+ courses on Python, SQL, R, Machine Learning & more",
                  "Hands-on coding experience in an interactive environment",
                  "Career tracks & skill tracks tailored for data professionals",
                  "Industry-recognized certifications that add value to your resume",
                  "Learn at your own pace & boost your career in Data Science & Analytics",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1DADBF] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certification Section */}
            <div>
              <h3 className="text-xl font-bold text-[#1DADBF] mb-3">DataCamp Certification = Job Market Advantage</h3>
              <p className="text-gray-700 leading-relaxed">
                Employers worldwide recognize DataCamp certifications as proof of practical skills in data science and
                analytics. With this opportunity, you can build a strong portfolio and stand out in the competitive job
                market!
              </p>
            </div>

            {/* Info Box */}
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#1DADBF]">Stay tuned for more details</span> on how to claim your
                free subscription. Let's upskill together!
                <span className="text-[#1DADBF] font-semibold"> 📧 📍</span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1DADBF] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 font-semibold">
                Learn About DataCamp Donates <ExternalLink className="w-4 h-4" />
              </button>
              <button className="bg-white text-[#1DADBF] border-2 border-[#1DADBF] px-6 py-3 rounded-lg hover:bg-cyan-50 transition-colors flex items-center gap-2 font-semibold">
                Join Our Club <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Partnership Announcement */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex flex-col justify-between">
            {/* Title */}
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-[#1DADBF] mb-8 leading-tight">
                PARTNERSHIP
                <br />
                ANNOUNCEMENT
              </h2>

              {/* Logos */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center shadow-sm p-2">
                  <span className="text-sm font-bold text-center">UIU DSC</span>
                </div>
                <div className="text-2xl font-bold text-gray-400">+</div>
                <div className="w-24 h-20 bg-white rounded-lg flex items-center justify-center shadow-sm p-2">
                  <span className="text-xs font-bold text-center">
                    DataCamp
                    <br />
                    Donates
                  </span>
                </div>
              </div>

              {/* Main CTA Text */}
              <h3 className="text-2xl md:text-3xl font-black text-[#1DADBF] mb-6 uppercase leading-tight">
                Our club members now enjoy FREE DataCamp Premium!
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Dive into cutting-edge courses in data science and analytics. Elevate your skills and stand out in the
                world of data.
              </p>

              {/* Emphasis Text */}
              <p className="text-xl font-black text-gray-900 mb-8 uppercase tracking-wide">
                Let's make amazing things happen together!
              </p>
            </div>

            {/* Eligibility */}
            <div className="border-t pt-6">
              <h4 className="font-bold text-gray-900 mb-3">Eligibility</h4>
              <p className="text-sm text-gray-700 mb-6">
                All active members of UIU Data Science Club are eligible for the free DataCamp subscription.
              </p>

              {/* DataCamp Logos */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-10 bg-white rounded flex items-center justify-center shadow-sm p-1">
                  <span className="text-xs font-bold">DC</span>
                </div>
                <div className="w-20 h-10 bg-gray-900 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">DC Dark</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
