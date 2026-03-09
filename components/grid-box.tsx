"use client"

import { ViewLink } from "@/components/view-link"
import Image from "next/image"
import { Oswald } from "next/font/google"

// Inicializar la fuente Oswald
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400']
})

interface SectionItem {
    title: string
    image: string
    id?: string | number
    href?: string
    section?: string
    description?: string
}

export const GridBox = ({title, image, id, section, href, description}: SectionItem) => {
    const redirectLink = id ? `/${section}/${id}` : href;
    return (
        <ViewLink
            href={redirectLink || "#"}
            className="group relative h-[260px] overflow-hidden border border-border shadow-md"
            style={{ viewTransitionName: title.toLowerCase().replace(" ", "-") }}
        >
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 ease-out"
            />
            {/* Mobile: Bottom title bar with white background */}
            <div className="md:hidden absolute bottom-0 inset-x-0 bg-white py-2">
                <h2 className={`text-lg font-normal text-center uppercase tracking-wide text-black ${oswald.className}`}>
                    {title}
                </h2>
            </div>
            
            {/* Desktop: Overlay más oscuro */}
            <div className="hidden md:block absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Desktop: Títulos con movimiento más sutil */}
            <div className="hidden md:flex absolute inset-0 flex-col items-center justify-center 
                    text-white tracking-wide opacity-0 group-hover:opacity-100 
                    transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                {/* Aplicar la fuente Oswald al título */}
                <h2 className={`text-xl font-normal text-center lowercase drop-shadow-lg ${oswald.className}`}>
                    {title}
                </h2>
            </div>
        </ViewLink>
    );
}