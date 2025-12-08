import { GalleryGrid } from "@/components/gallery-grid";

export const revalidate = 60;
export default async function HomePage() {
  return <GalleryGrid />
}