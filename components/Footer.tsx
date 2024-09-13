import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 pt-10 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-10">
          {/* Logo & Description */}
          <div className="col-span-full lg:col-span-2 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">HotelName</h1>
            <p className="text-sm text-gray-600 mb-6">
              Experience luxury and comfort in more than 100 destinations. Need
              assistance?
            </p>
            <Link
              href="/contact"
              className="py-2.5 px-5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Pagedone */}
          <div className="text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Company
            </h4>
            <ul className="text-sm text-gray-600">
              <li className="mb-4">
                <Link href="/" className="hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/about" className="hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/pricing" className="hover:text-gray-800">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-gray-800">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Our Services
            </h4>
            <ul className="text-sm text-gray-600">
              <li className="mb-4">
                <Link href="/service1" className="hover:text-gray-800">
                  Luxury Suites
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/service2" className="hover:text-gray-800">
                  Spa & Wellness
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/service3" className="hover:text-gray-800">
                  Dining Options
                </Link>
              </li>
              <li>
                <Link href="/service4" className="hover:text-gray-800">
                  Event Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Resources
            </h4>
            <ul className="text-sm text-gray-600">
              <li className="mb-4">
                <Link href="/faqs" className="hover:text-gray-800">
                  FAQs
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/quick-start" className="hover:text-gray-800">
                  Quick Start
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/documentation" className="hover:text-gray-800">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/user-guide" className="hover:text-gray-800">
                  User Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div className="text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Blog</h4>
            <ul className="text-sm text-gray-600">
              <li className="mb-4">
                <Link href="/news" className="hover:text-gray-800">
                  News
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/tips" className="hover:text-gray-800">
                  Tips & Tricks
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/updates" className="hover:text-gray-800">
                  New Updates
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gray-800">
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-7 border-t border-gray-200">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <span className="text-sm text-gray-500 mb-4 lg:mb-0">
              © 2024{' '}
              <Link
                href="https://example.com"
                className="text-blue-600 hover:underline"
              >
                HotelName
              </Link>
              . All rights reserved.
            </span>
            <div className="flex space-x-4">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
