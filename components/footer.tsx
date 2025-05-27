import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a24] text-white">
      <div className="mx-auto w-full max-w-[80%] px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <Image
                    src="/iWrity-logo.png"
                    alt="iWrity Logo"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">iWrity.com</span>
                  <span className="text-xs uppercase tracking-wider text-gray-400">Amazon Book Reviews</span>
                </div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Veniam Sequi molestias aut necessitatibus optio magni at natus accusamus. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Cupiditate, obcaecat.
            </p>
          </div>

          {/* Links */}
          <div className="md:ml-12">
            <h3 className="mb-4 text-lg font-semibold">Links</h3>
            <ul className="space-y-2">
              {["Home", "Library", "About Us", "Contact", "Login"].map((item) => (
                <li key={item}>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="mb-4 flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <div className="rounded-full border border-gray-700 p-2 hover:border-[#f66000]">
                  <Facebook className="h-5 w-5" />
                </div>
              </Link>
              <Link href="#" aria-label="Twitter">
                <div className="rounded-full border border-gray-700 p-2 hover:border-[#f66000]">
                  <Twitter className="h-5 w-5" />
                </div>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <div className="rounded-full border border-gray-700 p-2 hover:border-[#f66000]">
                  <Linkedin className="h-5 w-5" />
                </div>
              </Link>
              <Link href="#" aria-label="Instagram">
                <div className="rounded-full border border-gray-700 p-2 hover:border-[#f66000]">
                  <Instagram className="h-5 w-5" />
                </div>
              </Link>
            </div>

            <div className="space-y-2">
              <p className="text-sm">
                <Link href="tel:+13055479909" className="text-gray-400 hover:text-white">
                  +1 (305) 547-9909
                </Link>
              </p>
              <p className="text-sm text-gray-400">
                382 NE 191st St # 87394
                <br />
                Miami, FL 33179-3899
              </p>
              <p className="text-sm">
                <Link href="mailto:info@example.com" className="text-gray-400 hover:text-white">
                  info@example.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="mx-auto w-full max-w-[80%] px-4 text-center text-sm text-gray-400 md:px-6">
          @ 2025-Copyright reserved to iWrity.Proudly Crafted by{" "}
          <Link href="#" className="text-[#f66000] hover:underline">
            Rubrixcode
          </Link>
        </div>
      </div>
    </footer>
  )
}
