import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Serve Easy</h2>
            <p className="text-sm text-gray-600">Find local services easily</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-blue-600">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-blue-600">
                    Support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Services</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link href="/catalogue/plumbers" className="hover:text-blue-600">
                    Plumbers
                  </Link>
                </li>
                <li>
                  <Link href="/catalogue/electricians" className="hover:text-blue-600">
                    Electricians
                  </Link>
                </li>
                <li>
                  <Link href="/catalogue/cleaners" className="hover:text-blue-600">
                    House Cleaners
                  </Link>
                </li>
                <li>
                  <Link href="/catalogue/mechanics" className="hover:text-blue-600">
                    Mechanics
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600 mb-2">Email: support@serveeasy.com</p>
            <p className="text-sm text-gray-600 mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm text-gray-600">Address: 123 Service St, City, Country</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Serve Easy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

