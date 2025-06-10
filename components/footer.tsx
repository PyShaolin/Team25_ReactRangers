import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Scheme Analyzer</h3>
            <p className="text-gray-400">Helping Indian citizens discover and access government schemes with ease.</p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/eligibility" className="text-gray-400 hover:text-white">
                  Check Eligibility
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-white">
                  Browse Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/education" className="text-gray-400 hover:text-white">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/categories/healthcare" className="text-gray-400 hover:text-white">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/categories/agriculture" className="text-gray-400 hover:text-white">
                  Agriculture
                </Link>
              </li>
              <li>
                <Link href="/categories/women" className="text-gray-400 hover:text-white">
                  Women Empowerment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-gray-400">support@schemeanalyzer.gov.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-gray-400">1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-400">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Government Scheme Eligibility Analyzer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
