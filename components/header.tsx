"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <>
      {/* Announcement Banner */}
      <div className="w-full bg-[#1dadbf] text-white py-3 px-4 text-center text-sm font-medium">
        <p>
          🎉 UIU DSC Recruitment is Open! Join the future of Data Science.{" "}
          <a href="#" className="font-bold hover:underline">
            Register Now →
          </a>
        </p>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/uiu-dsc-logo.png"
              alt="UIU DSC Logo"
              width={80}
              height={60}
              className="w-20 h-auto hover:opacity-80 transition"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/team" className="text-gray-700 hover:text-[#1dadbf] font-medium transition">
              Team
            </Link>
            <Link href="/partners" className="text-gray-700 hover:text-[#1dadbf] font-medium transition">
              Partners
            </Link>
            <Link href="/questions-bank" className="text-gray-700 hover:text-[#1dadbf] font-medium transition">
              Questions Bank
            </Link>
            <Link href="/track-application" className="text-gray-700 hover:text-[#1dadbf] font-medium transition">
              Track Application
            </Link>
            <Link href="/">
              <Button className="bg-[#1dadbf] hover:bg-[#1695a8] text-white transition">Events</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button variant="outline">Menu</Button>
          </div>
        </nav>
      </header>
    </>
  )
}
