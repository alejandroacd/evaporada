"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import { Roboto_Condensed } from "next/font/google"

// Inicializar la fuente Roboto Condensed
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const linkClasses = (href: string) =>
    `relative transition-colors duration-200 hover:text-primary after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 ${
      pathname === href ? "text-primary after:scale-x-100" : "text-muted-foreground"
    } ${robotoCondensed.className}`

  return (
    <header className={`w-full flex items-center justify-between px-6 lg:px-24 md:px-6 py-4 border-b ${robotoCondensed.className}`}>
      
      {/* Logo en móvil (izquierda) y menú en desktop (izquierda) */}
      <div className="flex items-center md:flex-1">
        {/* Logo visible solo en móvil */}
        <h1 className="md:hidden tracking-tight text-3xl font-extrabold">
          [◉¯]
        </h1>
        {/* Menú de navegación visible solo en desktop */}
        <nav className="hidden md:flex">
          <ul className="flex flex-row items-center gap-6">
            <Link className={linkClasses("/")} href="/">Home</Link>
            <Link className={linkClasses("/publications")} href="/publications">Publications</Link>
            <Link className={linkClasses("/displays")} href="/displays">Displays</Link>
            <Link className={linkClasses("/portraits")} href="/portraits">Portraits</Link>
            <Link className={linkClasses("/about")} href="/about">About</Link>
          </ul>
        </nav>
      </div>

      {/* Logo en desktop (centro) */}
      <div className="hidden md:flex flex-1 justify-center">
        <h1 className="tracking-tight text-4xl font-extrabold">
          [◉¯]
        </h1>
      </div>

      {/* Derecha: Elementos del lado derecho */}
      <div className="flex items-center gap-4 md:flex-1 md:justify-end">
        {/* Contacto e Instagram solo en desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link className={linkClasses("/contact")} href="/contact">Contact</Link>
          <Link className={linkClasses("/instagram")} href="https://www.instagram.com/evaporada_">Instagram</Link>
        </div>
        
        {/* ThemeToggle siempre visible */}
        <ThemeToggle />
        
        {/* Botón de menú hamburguesa solo en móvil */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className={`absolute z-50 h-[calc(100vh-4rem)] top-16 left-0 w-full bg-background border-b shadow-md md:hidden animate-in fade-in slide-in-from-top-2 ${robotoCondensed.className}`}>
          <ul className="flex flex-col gap-4 px-6 py-4 text-lg">
            <Link className={linkClasses("/")} href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link className={linkClasses("/publications")} href="/publications" onClick={() => setOpen(false)}>Publications</Link>
            <Link className={linkClasses("/displays")} href="/displays" onClick={() => setOpen(false)}>Displays</Link>
            <Link className={linkClasses("/portraits")} href="/portraits" onClick={() => setOpen(false)}>Portraits</Link>
            <Link className={linkClasses("/about")} href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link className={linkClasses("/contact")} href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link
              className={`text-muted-foreground hover:text-primary transition-colors duration-200 ${robotoCondensed.className}`}
              href="https://instagram.com/evaporada_"
              onClick={() => setOpen(false)}
            >
              Instagram
            </Link>
          </ul>
        </nav>
      )}
    </header>
  )
}