import { GridBox } from "./grid-box";
import { GridLayout } from "./grid-layout";
import { getPublicCovers } from "@/app/actions";

interface SectionItem {
  title: string;
  image: string;
  href: string;
}

// Mapeo de secciones a rutas
const SECTION_PATHS: Record<string, string> = {
  publications: "/publications",
  displays: "/displays", 
  portraits: "/portraits",
  about: "/about",
  instagram: "https://instagram.com/evaporada_",
  contact: "/contact"
};

// Títulos por defecto en caso de que no haya título en la DB
const DEFAULT_TITLES: Record<string, string> = {
  publications: "Publications",
  displays: "Displays",
  portraits: "Portraits", 
  about: "About",
  instagram: "Instagram",
  contact: "Contact"
};

export const revalidate = 60;
export async function GalleryGrid() {
  // Obtener las covers desde Supabase
  const covers = await getPublicCovers();
  
  // Crear un mapa para acceso rápido
  const coverMap: Record<string, any> = {};
  covers.forEach(cover => {
    coverMap[cover.section] = cover;
  });

  // Definir todas las secciones necesarias
  const sections: SectionItem[] = [
    "publications",
    "displays", 
    "portraits",
    "about",
    "instagram",
    "contact"
  ].map(section => {
    const cover = coverMap[section];
    
    return {
      title: cover?.title || DEFAULT_TITLES[section] || section,
      image: cover?.image_url || getFallbackImage(section),
      href: SECTION_PATHS[section] || `/${section}`
    };
  });

  return (
    <GridLayout>
      {sections.map((item) => (
        <GridBox key={item.title} {...item} />
      ))}
    </GridLayout>
  );
}

// Función para imágenes de fallback (opcional)
function getFallbackImage(section: string): string {
  // Puedes usar placeholders, imágenes locales, o seguir usando picsum
  const fallbackImages: Record<string, string> = {
    publications: "https://picsum.photos/600/400?random=1&grayscale",
    displays: "https://picsum.photos/600/400?random=2&grayscale",
    portraits: "https://picsum.photos/600/400?random=3&grayscale",
    about: "https://picsum.photos/600/400?random=4&grayscale",
    instagram: "https://picsum.photos/600/400?random=5&grayscale",
    contact: "https://picsum.photos/600/400?random=6&grayscale"
  };
  
  return fallbackImages[section] || "https://picsum.photos/600/400?random=7&grayscale";
}