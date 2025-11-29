import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#1dadbf] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#1dadbf] transition">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#1dadbf] transition">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/questions-bank" className="hover:text-[#1dadbf] transition">
                  Questions Bank
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#1dadbf] transition">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1dadbf] transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#1dadbf] transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1dadbf] transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1dadbf] transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@uiudsc.com</p>
            <p className="text-gray-400">Phone: +880-1XXX-XXXXXX</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 UIU Data Science Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
