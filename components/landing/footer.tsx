/**
 * Footer component with contact information and site links
 * Features comprehensive company information and navigation
 */
import React from 'react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">GLS</span>
              </div>
              <span className="font-semibold text-white">GLS</span>
            </div>
            <address className="text-gray-300 text-sm leading-relaxed not-italic">
              GLS UNIVERSAL TOWERS, SECTOR-4<br />
              VAISHALI, GHAZIABAD, U.P<br />
              PIN-201010
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase text-sm">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/about" className="block text-gray-300 hover:text-white text-sm transition-colors">
                About Us
              </Link>
              <Link href="/projects" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Our Projects
              </Link>
              <Link href="/media" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Media Centre
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* For Existing Customers */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase text-sm">For Existing Customers</h3>
            <nav className="space-y-3">
              <Link href="/customer-care" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Customer Care
              </Link>
              <Link href="/payment" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Online Payment
              </Link>
              <Link href="/maintenance" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Maintenance Request
              </Link>
              <Link href="/documentation" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Documentation
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase text-sm">Legal</h3>
            <nav className="space-y-3">
              <Link href="/privacy" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Disclaimer
              </Link>
              <Link href="/rera" className="block text-gray-300 hover:text-white text-sm transition-colors">
                RERA Details
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-xs">
            © 2024 GLS INFRATECH LIMITED. ALL RIGHTS RESERVED.
          </div>
          <div className="text-gray-400 text-xs">
            BACK TO TOP
          </div>
        </div>
      </div>
    </footer>
  )
}
