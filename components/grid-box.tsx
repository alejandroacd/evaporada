"use client"

import { ViewLink } from "@/components/view-link"
import Image from "next/image"

interface SectionItem {
    title: string
    image: string
    href: string
}

export const GridBox = ({title, image, href}: SectionItem) => {
    return (
        <ViewLink
            href={href}
            className="group relative h-[260px] overflow-hidden rounded-sm border border-border shadow-md"
            style={{ viewTransitionName: title.toLowerCase().replace(" ", "-") }}
        >
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center 
                    text-white tracking-wide opacity-0 group-hover:opacity-100 
                    transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <h2 className="text-xl font-semibold text-center uppercase">{title}</h2>
            </div>
        </ViewLink>
    );
}