import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Mail, Linkedin } from "lucide-react"

export default function TeamPage() {
  const moderator = {
    name: "Ms. Khushnur Binte Johangir",
    role: "Moderator",
    image: "/female-professional-moderator.jpg",
  }

  const executiveCommittee = [
    {
      name: "Marfique Ahmed",
      role: "President",
      image: "/male-professional-president.jpg",
    },
    {
      name: "MD Mahfiul Islam Mahi",
      role: "Vice President",
      image: "/male-professional-vice-president.jpg",
    },
    {
      name: "Mushfiqur Rahman",
      role: "General Secretary",
      image: "/male-professional-secretary.jpg",
    },
    {
      name: "Meherun Nehnaj Miti",
      role: "Joint Secretary",
      image: "/female-professional-secretary.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Our Team Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1dadbf] mb-4">Our Team</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the dedicated individuals who make the UIU Data Science Club possible.
          </p>
        </div>
      </section>

      {/* Moderator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1dadbf] text-center mb-16">Moderator</h2>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-300">
                <Image src={moderator.image || "/placeholder.svg"} alt={moderator.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{moderator.name}</h3>
              <p className="text-[#1dadbf] font-medium mb-4">{moderator.role}</p>
              <div className="flex justify-center gap-4">
                <button className="text-gray-400 hover:text-[#1dadbf] transition">
                  <Mail size={20} />
                </button>
                <button className="text-gray-400 hover:text-[#1dadbf] transition">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1dadbf] text-center mb-16">Executive Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveCommittee.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-full h-48 md:h-56 mb-6 rounded-lg overflow-hidden bg-gray-300">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#1dadbf] font-medium mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <button className="text-gray-400 hover:text-[#1dadbf] transition">
                    <Mail size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-[#1dadbf] transition">
                    <Linkedin size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
