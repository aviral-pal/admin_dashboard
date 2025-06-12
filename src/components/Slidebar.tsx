"use client"

import Link from 'next/link'
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Users", href: "#", disabled: true },
  { name: "Settings", href: "#", disabled: true },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu toggle */}
      <div className="md:hidden p-4 flex justify-between items-center border-b bg-background">
        <div className="text-2xl font-bold">Admin Panel</div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "block px-4 py-2 rounded hover:bg-muted",
                item.href === "/dashboard" && "bg-muted font-semibold"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 h-screen p-4 border-r bg-background shadow-md">
        <div className="text-2xl font-bold mb-6">Admin Panel</div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "block px-4 py-2 rounded hover:bg-muted",
                item.href === "/dashboard" && "bg-muted font-semibold"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
