"use client"
import { GridBox } from "./grid-box"
import { GridLayout } from "./grid-layout"

interface SectionItem {
  title: string
  image: string
  href: string
}

const sections: SectionItem[] = [
  { title: "Publications", image: "https://picsum.photos/600/400?random=1", href: "/publications" },
  { title: "Displays", image: "https://picsum.photos/600/400?random=2", href: "/displays" },
  { title: "Portraits", image: "https://picsum.photos/600/400?random=3", href: "/portraits" },
  { title: "About", image: "https://picsum.photos/600/400?random=4", href: "/about" },
  { title: "Instagram", image: "https://picsum.photos/600/400?random=5", href: "https://instagram.com/evaporada_" },
  { title: "Contact", image: "https://picsum.photos/600/400?random=6", href: "/contact" },
]

export const GalleryGrid = () => (
  <GridLayout>
    {sections.map((item) => (
      <GridBox key={item.title} {...item} />
    ))}
  </GridLayout>
)
