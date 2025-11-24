"use client"

import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className=" w-full flex items-center justify-between px-6 py-4 border-b">
      {/* Logo */}
      <h1 className="tracking-tight text-3xl font-extrabold md:mx-8 ">
        [◉¯] 
      </h1>

      {/* Desktop nav */}
      <nav className="hidden md:flex">
        <ul className="flex flex-row items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/">Publications</Link>
          <Link href="/">Displays</Link>
          <Link href="/">Artist Statement</Link>
          <Link href="/">About Me</Link>
          <Link href="/">Instagram</Link>

          <ThemeToggle />
        </ul>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="absolute z-50 h-[calc(100vh-4rem)] top-16 left-0 w-full bg-background border-b shadow-md md:hidden animate-in fade-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4 px-6 py-4 text-lg">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/" onClick={() => setOpen(false)}>Publications</Link>
            <Link href="/" onClick={() => setOpen(false)}>Displays</Link>
            <Link href="/" onClick={() => setOpen(false)}>Artist Statement</Link>
            <Link href="/" onClick={() => setOpen(false)}>About Me</Link>
            <Link href="/" onClick={() => setOpen(false)}>Instagram</Link>

            <div className="pt-2">
              <ThemeToggle />
            </div>
          </ul>
        </nav>
      )}
    </header>
  )
}
