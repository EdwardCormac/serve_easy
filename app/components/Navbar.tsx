"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Heart, User, Search, MapPin, LogIn, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const categories = [
  "Plumber",
  "Electrician",
  "Housekeeper",
  "Mechanic",
  "Painter",
  "Gardener",
  "Carpenter",
  "Hairdresser",
]

const savedAddresses = [
  { id: 1, name: "Home", address: "123 Main St, New York, NY" },
  { id: 2, name: "Work", address: "456 Office Ave, New York, NY" },
  { id: 3, name: "Mom's House", address: "789 Family Rd, Los Angeles, CA" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState(savedAddresses[0])
  const [placeholder, setPlaceholder] = useState("")
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<{ email: string } | null>(null)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [])

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setIsLoggedIn(true)
      setUser(JSON.parse(storedUser))
    } else {
      setIsLoggedIn(false)
      setUser(null)
    }
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholder(categories[Math.floor(Math.random() * categories.length)])
    }, 3000) // Change placeholder every 3 seconds

    return () => clearInterval(intervalId)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log(`Searching for ${searchQuery} in ${selectedLocation.address}`)
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    setIsLoggedIn(false)
    setUser(null)
    router.push("/")
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-3xl font-bold gradient-text text-shadow">
            Serve Easy
          </Link>
          <div className="hidden lg:flex items-center space-x-4 flex-grow justify-center">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder={`Search ${placeholder}...`}
                  className="pl-10 pr-4 py-2 border rounded-l-full w-64 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              </div>
              <div className="relative">
                <select
                  value={selectedLocation.id}
                  onChange={(e) =>
                    setSelectedLocation(
                      savedAddresses.find((addr) => addr.id === Number.parseInt(e.target.value)) || savedAddresses[0],
                    )
                  }
                  className="pl-8 pr-4 py-2 border-l-0 border rounded-r-full appearance-none bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {savedAddresses.map((address) => (
                    <option key={address.id} value={address.id}>
                      {address.name}
                    </option>
                  ))}
                </select>
                <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              </div>
              <button type="submit" className="sr-only">
                Search
              </button>
            </form>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-4">
              <NavLink href="/catalogue" label="Catalogue" />
              <NavLink href="/support" label="Support" />
              <NavLink href="/about" label="About Us" />
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/favorites" className="text-muted-foreground hover:text-primary">
                <Heart className="w-6 h-6" />
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <User className="h-5 w-5" />
                    {isLoggedIn && <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-500" />}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {isLoggedIn && user ? (
                    <>
                      <DropdownMenuItem className="font-medium">{user.email}</DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/account" className="w-full">
                          Account Settings
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Button variant="ghost" className="w-full justify-start p-0" onClick={handleLogout}>
                          Log out
                        </Button>
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem>
                        <Link href="/login" className="w-full flex items-center">
                          <LogIn className="mr-2 h-4 w-4" /> Log in
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/signup" className="w-full flex items-center">
                          <UserPlus className="mr-2 h-4 w-4" /> Sign up
                        </Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <NavLink href="/catalogue" label="Catalogue" />
            <NavLink href="/support" label="Support" />
            <NavLink href="/about" label="About Us" />
            {isLoggedIn ? (
              <>
                <NavLink href="/account" label="Account Settings" />
                <button
                  className="block w-full text-left py-2 px-3 rounded-md transition-colors hover:bg-muted"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <NavLink href="/login" label="Log in" />
                <NavLink href="/signup" label="Sign up" />
              </>
            )}
          </nav>
          <form onSubmit={handleSearch} className="px-4 pb-4">
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder={`Search ${placeholder}...`}
                className="pl-10 pr-4 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                value={selectedLocation.id}
                onChange={(e) =>
                  setSelectedLocation(
                    savedAddresses.find((addr) => addr.id === Number.parseInt(e.target.value)) || savedAddresses[0],
                  )
                }
                className="pl-10 pr-4 py-2 border rounded-full w-full appearance-none bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {savedAddresses.map((address) => (
                  <option key={address.id} value={address.id}>
                    {address.name} - {address.address}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="sr-only">
              Search
            </button>
          </form>
        </motion.div>
      )}
    </motion.header>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`block py-2 px-3 rounded-md transition-colors ${
        isActive
          ? "bg-primary text-primary-foreground font-semibold"
          : "text-foreground hover:bg-muted hover:text-primary"
      }`}
    >
      {label}
    </Link>
  )
}

